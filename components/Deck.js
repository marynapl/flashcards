import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { styles as commonStyles } from '../utils/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Deck extends Component {
  render() {
    const { deck } = this.props
    const count = deck.questions
      ? deck.questions.length
      : 0;

    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>{deck.title}</Text>
        <Text style={styles.text}>
          {deck.questions.length} {count == 1 ? "card" : "cards"}
        </Text>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => this.props.navigation.navigate('Quiz')}
        >
          <Text style={commonStyles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={commonStyles.buttonHollow}
          onPress={() => this.props.navigation.navigate('AddCard')}
        >
          <Text style={commonStyles.buttonHollowText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 30
  }
});

function mapStateToProps(decks, props){
  const { title } = props.route.params
  const deck = decks[title]
  return {
    deck
  }
}
export default connect(mapStateToProps)(Deck)