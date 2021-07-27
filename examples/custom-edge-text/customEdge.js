class CustomEdge extends PolylineEdge {
}

class CustomEdgeModel extends PolylineEdgeModel {
  setAttributes() {
    this.stroke = 'red'
    this.sourceNodeId()
    console.log(this.graphModel.getModel())
  }
}

export default {
  type: 'custom-edge',
  view: CustomEdge,
  model: CustomEdgeModel,
}
