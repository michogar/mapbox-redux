import { MapActionTypes } from '@mapbox/mapbox-gl-redux'

const reducer = (state, action) => {
  const map = action.map
  switch (action.type) {
    case MapActionTypes.zoom:
      return Object.assign({}, state, {
        zoom: map.getZoom()
      })
    default:
      return state
  }
}

export default reducer
