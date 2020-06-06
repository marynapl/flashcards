import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { styles as commonStyles } from '../utils/styles'
import { saveCard } from '../utils/api'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  handleQuestionChange = (text) => {
    this.setState({
      question: text
    })
  }
  handleAnswerChange = (text) => {
    this.setState({
      answer: text
    })
  }
  submit = () => {
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }
    const { title } = this.props.route.params
    this.props.dispatch(
      addCard({ title, card })
    );

    this.setState({
      question: '',
      answer: ''
    })

    saveCard({ card, key: title })

    this.props.navigation.pop();
  }
  render() {
    const { title } = this.props.route.params

    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.subTitle}>{title}</Text>
        <Text style={commonStyles.title}>What is your question?</Text>
        <TextInput
          style={commonStyles.input}
          onChangeText={this.handleQuestionChange}
          value={this.state.question}
          placeholder="Enter question here"
        />
        <TextInput
          style={commonStyles.input}
          onChangeText={this.handleAnswerChange}
          value={this.state.answer}
          placeholder="Enter answer here"
        />
        <TouchableOpacity
          style={commonStyles.button}
          onPress={this.submit}
        >
          <Text style={commonStyles.buttonText}>Create Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddCard)