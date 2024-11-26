import { Button } from 'react-native';
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [tasks, setTask] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (taskText) => {
    setTask([...tasks, taskText]);
  };

  console.log('Tasks in HomeScreen:', tasks);

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}
