const data =
    [
        [0, 'Oradea', 'Zerind', 'Arad', 'Timisoara', 'Sibiu', 'Lugoj', 'Mehadia', 'Drobeta', 'Rimnicu Vilcea', 'Pitesti', 'Craiova', 'Fagaras', 'Bucharest', 'Giurgiu', 'Urziceni', 'Neamt', 'Iasi', 'Vaslui', 'Hirsova', 'Eforie'],
        ['Oradea', 0, 71, 0, 0, 151, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Zerind', 71, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Arad', 0, 75, 0, 118, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Timisoara', 0, 0, 118, 0, 0, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Sibiu', 151, 0, 140, 0, 0, 0, 0, 0, 80, 0, 0, 99, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Lugoj', 0, 0, 0, 111, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Mehadia', 0, 0, 0, 0, 0, 70, 0, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Drobeta', 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Rimnicu Vilcea', 0, 0, 0, 0, 80, 0, 0, 0, 0, 97, 146, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Pitesti', 0, 0, 0, 0, 0, 0, 0, 0, 97, 0, 138, 0, 101, 0, 0, 0, 0, 0, 0, 0],
        ['Craiova', 0, 0, 0, 0, 0, 0, 0, 120, 146, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ['Fagaras', 0, 0, 0, 0, 99, 0, 0, 0, 0, 0, 0, 0, 211, 0, 0, 0, 0, 0, 0, 0],
        ['Bucharest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 0, 211, 0, 90, 85, 0, 0, 0, 0, 0],
        ['Giurgiu', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0],
        ['Urziceni', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 0, 0, 0, 0, 142, 98, 0],
        ['Neamt', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 0, 0, 0],
        ['Iasi', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 0, 92, 0, 0],
        ['Vaslui', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 0, 92, 0, 0, 0],
        ['Hirsova', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 0, 86],
        ['Eforie', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0]
    ]

function bfs_dfs(start, target, searchType) {
    let frontier = [];
    let visited = [];
    var parentTracker = {};
    var startIndex;
    var currentIndex;
    var targetIndex;

    // find starting row
    for (var i = 1; i < data.length; i++) {
        console.log('starting: ', data[0][i]);
        if (start === data[0][i]) {
            currentIndex = startIndex = i;
        }
        if (target === data[0][i]) {
            targetIndex = i;
        }
    }

    console.log('start: ', currentIndex, 'target: ', targetIndex);

    // push starting index into queue and visited lists
    frontier.push(currentIndex);
    visited.push(currentIndex);
    parentTracker[currentIndex] = 0;

    if (currentIndex !== undefined && targetIndex !== undefined) {
        while (currentIndex !== targetIndex && frontier.length > 0) {
            // shift node from queue or pop node off stack 
            if (searchType === 'dfs') {
                currentIndex = frontier.pop();
            } else if (searchType === 'bfs') {
                currentIndex = frontier.shift();
            }

            // expand node by pushing children to queue and visited
            for (let i = 1; i < data.length; i++) {
                console.log('current index: ', currentIndex, 'i: ', i);
                if (data[currentIndex][i] !== 0 && !visited.includes(i)) {
                    frontier.push(i);
                    visited.push(i);
                    parentTracker[i] = currentIndex;
                }
            }
        }
    }
    console.log(visited);
    var path = [targetIndex];

    // trace the path back through the parents
    while (targetIndex !== startIndex) {
        targetIndex = parentTracker[targetIndex];
        path.push(targetIndex);
    }

    path = path.reverse();
    let bestPath = [];

    // convert path indices to city names
    for (let i = 0; i < path.length; i++) {
        bestPath.push(data[path[i]][0]);
    }
    var visitedNames = [];
    visited.forEach(element => visitedNames.push(data[0][element]));
    return {bestPath: bestPath, visited: visitedNames};
}

function ids(start, target){
    let frontier = [];
    let visited = [];
    var parentTracker = {};
    var startIndex;
    var currentIndex;
    var targetIndex;
    var depth = 1;

    // find starting row
    for (var i = 1; i < data.length; i++) {
        console.log('starting: ', data[0][i]);
        if (start === data[0][i]) {
            currentIndex = startIndex = i;
        }
        if (target === data[0][i]) {
            targetIndex = i;
        }
    }

    console.log('start: ', currentIndex, 'target: ', targetIndex);

    // push starting index into queue and visited lists
    frontier.push(currentIndex);
    visited.push(currentIndex);
    parentTracker[currentIndex] = 0;

    if (currentIndex !== undefined && targetIndex !== undefined) {
        while (currentIndex !== targetIndex) {
            // increment depth if frontier is empty
            if (frontier.length === 0){
                depth++;
            }

            // pop node from front of queue
            currentIndex = frontier.shift();

            // expand node by pushing children to queue and visited
            var frontierObj = [];
            for (let i = 1; i < data.length; i++) {
                console.log('current index: ', currentIndex, 'i: ', i);
                if (data[currentIndex][i] !== 0 && !visited.includes(i)) {
                    frontierObj.push({index: i, cost: data[currentIndex][i]});
                    visited.push(i);
                    parentTracker[i] = currentIndex;
                }
            }

            // sort frontier by ascending path cost (only greedy in frontier, not overall)
            frontierObj.sort((a, b) => (a.cost > b.cost) ? 1 : -1)
            frontierObj.forEach(obj => frontier.push(obj.index));
        }
    }
    console.log(visited);
    var path = [targetIndex];

    // trace the path back through the parents
    while (targetIndex !== startIndex) {
        targetIndex = parentTracker[targetIndex];
        path.push(targetIndex);
    }

    path = path.reverse();
    let bestPath = [];

    // convert path indices to city names
    for (let i = 0; i < path.length; i++) {
        bestPath.push(data[path[i]][0]);
    }
    var visitedNames = [];
    visited.forEach(element => visitedNames.push(data[0][element]));
    return {bestPath: bestPath, visited: visitedNames};
}

function search(start, target, searchType){
    if (searchType === 'bfs' || searchType === 'dfs'){
        return bfs_dfs(start, target, searchType);
    } else if (searchType === 'ids') {
        return ids(start, target);
    }
}

export default search;