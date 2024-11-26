import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MainLayout;
