import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import Deck from './Deck'
import AddCard from './AddCard'
import Quiz from './Quiz'

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();

const TabOptions = {
  Home: {
    tabBarLabel: 'Home',
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="home" color={color} size={26} />
    )
  },
  AddDeck: {
    tabBarLabel: 'Add deck',
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="add-circle-outline" color={color} size={26} />
    )
  }
}

const ScreenOptions = {
  headerTitleAlign: "center",
  headerBackTitle: "Back",
  headerBackTitleStyle: {
    color: "#6A1B9A"
  },
  headerTintColor: "#6A1B9A",
  headerTitleStyle: {
    color: 'black'
  }
}

const DeckStack = createStackNavigator();
function DeckStackScreen({ navigation }) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Navigate to the top of the Deck Stack
      navigation.navigate({ name: "Home" });
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <DeckStack.Navigator initialRouteName="Home" 
      screenOptions={ScreenOptions}>
      <DeckStack.Screen name="Home" options={{headerTitle: "Study Cards"}} component={DeckList} />
      <DeckStack.Screen name="Deck" options={{headerTitle: "Get Started"}} component={Deck} />
      <DeckStack.Screen name="Quiz" component={Quiz} />
      <DeckStack.Screen name="AddCard" options={{headerTitle: "Add Card"}} component={AddCard} />
    </DeckStack.Navigator>
  );
}

const AddStack = createStackNavigator();
function AddStackScreen() {
  return (
    <AddStack.Navigator
      screenOptions={ScreenOptions}>
      <AddStack.Screen name="Add Deck" component={AddDeck} />
    </AddStack.Navigator>
  );
}

class Navigation extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Home"
        barStyle={{
          backgroundColor: "#4A148C"
        }}
      >
        <Tab.Screen name="Home"
          component={DeckStackScreen}
          options={TabOptions.Home}
        />
        <Tab.Screen name="Add Deck"
          component={AddStackScreen}
          options={TabOptions.AddDeck}
        />
      </Tab.Navigator>
    )
  }
}

export default Navigation