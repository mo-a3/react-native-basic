import React, { Component } from 'react';
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

function FancyBorder(props) {
  return (
    <View style={{color: props.color, backgroundColor: 'grey'}} >
      {props.children}
    </View>
  );
}

export default function WelcomeDialog() {
  return (
    <FancyBorder color="red">
      <Text  >
        Welcome
      </Text>
      <Text  >
        Thank you for visiting our spacecraft!
      </Text>
    </FancyBorder>
  );
}
