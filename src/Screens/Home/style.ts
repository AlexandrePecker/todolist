import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  logoIcon:{
    width: '100%',
    height: 173,
    alignItems: 'center',
    backgroundColor: '#111'
  },
  mainInput:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      marginTop: -30
  },
  input:{
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#FFFFFF',
    padding: 16,
    fontSize: 16,
    width: 300,
    height: 52,
  },
  button:{
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCont:{
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 24,
    marginLeft: 24
  },
  listEmptyText1:{
    textAlign: 'center',
    color: '#808080',
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold'
  },
  listEmptyText2:{
    textAlign: 'center',
    color: '#808080',
  },
  tasklist:{
    textAlign: 'center',
    marginTop: 45
  }
})