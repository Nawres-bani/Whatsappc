import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput} from 'react-native';
import { View } from 'react-native'



export default function NewAccount() {
  return (
    <ImageBackground
      source={require("../assets/im1.jpg")}
     style={styles.container}>
      <View 
      style={{
        padding:4,
        backgroundColor:"#0005",
        width:"95%",
        alignItems:"center",
        borderRadius:10,
        borderwidth:2,
        bordercolor:"#ccc",
      }}>
      <Text
      style={{
        
       fontsize:32,
       color:"#fff",
       fontWeight:"bold",
       fontstyle:"italic",
     }}>
      Welcome!
     </Text>
     <TextInput
     keyboardType="email-address"
     placeholder="email"
      style={styles.TextInput}></TextInput>
     <TextInput
     placeholder="password"
     secureTextEntry={true}
     style={styles.TextInput}>

     </TextInput>
     <View style={{flexDirection:"row"}}>
     <Button title="sign in"></Button>
     <Button title="Exit"></Button>
     </View>

    
     </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center', // alignement hori 
    justifyContent: 'center', ///alignement verti
  },
  TextInput:{
    width:"90%",
    height:45,
    backgroundColor:"white",
    margin:8,
    borderRadius:5,
    textAlign:"center",
    fontSize:14,
    fontWeight:"bold",

  }

});
