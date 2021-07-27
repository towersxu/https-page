import customEdge from "./customEdge.js";

const lf = new LogicFlow({
  container: document.querySelector('#container'),
  grid: true,
});

lf.register(customEdge);
lf.setDefaultEdgeType('custom-edge');

lf.render({
  nodes: [
    {
      id: '1',
      x: 50,
      y: 50,
      type: 'rect'
    },
    {
      id: '3',
      x: 50,
      y: 150,
      type: 'rect'
    },
    {
      id: '2',
      x: 250,
      y: 250,
      type: 'rect'
    }
  ],
  edges: [
    {
      id: '22',
      type: 'custom-edge',
      sourceNodeId: '1',
      targetNodeId: '2',
      text: '555'
    },
    {
      id: '23',
      type: 'custom-edge',
      sourceNodeId: '3',
      targetNodeId: '2',
      text: '55511'
    }
  ]
});

document.querySelector('#getJson').addEventListener('click', () => {
  const data = lf.getGraphData();
  console.log(JSON.stringify(data));
})