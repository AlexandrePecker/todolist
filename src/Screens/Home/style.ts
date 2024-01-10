import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#272727'
  },
  logoIcon:{
    width: '100%',
    height: 173,
    alignItems: 'center',
    backgroundColor: '#111'
  },
  mainInput:{
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 4
  },
  input:{
    flex: 1,
    backgroundColor: '#0D0D0D',
    borderRadius: 8,
    color: '#FFFFFF',
    padding: 16,
    fontSize: 16,
    width: 327,
    height: 54
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  }
})