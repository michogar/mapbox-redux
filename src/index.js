import Mapboxgl from 'mapbox-gl'
import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'
import store from './redux/store'
import { Zoom, Compass } from './components'

const map = new Mapboxgl.Map({
  container: 'map',
  style: 'https://api.tmb.cat/v1/maps/vts/styles/positron/style.json?app_id=b53a5765&app_key=cb2fc6155198c620d9d6f454d4a6ef69',
  center: [2.15, 41.39],
  zoom: 12,
  bearing: -45,
  hash: true
})

map.on('load', () => {
  const reduxControl = new MapboxGLRedux.ReduxMapControl('map')
  map.addControl(reduxControl)
  store.dispatch(reduxControl.MapActionCreators.sync())

  /* eslint-disable no-unused-vars */

  const zoom = new Zoom('panel', reduxControl, store)
  const compass = new Compass('panel', reduxControl, store)

  /* eslint-enable no-unused-vars */
})
