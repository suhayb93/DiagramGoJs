import * as go from 'gojs';



export const getSearchResult = (value) => {
    const mockData = {
        mainNode: 'Some Thing Else',
        children:
            [
                {
                    name: 'child 1',
                    children: [
                        {
                            name: 'sub child 1'
                        },
                        {
                            name: 'sub child 1'
                        },
                        {
                            name: 'sub child 1'
                        }
                    ]
                },
                {
                    name: 'child 2',
                    children: [
                        {
                            name: 'sub child 2'
                        },
                        {
                            name: 'sub child 2'
                        },
                    ]

                },
                {
                    name: 'child 3',
                    children: [
                        {
                            name: 'sub child 3'
                        },
                        {
                            name: 'sub child 3'
                        },
                        {
                            name: 'sub child 3'
                        }
                    ]
                }
            ],
        parents: [
            {
                name: 'parent 1',
                parents: [
                    {
                        name: 'Grand Parent 1',
                        parents: [
                            { name: 'sub Grand Parent 1' },
                            { name: 'sub Grand Parent 1' },
                            { name: 'sub Grand Parent 1' },
                            { name: 'sub Grand Parent 1' }

                        ]
                    },
                    {
                        name: 'Grand Parent 2',
                        parents: [
                            { name: 'sub Grand Parent 2' },
                            { name: 'sub Grand Parent 2' },
                            { name: 'sub Grand Parent 2' },
                            { name: 'sub Grand Parent 3' }

                        ]
                    }
                ]
            },
            {
                name: 'parent 2',
                parents: [
                    {
                        name: 'Grand Parent 2'
                    },
                    {
                        name: 'Grand Parent 2'
                    }
                ]
            }
        ]
    }
    // call Api here
    mockData.mainNode = value

    // fetch('localhost:3440/getData', 'GET')



    return mockData


}


export function initDiagram() {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
        $(go.Diagram,
            {
                'undoManager.isEnabled': true,  // must be set to allow for model change listening
                'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },

                model: new go.GraphLinksModel(
                    {
                        linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
                    })
            });

    // define a simple Node template
    diagram.nodeTemplate =
        $(go.Node, 'Auto',  // the Shape will go around the TextBlock
            new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
            { cursor: "pointer" },
            $(go.Shape, 'RoundedRectangle',
                { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
                new go.Binding('fill', 'color')),
            $(go.TextBlock,
                { margin: 8, editable: false },  // some room around the text
                new go.Binding('text', 'text').makeTwoWay(),
            ),
            // $("TreeExpanderButton")
        );

    diagram.layout = new go.LayeredDigraphLayout({ direction: 270, layerSpacing: 35 })
    return diagram;

}

