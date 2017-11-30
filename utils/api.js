import { AsyncStorage } from 'react-native';

const FLASHCARDS_KEY = 'FLASHCARDS';

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_KEY).then(results => {
    return JSON.parse(results);
  });
};

export const saveDeckTitle = deck => {
  return AsyncStorage.mergeItem(
    FLASHCARDS_KEY,
    JSON.stringify({
      [deck]: {
        title: deck,
        questions: []
      }
    })
  );
};

export const addCardToDeck = deck => {
  return AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify({}));
};
