// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Image
        style={styles.items}
        source={this.props.image_path}
       />
        <Text style={{ justifyContent: 'center',  alignItems: 'center',}}>{this.props.text}</Text>
        <Text style={styles.details}>Owner: {this.props.owner} </Text>
        <Text style={styles.details}>Description: {this.props.description}</Text>
        <Text style={styles.details}>Location: {this.props.location}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: 0, 
          text: 'bike', 
          backgroundColor: 'white', 
          image_path: require('./assets/bike1.jpeg'),
          description: "a used bike which I can give away",
          location: "coord X, coord Y",
          owner: "michael",
        },
        {
          id: 1, 
          text: 'bike', 
          backgroundColor: 'white', 
          image_path: require('./assets/bike2.jpeg'),
          description: "a used bike which I can give away",
          location: "coord X, coord Y",
          owner: "userXYZ",
        },
        {
          id: 2, 
          text: 'cd player', 
          backgroundColor: 'white', 
          image_path: require('./assets/cdplayer.jpeg'),
          description: "old CD player, still works well",
          location: "coord X, coord Y",
          owner: "musicFan2001",
        },
        {
          id: 3, 
          text: 'wetsuit', 
          backgroundColor: 'white', 
          image_path: require('./assets/wetsuit.jpeg'),
          description: "only used 3 times, size 43, 5mm thick",
          location: "coord X, coord Y",
          owner: "surf_is_laife",
        },
      ]
    };
  }

  handleYup (card) {
    console.log(`Useful for ${card.text}`)
  }
  handleNope (card) {
    console.log(`Useless for ${card.text}`)
  }
  handleMaybe (card) {
    console.log(`Claim for ${card.text}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        // stack={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  items: {
    width: 300,
    height: 300,
  },
  details: {
    justifyContent: 'right',
    alignItems: 'right',
  },
})