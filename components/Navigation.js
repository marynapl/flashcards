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

const DeckStack = createStackNavigator();
function DeckStackScreen() {
  return (
    <DeckStack.Navigator initialRouteName="Home" >
      <DeckStack.Screen name="Home" component={DeckList} />
      <DeckStack.Screen name="Deck" component={Deck} />
      <DeckStack.Screen name="Quiz" component={Quiz} />
      <DeckStack.Screen name="AddCard" component={AddCard} />
    </DeckStack.Navigator>
  );
}

const AddStack = createStackNavigator();
function AddStackScreen() {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="Add deck" component={AddDeck} />
    </AddStack.Navigator>
  );
}


class Navigation extends Component {
  render() {
    return (
      <Tab.Navigator initialRouteName="Home">
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