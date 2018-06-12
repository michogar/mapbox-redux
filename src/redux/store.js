import { applyMiddleware, createStore } from 'redux'
import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'
import reducer from './reducer'

const mapMiddleware = MapboxGLRedux.mapMiddleware

const store = createStore(
  reducer,
  applyMiddleware(mapMiddleware)
)

export default store
