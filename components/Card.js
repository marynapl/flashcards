import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles as commonStyles } from '../utils/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Card({ card }) {
  return (
    // TODO: implement flipping between question and answer
    <View style={styles.container}>
      <Text style={commonStyles.title}>{card.question}</Text>
      <TouchableOpacity
        style={commonStyles.buttonClear}
        onPress={() => alert("Pressed")}>
        <Text style={commonStyles.buttonClearText}>See the Answer</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 30
  }
})

export default Card