import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function DeckListItem({ item, navigation }) {
  const count = item.questions
    ? item.questions.length
    : 0;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Deck')}
    >
      <View style={styles.item}>
        <Text style={styles.itemIitle}>{item.title}</Text>
        <View style={styles.itemDetails}>
          <Text>{count}</Text>
          <Text style={{ color: "#888", fontSize: 12 }}>{count > 1 ? "cards" : "card"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomColor: "#eee",
    borderBottomWidth: 1
  },
  itemIitle: {
    fontSize: 16,
    color: "#4A148C"
  },
  itemDetails: {
    alignItems: "center",
    width: 50
  }
});

export default DeckListItem