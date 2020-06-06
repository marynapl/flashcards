import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = '@Flashcards: decks'

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      },
      {
        question: 'What is JSX?',
        answer: 'JSX is a shorthand for JavaScript XML'
      },
      {
        question: 'What is create-react-app?',
        answer: 'It is the official CLI (Command Line Interface) for React to create React apps'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared'
      }
    ]
  }
}

function setInitialData() {
  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData))
  return initialData;
}

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      return results === null
        ? setInitialData()
        : JSON.parse(results)
    })
}

export function saveDeck({ deck, key }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function saveCard({ card, key }) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      const deck = {
        ...decks[key],
        questions: decks[key].questions.concat(card)
      }
      AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [key]: deck
      }))
    })
}

export function deleteDeck(key) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      decks[key] = undefined
      delete decks[key]
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
}