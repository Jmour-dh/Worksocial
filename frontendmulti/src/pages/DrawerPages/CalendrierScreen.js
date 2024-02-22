import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Calendrier = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendrier</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Calendrier;
