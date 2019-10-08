import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    coffeeShops: state.coffeeReducer.coffeeShops
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCoffeeShops: () => dispatch(actionCreators.getCoffeeShops())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
