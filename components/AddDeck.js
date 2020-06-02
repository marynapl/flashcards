import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { styles } from '../utils/styles'

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
    this.props.dispatch(
      addDeck({
        [key]: {
          title: key,
          questions: []
        }
      })
    );

    this.setState({
      text: ""
    })

    // TODO: AsyncStorage

    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleChange}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}
        >
          <Text style={styles.buttonText}>Create new Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddDeck)