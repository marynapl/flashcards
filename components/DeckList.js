import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>Deck list</Text>
        <Button
          title="Go to Deck details"
          onPress={() => this.props.navigation.navigate('Deck')}
        />
      </View>
    )
  }
}

export default DeckList