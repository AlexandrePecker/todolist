import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './style'

import { AntDesign } from '@expo/vector-icons'

type Props = {
  task: String
  onRemove: () => void,
}

export function Task({ task, onRemove }: Props){
  return(
    <View style={styles.container}>
      <Text style={styles.task}>
        {task}
      </Text>

      <TouchableOpacity>
        <AntDesign name="delete" size={24} color="#808080" onPress={onRemove}/>
      </TouchableOpacity>
    </View>
  )
}