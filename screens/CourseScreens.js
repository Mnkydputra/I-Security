import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CourseScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Course Screens</Text>
      <Button title="CLick Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default CourseScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
