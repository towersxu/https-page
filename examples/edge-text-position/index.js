import customEdge from './custom-edge.js'
const lf = new LogicFlow({
  container: document.querySelector('#container'),
  grid: true,
});
lf.register(customEdge);
lf.setDefaultEdgeType('custom-edge'); // 设置默认新增的连线为自定义连线
lf.render({
  nodes: [
    {
      id: '1',
      type: 'rect',
      x: 100,
      y: 100
    },
    {
      id: '2',
      type: 'rect',
      x: 600,
      y: 150
    }
  ],
  edges: [
    {
      id: '1-2',
      type: 'custom-edge',
      sourceNodeId: '1',
      targetNodeId: '2',
      text: '我是开头'
    }
  ]
});