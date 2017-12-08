import { AsyncStorage } from 'react-native';

const FLASHCARDS_KEY = '@flashcards:key';

export const getDecks = async () => {
  const results = await AsyncStorage.getItem(FLASHCARDS_KEY);
  return results ? JSON.parse(results) : loadInitialData();
};

export const saveDeck = async (deck, icon) => {
  AsyncStorage.mergeItem(
    FLASHCARDS_KEY,
    JSON.stringify({
      [deck]: {
        title: deck,
        icon: icon,
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

const loadInitialData = () => {
  const data = {
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'Is JavaScript very similar to Java?',
          answer: 'As much as "car" and "carpet!"'
        },
        {
          question: 'How many JavaScript libs are there?',
          answer: 'IDK, the only one that matters is ReactJS!'
        }
      ],
      icon: 'language-javascript'
    },
    iOS: {
      title: 'iOS',
      questions: [
        {
          question: 'Can I use React Native to develop iOS apps?',
          answer: 'For sure!'
        },
        {
          question: 'Can I run my RN app on my iPhone?',
          answer: 'Sure! Installing "Expo" app!'
        }
      ],
      icon: 'apple'
    }
  };

  AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify(data));

  return data;
};
