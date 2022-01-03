import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{top:-100, fontSize:100}}>HOME</Text>
        
      </View>
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
