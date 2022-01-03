import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screens</Text>
      <Button title="CLick Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
