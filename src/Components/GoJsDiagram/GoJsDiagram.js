import "./_go-js-diagram.scss"
import React, { useContext } from 'react'
import { initDiagram } from "../../Utils/utils";
import { ReactDiagram } from 'gojs-react';
import * as go from 'gojs';
import { GlobalStore } from "../../Utils/context";
import Loader from "../Loader/Loader";


const GoJsDiagram = (props) => {

    const [nodes, setNodes] = React.useState([]);
    const [links, setLinks] = React.useState([]);
    const diagramRef = React.useRef();
    const store = useContext(GlobalStore);



    // Receiving data from search component
    React.useEffect(() => {
        if (props.initData) {
            generateNodes(props.initData)
        }
    }, [props.initData])

    React.useEffect(() => {
        if (!diagramRef.current) return;

        const diagram = diagramRef.current.getDiagram();

        if (diagram instanceof go.Diagram) {
            // Envent handler when user click on the node
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

            //controll the color of the block
            const color = mode === 'child' ? 'orange' : 'lightblue'
            node.key = _nodes.length;
            //json structore for the node or blocks
            _nodes.push({ key: _nodes.length, text: node.text, color: color })
            const isParent = mode === 'parent'
            const from = isParent ? parentKey : node.key;
            const to = isParent ? node.key : parentKey;
            // json structure for links (arrow in diragram)
            // this line (from , to) to control the arrow direction on diragram 
            _links.push({ key: -_nodes.length, from: from, to: to })
        }
        for (let node of nodes) {
            const nextLevelNodes = mode === 'child' ? node.children : node.parents
            generateSubNode(nextLevelNodes, mode, node.key)
        }

    }

    // this function is to generate the structure of node and links 
    // for the diagram 
    const generateNodes = (data) => {
        _nodes = [];
        _links = [];
        _nodes.push({ key: 0, text: data.text, color: 'pink' })

        generateSubNode(data.children, 'child', 0)

        generateSubNode(data.parents, 'parent', 0)

        setNodes(_nodes)

        setLinks(_links)


    }

    return (
        <div className="my-2">
            <ReactDiagram
                ref={diagramRef}
                initDiagram={initDiagram}
                divClassName='diagram-component'
                nodeDataArray={nodes}
                linkDataArray={links}
            />
        </div>
    )

}

export default GoJsDiagram;