import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveData } from '../actions'
import { ActivityIndicator } from 'react-native-paper'
import  DeckListItem from './DeckListItem'

class DeckList extends Component {
  state = {
    ready: false
  }
  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
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
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) =>
            <DeckListItem item={item} navigation={this.props.navigation} />}
          keyExtractor={item => item.title}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)