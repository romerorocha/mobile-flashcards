import * as AsyncStorage from '../utils/api';

export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS';

const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

const loadAllDecks = decks => ({
  type: LOAD_ALL_DECKS,
  decks
});

const updateDeck = (id, card) => ({
  type: UPDATE_DECK,
  id,
  card
});

export const addNewDeck = title => async dispatch => {
  await AsyncStorage.saveDeck(title);
  dispatch(addDeck(title));
};

export const fetchDecks = () => async dispatch => {
  const decks = await AsyncStorage.getDecks();
  dispatch(loadAllDecks(decks));
};

export const addCardToDeck = (id, card) => async dispatch => {
  await AsyncStorage.addCardToDeck(id, card);
  dispatch(updateDeck(id, card));
};
