# MapboGL with Redux

A basic sample to how to use Mapbox with Redux.

```
$ git clone git@github.com:michogar/mapbox-redux.git
$ cd mapbox-redux
$ npm install
$ npm run start
```

## How to

This sample use the [mapbox-gl-redux](https://github.com/mapbox/mapbox-gl-redux) library. More doc there.

With the mapbox-gl-redux library we'll get maintain synced the map's state with the application state. to do this, first:

### Create a ReduxMapControl and add it to the map

```
const map = new Mapboxgl.Map({
  container: 'map',
  style: ''
})

map.addControl(new MapboxGLRedux.ReduxMapControl('map'))
```

This control gets events from map and dispatches Redux actions

### Add mapMiddleware to the store

First, we must create our reducers to create our store

```
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
```

Using `MapActionTypes` we can identify the actions from our store launched by the map

Then, we are able to create the application's store

```
import { applyMiddleware, createStore } from 'redux'
import * as MapboxGLRedux from '@mapbox/mapbox-gl-redux'
import reducer from './reducer'

const mapMiddleware = MapboxGLRedux.mapMiddleware

const store = createStore(
  reducer,
  applyMiddleware(mapMiddleware)
)

export default store
```

With the `applyMiddleware` function from Redux we apply our `MapboxGLRedux.mapMiddleware` to our store. Now we are able
to launch `mapActions` and our store we'll be modified with them.