import React, {useState, useEffect} from 'react'
import romania from '../images/romania.png';
import './styles/Bucharest.css';
import {Form, Container, Row, Col, Button} from 'react-bootstrap';
import cities, {shapes} from '../config';
import search from '../search';
import nameMap from '../data/nameMap.json';

export default function Bucharest() {
    const [startLocation, setStartLocation] = useState('');
    const [targetLocation, setTargetLocation] = useState('');
    const [searchMethod, setSearchMethod] = useState('');
    const [canvasDimensions, setCanvasDimensions] = useState([window.innerWidth, window.innerWidth * (9/16)]);
    const [bestPath, setBestPath] = useState([]);
    const [visited, setVisited] = useState([]);

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        canvas.width = canvasDimensions[0];
        canvas.height = canvasDimensions[1];
        draw();
    })

    window.onresize = () => {
        setCanvasDimensions([window.innerWidth, window.innerWidth * (9/16)]);
    }

    function drawLine(ctx, canvasWidth, canvasHeight, city1, city2, color = '#000000') {
        ctx.beginPath();
        ctx.moveTo(city1.x * canvasWidth + (canvasWidth * shapes.squareWidth * .09 / 2), city1.y * canvasHeight + (canvasHeight * shapes.squareHeight * .16 / 2));
        ctx.lineTo(city2.x * canvasWidth + (canvasWidth * shapes.squareWidth * .09 / 2), city2.y * canvasHeight + (canvasHeight * shapes.squareHeight * .16 / 2));
        ctx.lineWidth = .01 * canvasHeight;
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    function checkColor(ctx, city){
        if (bestPath.includes(city)) {
            ctx.fillStyle = 'green'
        } else if (visited.includes(city)) {
            ctx.fillStyle = 'yellow'
        } else {
            ctx.fillStyle = 'black'
        }
    }

    function draw() {
        const canvas = document.getElementById('canvas');
        const sqx = shapes.squareWidth * canvas.width * .09;
        const sqy = shapes.squareHeight * canvas.height * .16;
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');

            // Draw optimal path lines
            for (var i = 0; i < bestPath.length - 1; i++){
                drawLine(ctx, canvas.width, canvas.height, cities[nameMap[bestPath[i]]], cities[nameMap[bestPath[i + 1]]], 'green');
            }

            // Draw cities
            checkColor(ctx, 'Oradea');
            ctx.fillRect(canvas.width * cities.oradea.x, canvas.height * cities.oradea.y, sqx, sqy);
            checkColor(ctx, 'Zerind');
            ctx.fillRect(canvas.width * cities.zerind.x, canvas.height * cities.zerind.y, sqx, sqy);
            checkColor(ctx, 'Arad');
            ctx.fillRect(canvas.width * cities.arad.x, canvas.height * cities.arad.y, sqx, sqy);
            checkColor(ctx, 'Timisoara');
            ctx.fillRect(canvas.width * cities.timisoara.x, canvas.height * cities.timisoara.y, sqx, sqy);
            checkColor(ctx, 'Sibiu');
            ctx.fillRect(canvas.width * cities.sibiu.x, canvas.height * cities.sibiu.y, sqx, sqy);
            checkColor(ctx, 'Lugoj');
            ctx.fillRect(canvas.width * cities.lugoj.x, canvas.height * cities.lugoj.y, sqx, sqy);
            checkColor(ctx, 'Mehadia');
            ctx.fillRect(canvas.width * cities.mehadia.x, canvas.height * cities.mehadia.y, sqx, sqy);
            checkColor(ctx, 'Drobeta');
            ctx.fillRect(canvas.width * cities.drobeta.x, canvas.height * cities.drobeta.y, sqx, sqy);
            checkColor(ctx, 'Rimnicu Vilcea');
            ctx.fillRect(canvas.width * cities.rimnicuVilcea.x, canvas.height * cities.rimnicuVilcea.y, sqx, sqy);
            checkColor(ctx, 'Pitesti');
            ctx.fillRect(canvas.width * cities.pitesti.x, canvas.height * cities.pitesti.y, sqx, sqy);
            checkColor(ctx, 'Craiova');
            ctx.fillRect(canvas.width * cities.craiova.x, canvas.height * cities.craiova.y, sqx, sqy);
            checkColor(ctx, 'Fagaras');
            ctx.fillRect(canvas.width * cities.fagaras.x, canvas.height * cities.fagaras.y, sqx, sqy);
            checkColor(ctx, 'Bucharest');
            ctx.fillRect(canvas.width * cities.bucharest.x, canvas.height * cities.bucharest.y, sqx, sqy);
            checkColor(ctx, 'Giurgiu');
            ctx.fillRect(canvas.width * cities.giurgiu.x, canvas.height * cities.giurgiu.y, sqx, sqy);
            checkColor(ctx, 'Urziceni');
            ctx.fillRect(canvas.width * cities.urziceni.x, canvas.height * cities.urziceni.y, sqx, sqy);
            checkColor(ctx, 'Neamt');
            ctx.fillRect(canvas.width * cities.neamt.x, canvas.height * cities.neamt.y, sqx, sqy);
            checkColor(ctx, 'Iasi');
            ctx.fillRect(canvas.width * cities.iasi.x, canvas.height * cities.iasi.y, sqx, sqy);
            checkColor(ctx, 'Vaslui');
            ctx.fillRect(canvas.width * cities.vaslui.x, canvas.height * cities.vaslui.y, sqx, sqy);
            checkColor(ctx, 'Hirsova');
            ctx.fillRect(canvas.width * cities.hirsova.x, canvas.height * cities.hirsova.y, sqx, sqy);
            checkColor(ctx, 'Eforie');
            ctx.fillRect(canvas.width * cities.eforie.x, canvas.height * cities.eforie.y, sqx, sqy);
        }
    }

    function handleSearch(){
        if (startLocation !== '' && targetLocation !== '' && searchMethod !== ''){
            let searchType = ''
            switch (searchMethod){
                case 'Breadth-First Search':
                    searchType = 'bfs';
                    break;
                case 'Depth-First Search':
                    searchType = 'dfs';
                    break;
                case 'Iterative-Deepening Search':
                    searchType = 'ids';
                    break;
                default:
                    break;
            }
            var searchResults = search(startLocation, targetLocation, searchType);
            setBestPath(searchResults.bestPath);
            setVisited(searchResults.visited);
        } else {
            if (startLocation === ''){
                alert('Start Location required')
            } else if (targetLocation === ''){
                alert('Target Location required');
            } else if (searchMethod === ''){
                alert('Search Method required');
            }
        }
    }
    
  return (
    <div style={{marginTop: '10px'}}>
        <Container>
            <Row>
                <Col md={6} lg={4}>
                    <Form.Group>
                        <Form.Label>Starting Location</Form.Label>
                        <Form.Select onChange={(e) => setStartLocation(e.target.value)}>
                            <option></option>
                            <option>Oradea</option>
                            <option>Zerind</option>
                            <option>Arad</option>
                            <option>Timisoara</option>
                            <option>Sibiu</option>
                            <option>Lugoj</option>
                            <option>Rimnicu Vilcea</option>
                            <option>Mehadia</option>
                            <option>Drobeta</option>
                            <option>Craiova</option>
                            <option>Pitesti</option>
                            <option>Fagaras</option>
                            <option>Bucharest</option>
                            <option>Giurgiu</option>
                            <option>Urziceni</option>
                            <option>Neamt</option>
                            <option>Iasi</option>
                            <option>Vaslui</option>
                            <option>Hirsova</option>
                            <option>Eforie</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group md={6} lg={4}>
                        <Form.Label>Target Location</Form.Label>
                        <Form.Select onChange={(e) => setTargetLocation(e.target.value)}>
                            <option></option>
                            <option>Oradea</option>
                            <option>Zerind</option>
                            <option>Arad</option>
                            <option>Timisoara</option>
                            <option>Sibiu</option>
                            <option>Lugoj</option>
                            <option>Rimnicu Vilcea</option>
                            <option>Mehadia</option>
                            <option>Drobeta</option>
                            <option>Craiova</option>
                            <option>Pitesti</option>
                            <option>Fagaras</option>
                            <option>Bucharest</option>
                            <option>Giurgiu</option>
                            <option>Urziceni</option>
                            <option>Neamt</option>
                            <option>Iasi</option>
                            <option>Vaslui</option>
                            <option>Hirsova</option>
                            <option>Eforie</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={6} lg={4}>
                    <Form.Group>
                        <Form.Label>Search Method</Form.Label>
                        <Form.Select onChange={(e) => setSearchMethod(e.target.value)}>
                            <option></option>
                            <option>Breadth-First Search</option>
                            <option>Depth-First Search</option>
                            <option>Iterative-Deepening Search</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Button onClick={() => handleSearch()} style={{marginTop: '10px'}}>Search</Button>
        </Container>
        <div style={{width: '20px', height: '20px', backgroundColor: 'yellow', borderStyle: 'solid', marginLeft: '90px', marginTop: '20px'}}><div style={{marginLeft: '30px'}}>Visited</div></div>
        <div style={{width: '20px', height: '20px', backgroundColor: 'green', borderStyle: 'solid', marginLeft: '90px', marginTop: '10px'}}><div style={{marginLeft: '30px'}}>Path</div></div>
        <canvas id="canvas" style={{backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(${romania})`, marginTop: '20px'}}></canvas>
    </div>
  )
}
