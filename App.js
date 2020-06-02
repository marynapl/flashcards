import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Navigation from './components/Navigation'
import { fetchData } from './utils/api'

const store = createStore(reducer)

export default class App extends Component {
  render() {
    //const { ready } = this.state

    // if (ready === false) {
    //   return <AppLoading />
    // }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
