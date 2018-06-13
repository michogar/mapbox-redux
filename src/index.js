import Mapboxgl from 'mapbox-gl'
import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'
import store from './redux/store'
import { Zoom, Compass, About } from './components'

Mapboxgl.accessToken = 'pk.eyJ1IjoibWljaG9nYXIiLCJhIjoiY2plZm05czBiMGczaDJ3bnNsM216Nm13aCJ9.AeyXFg8ZIWI8as-453cSzg'
const map = new Mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-8.715893, 42.25206],
  zoom: 12,
  bearing: 0,
  hash: true
})

map.on('load', () => {
  const reduxControl = new MapboxGLRedux.ReduxMapControl('map')
  map.addControl(reduxControl)
  store.dispatch(reduxControl.MapActionCreators.sync())

  /* eslint-disable no-unused-vars */

  const zoom = new Zoom('panel', reduxControl, store)
  const compass = new Compass('panel', reduxControl, store)
  const about = new About('about')

  /* eslint-enable no-unused-vars */
})
