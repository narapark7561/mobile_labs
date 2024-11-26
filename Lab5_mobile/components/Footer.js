import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>This is Incredible Todo List App for Cprg303!💕</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'coral',
    padding: 6,
    alignItems: 'center',
  },
});
