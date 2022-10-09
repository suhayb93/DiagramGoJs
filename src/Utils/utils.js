import * as go from 'gojs';



export const getSearchResult = (value) => {

    //this is The format that should be received from BE (Django Code)
    //this static data should be removed when data from BE is ready 
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
    mockData.mainNode = value
    ////////////////////////////////////////////////////////////


    //this code should be uncommitted to send a request to BE 
    // data should be recived as json with above fomrat 
    // const reps = await fetch(`localhost:8000/?saarchQuety=${value}`, 'GET')




    // return value should be the value that received from BE 
    return mockData


}


//Initilization function that set diagram configs 
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

