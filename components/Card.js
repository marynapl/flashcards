import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { styles as commonStyles } from '../utils/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Card extends Component {
  state = {
    animatedValue: new Animated.Value(0),
    value: 0
  }
  componentDidMount() {
    const { animatedValue } = this.state

    animatedValue.addListener(({ value }) => {
      this.setState({
        value: value
      })
    })
  }
  componentDidUpdate(prevProps) {
    // Make sure to flip the card back for next question 
    if (this.props.card !== prevProps.card) {
      if (this.state.value >= 90) {
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: 0
        }).start();
      }
    }
  }
  flipCard = () => {
    const { value, animatedValue } = this.state
    if (value >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
      }).start();
    }
  }
  render() {
    const { card } = this.props
    const { animatedValue } = this.state
    const frontAnimatedStyle = {
      transform: [{
        rotateY: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg']
        })
      }]
    }
    const backAnimatedStyle = {
      transform: [{
        rotateY: animatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg']
        })
      }]
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
          <Text style={commonStyles.title}>{card.question}</Text>
          <TouchableOpacity
            style={commonStyles.buttonClear}
            onPress={this.flipCard}>
            <Text style={commonStyles.buttonClearText}>See the Answer</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
          <Text style={commonStyles.title}>{card.answer}</Text>
          <TouchableOpacity
            style={commonStyles.buttonClear}
            onPress={this.flipCard}>
            <Text style={commonStyles.buttonClearText}>See the Question</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    backgroundColor: "#fff"
  },
  flipCardBack: {
    width: "100%",
    position: "absolute"
  }
})

export default Card