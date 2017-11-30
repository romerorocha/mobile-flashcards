import { ADD_DECK, UPDATE_DECK, LOAD_ALL_DECKS } from '../actions';

const decks = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      };
    case UPDATE_DECK:
      return {
        ...state,
        [action.key]: {
          ...state,
          questions: [...state, action.card]
        }
      };
    case LOAD_ALL_DECKS:
      return action.decks;
    default:
      return state;
  }
};

export default decks;
