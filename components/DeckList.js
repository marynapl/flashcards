import React, { Component } from 'react'
import { View, ScrollView, FlatList, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from '../utils/api'
import { receiveData } from '../actions'
import { ActivityIndicator } from 'react-native-paper'
import { color } from 'react-native-reanimated'
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
          <Text style={{color:"#888"}}>{count > 1 ? "cards" : "card"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

class DeckList extends Component {
  state = {
    ready: false
  }
  componentDidMount() {
    const { dispatch } = this.props

    fetchData()
      .then((decks) => dispatch(receiveData(decks)))
      .then(() => {
        this.setState(() => ({
          ready: true
        }));
      });
  }

  render() {
    const { decks } = this.props
    const { ready } = this.state

    // console.log("Decks: ", decks)
    if (ready === false) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

    return (
      <FlatList
        data={Object.values(decks)}
        renderItem={({ item }) => 
          <DeckListItem item={item} navigation={this.props.navigation} />}
        keyExtractor={item => item.title}
      />
    )
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center"
  },
  // listContainer: {
  //   flex: 1
  // }
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomColor: "#eee",
    borderBottomWidth: 1
  },
  itemIitle: {
    fontSize: 16
  },
  itemDetails: {
    alignItems: "center",
    width: 50
  }
});

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)