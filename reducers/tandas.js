import { handleActions } from 'redux-actions'

const initialState = [
  {
    _id: '356y4gefdsfsdffvbrnyh5',
    owner: 'Sofia Jimenez',
    amount: 1000,
    people: ['qwe321', 'poi890', 'poi890', 'poi890'],
    step: 3,
    date: Date.now()
  },
  {
    _id: '756y4gefdsfsdffvbrnyh5',
    owner: 'Maria Del Carmel',
    amount: 5000,
    people: ['qwe321', 'd23e32d2d3', 'd23d23d23d'],
    step: 5,
    date: Date.now()
  }
]

export default handleActions({
  'add tanda' (state, action) {
    return [
      action.payload,
      ...state
    ]
  },

  'add person' (state, action) {
    let newState = [...state]
    newState[action.payload.key].people.push(action.payload.person)
    return newState
  },

  'remove person' (state, action) {
    let newState = [...state]
    let index = newState[action.payload.key].people.indexOf(action.payload.person)

    newState[action.payload.key].people = [
      ...newState[action.payload.key].people.slice(0, index),
      ...newState[action.payload.key].people.slice(index + 1)
    ]

    return newState
  }
}, initialState)
