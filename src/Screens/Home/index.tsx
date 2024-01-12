import React, { useState } from 'react'
import { TextInput, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native'

import { styles } from './style'
import { Task } from '../../Components/Task'

import { AntDesign, FontAwesome5, } from '@expo/vector-icons'


export function Home(){
  const [task, setTask] = useState<string[]>([])
  const [addNewTask, setAddNewTask] = useState('')

  // Função para adicionar uma nova tarefa à lista
  function addTask(){
    if(task.includes(addNewTask)){
      // Limpa o campo de entrada e exibe um alerta informando caso a tarefa já existe
      setAddNewTask('')
      return Alert.alert("Tarefa já existe", "Essa tarefa já existe, por favor digite outra tarefa!")
    }

     // Adiciona a nova tarefa à lista usando o operador spread para criar um novo array
    setTask(prevState => [...prevState, addNewTask])
    setAddNewTask('')
  } 

  function removeTask(task: string){
    // Exibe um alerta de confirmação para remover a tarefa
    Alert.alert("Remover tarefa", `Tem certeza que deseja remover a tarefa?`, [
      {
        text: 'Sim',
        // Se o usuário pressionar "Sim", executa a ação de remoção
        onPress: () => setTask(prevState => prevState.filter(participant => participant !== task))
      },
      {
        text: 'Não',
        style: 'cancel' // Define o estilo 'cancel' para o botão "Não"
      }
    ])
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
          onChangeText={setAddNewTask}
          value={addNewTask}
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
        ListEmptyComponent={() => ( // Enquando a lista não for carregada, exibe:
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