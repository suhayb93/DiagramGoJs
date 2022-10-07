import "./_go-js-diagram.scss"
import React, { useContext } from 'react'
import { initDiagram } from "../../Utils/utils";
import { ReactDiagram } from 'gojs-react';
import * as go from 'gojs';
import { GlobalStore } from "../../Utils/context";


const GoJsDiagram = (props) => {

    const [nodes, setNodes] = React.useState([]);
    const [links, setLinks] = React.useState([]);
    const diagramRef = React.useRef();
    const store = useContext(GlobalStore);



    React.useEffect(() => {
        if (props.initData) {
            generateNodes(props.initData)
        }
    }, [props.initData])

    React.useEffect(() => {
        if (!diagramRef.current) return;

        const diagram = diagramRef.current.getDiagram();

        if (diagram instanceof go.Diagram) {
            diagram.addDiagramListener('ObjectSingleClicked', function (e) {
                const part = e.subject.part;
                if (part instanceof go.Node) {
                    if ('onNodeClicked' in props) {
                        const root = diagram.findNodeForKey(0);
                        props.onNodeClicked(part.qb.text);
                        store.addHistoryItem({ text: root.qb.text, color: root.qb.color })

                    }
                }
            })
        }
    }, [])

    let _nodes = []
    let _links = [];

    const generateSubNode = (nodes, mode, parentKey) => {
        if (!nodes || nodes?.length === 0) {
            return;
        }
        for (let node of nodes) {

            const color = mode === 'child' ? 'orange' : 'lightblue'
            node.key = _nodes.length;
            _nodes.push({ key: _nodes.length, text: node.name, color: color })
            const isParent = mode === 'parent'
            const from = isParent ? parentKey : node.key
            const to = isParent ? node.key : parentKey;
            _links.push({ key: -_nodes.length, from: from, to: to })
        }
        for (let node of nodes) {
            const nextLevelNodes = mode === 'child' ? node.children : node.parents
            generateSubNode(nextLevelNodes, mode, node.key)
        }

    }

    const generateNodes = (data) => {
        _nodes.push({ key: 0, text: data.mainNode, color: 'pink' })

        generateSubNode(data.children, 'child', 0, _nodes, _links)

        generateSubNode(data.parents, 'parent', 0)

        setNodes((state) => state.concat(_nodes))

        setLinks(_links)


    }

    return (
        <div className="">
            <div>
                ...
                <ReactDiagram
                    ref={diagramRef}
                    initDiagram={initDiagram}
                    divClassName='diagram-component'
                    nodeDataArray={nodes}
                    linkDataArray={links}
                />
                ...
            </div>

        </div>
    )

}

export default GoJsDiagram;