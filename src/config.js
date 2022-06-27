export const shapes = {
    squareWidth: .17,
    squareHeight: .17
}

// TODO finish formatting neighbors.  Test to make sure I'll be
// able to easily access the data

const cities = {
    oradea: {
        name: 'Oradea',
        x: .165,
        y: .025
    },
    zerind: {
        name: 'Zerind',
        x: .125,
        y: .148
    },
    arad: {
        name: 'Arad',
        x: .095,
        y: .268
    },
    timisoara: {
        name: 'Timisoara',
        x: .1,
        y: .52
    },
    sibiu: {
        name: 'Sibiu',
        x: .298,
        y: .376
    },
    lugoj: {
        name: 'Lugoj',
        x: .224,
        y: .62,
        neighbors: ['Timisoara', 'Mehadia']
    },
    mehadia: {
        name: 'Mehadia',
        x: .228,
        y: .74,
        neighbors: ['Lugoj', 'Drobeta']
    },
    drobeta: {
        name: 'Drobeta',
        x: .223,
        y: .863,
        neighbors: ['Mehadia', 'Craiova']
    },
    rimnicuVilcea: {
        name: 'Rimnicu Vilcea',
        x: .34,
        y: .519,
        neighbors: ['Sibiu', 'Craiova', 'Pitesti']
    },
    pitesti: {
        name: 'Pitesti',
        x: .493,
        y: .652,
        neighbors: ['Rimnicu Vilcea', 'Craiova', 'Bucharest']
    },
    craiova: {
        name: 'Craiova',
        x: .375,
        y: .9,
        neighbors: ['Drobeta', 'Rimnicu Vilcea', 'Pitesti']
    },
    fagaras: {
        name: 'Fagaras',
        x: .47,
        y: .4,
        neighbors: ['Sibiu', 'Bucharest']
    },
    bucharest: {
        name: 'Bucharest',
        x: .632,
        y: .775,
        neighbors: ['Fagaras', 'Pitesti', 'Giurgiu', 'Urziceni']
    },
    giurgiu: {
        name: 'Giurgiu',
        x: .585,
        y: .95,
        neighbors: ['Bucharest']
    },
    urziceni: {
        name: 'Urziceni',
        x: .73,
        y: .706,
        neighbors: ['Bucharest', 'Vaslui', 'Hirsova']
    },
    neamt: {
        name: 'Neamt',
        x: .64,
        y: .13,
        neighbors: ['Iasi']
    },
    iasi: {
        name: 'Iasi',
        x: .758,
        y: .225,
        neighbors: ['Neamt', 'Vaslui']
    },
    vaslui: {
        name: 'Vaslui',
        x: .82,
        y: .415,
        neighbors: ['Iasi', 'Urziceni']
    },
    hirsova: {
        name: 'Hirsova',
        x: .861,
        y: .707,
        neighbors: ['Urziceni', 'Eforie']
    },
    eforie: {
        name: 'Eforie',
        x: .912,
        y: .88,
        neighbors: ['Hirsova']
    }
}




export default cities;