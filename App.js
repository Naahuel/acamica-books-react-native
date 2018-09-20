import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/screens/HomeScreen';
import { colors } from './components/_base';
import CategoriesScreen from './components/screens/CategoriesScreen';
import CategoryScreen from './components/screens/CategoryScreen';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Categories: {
      screen: CategoriesScreen
    },
    Category: {
      screen: CategoryScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: colors.normalText,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);