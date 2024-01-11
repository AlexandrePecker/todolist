import React, { useState } from 'react'
import { TextInput, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'

import { styles } from './style'
import { Task } from '../../Components/Task'

import { AntDesign, FontAwesome5 } from '@expo/vector-icons'


export function Home(){
  const [task, setTask] = useState(['alexandre essa e a primeita trefa que esta sendo adicionada', 'testando outra tarefa'])
  const [addNewTask, setAddNewTask] = useState('')

  function addTask(){

  }

  function removeTask(task: string){
    
  }


  return (
    <View style={styles.container}>
      <View style={styles.logoIcon}>
        <Image 
          source={require('../../../assets/Logo.png')}
          style={{ marginTop: 70 }}
        />
      </View>

      <View style={styles.mainInput}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button} onPress={addTask}>
          <AntDesign name="pluscircleo" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <FlatList 
        data={task}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task 
            key={item}
            task={item}
            onRemove={() => removeTask(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <FontAwesome5 name="tasks" size={24} color="#808080" style={styles.tasklist}/>
            <Text style={styles.listEmptyText1}>
              Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.listEmptyText2}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </> 
        )}
      />
    </View>
  )
}