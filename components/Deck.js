import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
        <Text style={commonStyles.subTitle}>
          {deck.questions.length} {count == 1 ? "card" : "cards"}
        </Text>
        {count > 0 &&
          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => this.props.navigation.navigate('Quiz', {
              title: deck.title
            })}
          >
            <Text style={commonStyles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity
          style={commonStyles.buttonHollow}
          onPress={() => this.props.navigation.navigate('AddCard', {
            title: deck.title
          })}
        >
          <Text style={commonStyles.buttonHollowText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(decks, props){
  const { title } = props.route.params
  const deck = decks[title]
  return {
    deck
  }
}
export default connect(mapStateToProps)(Deck)