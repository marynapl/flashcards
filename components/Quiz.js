import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { styles as commonStyles } from '../utils/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import Card from './Card'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  state = {
    current: 0,
    score: 0,
    finished: false
  }
  handlePress = (correct) => {
    if (correct) {
      this.setState((state) => ({
        score: state.score + 1
      }))
    }

    const count = this.props.deck.questions.length
    const next = this.state.current + 1
    if (next < count) {
      this.setState({
        current: next
      })
    } else {
      this.setState({
        finished: true
      })

      // Clear local notification
      clearLocalNotification()
      .then(setLocalNotification)
    }
  }
  reset = () => {
    this.setState({
      current: 0,
      score: 0,
      finished: false
    })
  }
  render() {
    const { deck } = this.props
    const { current, finished } = this.state
    const count = deck.questions.length

    if (finished == true) {
      const finalScore = ((this.state.score / count) * 100).toFixed()
      return (
        <View style={commonStyles.container}>
          <Text style={commonStyles.title}>
            {finalScore > 50
              ? "Congratulations!"
              : "Nice try!"
            }
          </Text>
          <Text style={commonStyles.subTitle}>Your Score:</Text>
          <Text style={commonStyles.title}>{finalScore} %</Text>

          <View style={styles.row}>
            <TouchableOpacity
              style={commonStyles.buttonClear}
              onPress={() => this.props.navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={18} style={commonStyles.buttonClearIcon} />
              <Text style={commonStyles.buttonClearText}>Back to Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={commonStyles.buttonClear}
              onPress={this.reset}>
              <MaterialIcons name="settings-backup-restore" size={18} style={commonStyles.buttonClearIcon} />
              <Text style={commonStyles.buttonClearText}>Restart Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {deck.title.length > 20
              ? `${deck.title.substring(0, 20)}...`
              : deck.title
            }
          </Text>
          <Text style={styles.headerText}>{current + 1} / {count}</Text>
        </View>

        <Card card={deck.questions[current]}></Card>

        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => this.handlePress(true)}>
          <Text style={commonStyles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={commonStyles.buttonHollow}
          onPress={() => this.handlePress(false)}>
          <Text style={commonStyles.buttonHollowText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 45
  },
  headerText: {
    fontSize: 15,
    color: "#888"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30
  }
})

function mapStateToProps(decks, props) {
  const { title } = props.route.params
  const deck = decks[title]
  return {
    deck
  }
}

export default connect(mapStateToProps)(Quiz)