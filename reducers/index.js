import { ADD_DECK, LOAD_ALL_DECKS } from '../actions';

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
    case LOAD_ALL_DECKS:
      return action.decks;
    default:
      return state;
  }
};

export default decks;
