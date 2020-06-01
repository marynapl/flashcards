import 'react-native-gesture-handler'
import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

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
    <DeckStack.Navigator >
      <DeckStack.Screen name="Flash Cards" component={DeckList} />
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

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
