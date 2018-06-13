class Compass {
  constructor (parent, control, store) {
    this.store = store
    const { jumpTo } = control.MapActionCreators
    this.jumpTo = jumpTo.bind(this)
    const { bearing } = this.store.getState()
    this.bearing = bearing || 0
    this.parent = document.getElementById(parent)
    this.unsubscriber = store.subscribe(this.onChangeBearing.bind(this))
    this.render()
  }
  onChangeBearing () {
    const { bearing } = this.store.getState()
    this.bearing = bearing
    this.render()
  }
  onClickBearing () {
    this.store.dispatch(this.jumpTo({ bearing: 0 }))
  }
  render () {
    let compass = document.getElementById('compass')
    if (compass) {
      compass.remove()
    }
    compass = document.createElement('div')
    compass.className = 'margin3 col3'
    compass.id = 'compass'
    const compassButton = document.createElement('a')
    compassButton.className = 'button icon compass'
    compassButton.style.transformOrigin = 'center'
    compassButton.style.transform = `rotate(${-this.bearing}deg)`
    compassButton.addEventListener('click', this.onClickBearing.bind(this))

    compass.appendChild(compassButton)
    this.parent.appendChild(compass)
  }
  unsubscribe () {
    this.unsubscriber()
  }
}

export default Compass
