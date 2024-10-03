import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { firestore } from './firebase'; // Import Firebase configuration
import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import myImage from '../assets/images/splash.png';
import CustomButton from '../components/custom_button'; // Ensure this component is defined correctly
import CustomColors from '../components/color';  

const Index = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'tasks'), (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async () => {
    if (task) {
      await addDoc(collection(firestore, 'tasks'), { value: task });
      setTask('');
    }
  };

  const deleteTask = async (taskId) => {
    await deleteDoc(doc(firestore, 'tasks', taskId));
  };

  return (
    <View style={styles.container}>
      <Image 
        source={myImage} // Your image path
        style={StyleSheet.absoluteFillObject} // Full-screen background
        blurRadius={0.8} // Optional blur effect for the background
      />
      <View style={styles.content}>
        <TextInput
          placeholder="Add a task"
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />
        <CustomButton title="Add Task" onPress={addTask} />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text>{item.value}</Text>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.8)', // Translucent white background for input
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.9)', // Task item background
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  delete: {
    color: 'red',
  },
});

export default Index; // Corrected export
