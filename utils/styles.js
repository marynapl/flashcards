
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 60,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16
  },
  subTitle: {
    fontSize: 15,
    color: "#888",
    textAlign: "center",
    marginBottom: 30
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#fff"
  },
  button: {
    backgroundColor: "#6A1B9A",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    minWidth: 250,
    marginBottom: 16
  },
  buttonHollowText: {
    textAlign: "center",
    color: "#6A1B9A"
  },
  buttonHollow: {
    backgroundColor: "#fff",
    borderColor: "#6A1B9A",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    minWidth: 250,
    marginBottom: 16
  },
  buttonClearText: {
    textAlign: "center",
    color: "#6A1B9A"
  },
  buttonClearIcon: {
    color: "#6A1B9A",
    marginRight: 5
  },
  buttonClear: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row"
  }
});
