import "./_go-js-diagram.scss"
import React from 'react'
import { initDiagram } from "../../Utils/utils";
import { ReactDiagram } from 'gojs-react';

const GoJsDiagram = (props) => {

    const [nodes, setNodes] = React.useState([]);
    const [links, setLinks] = React.useState([]);

    let _nodes = []
    let depth = 0;
    let _links = [];

    const generateLocation = (nodeNum, depth, index) => {
        const y = depth * 100;

        const x = index * 200

        return `${x} ${y}`;

    }

    const generateChildren = (nodes, mode, parentKey) => {
        if (!nodes || nodes?.length === 0) {
            return;
        }
        if (mode === 'child') {
            depth++;
        } else {
            depth--;
        }
        let idx = 0
        for (let node of nodes) {
            let nodeNum = nodes.length;
            const loc = generateLocation(nodeNum, depth, idx)
            const color = mode === 'child' ? 'orange' : 'lightblue'
            node.key = _nodes.length;
            _nodes.push({ key: _nodes.length, text: node.name, color: color, loc: loc })
            idx++;
            _links.push({ key: -_nodes.length, from: node.key, to: parentKey })
        }
        for (let node of nodes) {
            const nextLevelNodes = mode === 'child' ? node.children : node.parents
            generateChildren(nextLevelNodes, mode, node.key)
        }

    }

    const generateNodes = (data) => {
        _nodes.push({ key: 0, text: data.mainNode, color: 'pink', loc: '150 0' })

        generateChildren(data.children, 'child', 0)

        depth = 0;

        generateChildren(data.parents, 'parent', 0)

        console.log(_nodes)
        console.log(_links)

        setNodes(_nodes)

        setLinks(_links)


    }

    React.useEffect(() => {
        if (props.initData) {
            //generate nodes
            generateNodes(props.initData)
        }
    }, [props.initData])
    return (
        <div className="">
            <div>
                ...
                <ReactDiagram
                    initDiagram={initDiagram}
                    divClassName='diagram-component'
                    // nodeDataArray={[
                    //     { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
                    //     { key: 1, text: 'Beta', color: 'orange', loc: '100 0' },
                    //     { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
                    //     { key: 3, text: 'Delta', color: 'pink', loc: '150 150' }
                    // ]}
                    nodeDataArray={nodes}
                    // linkDataArray={[
                    //     { key: -1, from: 0, to: 1 },
                    //     { key: -2, from: 0, to: 2 },
                    //     { key: -3, from: 1, to: 1 },
                    //     { key: -4, from: 2, to: 3 },
                    //     { key: -5, from: 3, to: 0 }
                    // ]}
                    linkDataArray={links}
                // onModelChange={handleModelChange}
                />
                ...
            </div>

        </div>
    )

}

export default GoJsDiagram;