const initialState = {
  word: 'World',
  sentense: 'Change to India',
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'DUMMY_ACTION':
    return { 
      ...state,
      word: state.word === 'World' ? 'India': 'World'
    }

  case 'CHANGE_SENTENSE':
    return {
      ...state,
      sentense: state.sentense === 'Change to India' ?
      'Change to World':'Change to India'
    }

  case 'DATA':
    return {
      ...state,
      data: action.payload
    }

  default:
    return state
  }
}
