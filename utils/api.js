import { AsyncStorage } from 'react-native';

const FLASHCARDS_KEY = '@flashcards:key';

export const getDecks = async () => {
  const results = await AsyncStorage.getItem(FLASHCARDS_KEY);
  return JSON.parse(results);
};

export const saveDeck = async deck => {
  AsyncStorage.mergeItem(
    FLASHCARDS_KEY,
    JSON.stringify({
      [deck]: {
        title: deck,
        questions: []
      }
    })
  );
};

export const getDeck = async id => {
  const results = await AsyncStorage.getItem(FLASHCARDS_KEY);
  return JSON.parse(results)[id];
};

export const addCardToDeck = async (title, card) => {
  const deck = await getDeck(title);
  deck.questions.push(card);

  AsyncStorage.mergeItem(
    FLASHCARDS_KEY,
    JSON.stringify({ [title]: { title, questions: deck.questions } })
  );
};
