export const ADD_DECK = 'ADD_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS';

export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const loadAllDecks = decks => ({
  type: LOAD_ALL_DECKS,
  decks
});

export const updateDeck = (key, card) => ({
  type: UPDATE_DECK,
  key,
  card
});
