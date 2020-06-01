import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Deck extends Component {
  render() {
    return (
      <View>
        <Text>Deck</Text>
        <Button
          title="Start Quiz"
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
         <Button
          title="Add Card"
          onPress={() => this.props.navigation.navigate('AddCard')}
        />
      </View>
    )
  }
}

export default Deck