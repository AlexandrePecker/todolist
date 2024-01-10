import { TextInput, View, Image, TouchableOpacity } from 'react-native'

import { styles } from './style'

import { AntDesign } from '@expo/vector-icons'

export function Home(){
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
          placeholder="Digite a tarefa"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button}>
          <AntDesign name="pluscircleo" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}