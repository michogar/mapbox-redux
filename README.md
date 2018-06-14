# MapboxGL with Redux

A basic sample of how to use Mapbox with Redux.

```
$ git clone git@github.com:michogar/mapbox-redux.git
$ cd mapbox-redux
$ npm install
$ npm run start
```

## How to

This sample use the [mapbox-gl-redux](https://github.com/mapbox/mapbox-gl-redux) library. More doc there.

With the mapbox-gl-redux library we'll get maintain synced the map's state with the application's state. To do this, first:

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

First, we must create our reducers to create the store

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

Using `MapActionTypes` we can identify the actions launched by the map from our reducers

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
to launch `mapActions` and our map state we'll be modified with them.

Every action must be linked to the map. The `ReduxMapControl` has a `MapActionCreators` attribute that returns the whole
actions but already linked. So, we must instantiate the control with the `mapId` before get the actions through
the `MapActionCreators`.

```
constructor (parent, control, store) {
    this.store = store
    this.actions = control.MapActionCreators

    ...


zoomIn () {
  this.store.dispatch(this.actions.zoomIn())
}
```

### Syncing controls with the map's state

To connect controls to the map we'll need connect the control to the store. As we aren't using React or something similar,
to get the store into the control this will be passed as parameter of the control's constructor.

```
class Compass {
  constructor (parent, control, store) {
    this.store = store
    const { bearing } = this.store.getState()

    ...
```

According to the Redux pattern, we need a callback to subscribe to the store who will be called by the reducer:

```
    ...

    this.unsubscriber = store.subscribe(this.onChangeDirection.bind(this))
    this.render()
  }
  onChangeDirection () {
    const { bearing } = this.store.getState()
    this.bearing = bearing
    this.render()
  }
```

### Initializing map's state

In the `reducer` we can initialize the map's state

```
const initialState = {
  bearing: 0
}

const reducer = (state = initialState, action) => {
  const map = action.map
```

and to sync the map's states after its load we'll use the `MapActionCreators.sync()` action:

```
map.on('load', () => {
  const reduxControl = new MapboxGLRedux.ReduxMapControl('map')
  map.addControl(reduxControl)
  store.dispatch(reduxControl.MapActionCreators.sync())

  ...
```

with its correspondent reducer

```
case MapActionTypes.sync:
  return Object.assign({}, state, {
    bearing: map.getBearing()
  })
```
