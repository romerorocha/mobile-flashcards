import { StackNavigator } from 'react-navigation';
import DeckEdit from '../Screens/DeckEdit';
import AddCard from '../Screens/AddCard';
import Quiz from '../Quiz/Quiz';
import TabBar from './TabBar';
import { purple, white } from '../../utils/colors';

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: TabBar,
      navigationOptions: {
        title: 'Flashcards'
      }
    },
    DeckEdit: {
      screen: DeckEdit,
      navigationOptions: {
        title: 'Deck'
      }
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: 'Add Card'
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: 'Quiz'
      }
    }
  },
  {
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
);

export default MainNavigator;
