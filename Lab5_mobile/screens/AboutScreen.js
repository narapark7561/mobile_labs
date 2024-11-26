import { Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }) {
  return (
    <MainLayout>
      <Text style={styles.heading}>Incredible ToDo List!</Text>
      <Text style={styles.subtitle}>By Nara Park for Cprg303</Text>
      <Text style={styles.subtitle}>Submission Date: Nov 23 2024</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: 16,
    padding: 10,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Arial',
    textAlign: 'center',
  },
});
