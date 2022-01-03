import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BarcodeScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Barcode Screens</Text>
      <Button title="CLick Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default BarcodeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
