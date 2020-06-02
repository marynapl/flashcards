import { RECEIVE_DATA, ADD_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    // TODO  
    // case ADD_CARD:
    //   return {
    //     ...state,
    //     ...action.deck
    //   }
    default:
      return state
  }
}

export default decks