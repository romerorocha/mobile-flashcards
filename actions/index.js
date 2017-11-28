export const ADD_DECK = 'ADD_DECK';
export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS';

export const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const loadAllDecks = decks => ({
  type: LOAD_ALL_DECKS,
  decks
});
