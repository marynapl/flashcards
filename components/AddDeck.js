import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { styles as commonStyles } from '../utils/styles'
import { saveDeck } from '../utils/api'

class AddDeck extends Component {
  state = {
    text: ''
  }
  handleChange = (text) => {
    this.setState({
      text
    })
  }
  submit = () => {
    const key = this.state.text
    const deck = {
      title: key,
      questions: []
    }

    this.props.dispatch(
      addDeck({
        [key]: deck
      })
    )

    this.setState({
      text: ''
    })

    saveDeck({ deck, key })

    this.props.navigation.navigate('Deck', { title: key })

    // Example: Reset navigation and go Home
    // this.props.navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0,
    //     routes: [
    //       { name: 'Home' }
    //     ]
    //   })
    // )
    // this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.title}>What is the title of your deck?</Text>
        <TextInput
          style={commonStyles.input}
          onChangeText={this.handleChange}
          value={this.state.text}
          placeholder="Enter deck title here"
        />
        <TouchableOpacity
          style={commonStyles.button}
          onPress={this.submit}>
          <Text style={commonStyles.buttonText}>Create new Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddDeck)