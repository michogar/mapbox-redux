class Zoom {
  constructor (parent, control, store) {
    this.store = store
    this.actions = control.MapActionCreators
    this.parent = document.getElementById(parent)
    this.render()
  }
  render () {
    const pill = document.createElement('div')
    pill.className = 'pill col6'
    const zoomOut = document.createElement('a')
    zoomOut.className = 'button icon minus'
    zoomOut.addEventListener('click', this.zoomOut.bind(this))
    const zoomIn = document.createElement('a')
    zoomIn.className = 'button icon plus'
    zoomIn.addEventListener('click', this.zoomIn.bind(this))
    pill.appendChild(zoomOut)
    pill.appendChild(zoomIn)
    this.parent.appendChild(pill)
  }
  zoomIn () {
    this.store.dispatch(this.actions.zoomIn())
  }
  zoomOut () {
    this.store.dispatch(this.actions.zoomOut())
  }
}

export default Zoom
