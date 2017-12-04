import { StackNavigator } from 'react-navigation';
import DeckEdit from './DeckEdit';
import AddCard from './AddCard';
import Quiz from './Quiz';
import TabBar from './TabBar';
import { purple, white } from '../utils/colors';

const MainNavigator = StackNavigator({
  Home: {
    screen: TabBar
  },
  DeckEdit: {
    screen: DeckEdit,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
});

export default MainNavigator;
