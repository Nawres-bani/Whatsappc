import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { Button, ImageBackground } from 'react-native';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from "../Config";
const auth= firebase.auth();
//avec l importation du props
export default function Auth(props) {

    // Déclaration de l'état local pour les valeurs des champs
    const [email, setEmail] = useState('nawres@gmail.com');
    const [pwd, setPassword] = useState('123456');
  
    // Fonction pour réinitialiser les valeurs des champs
    const handleCancel = () => {
      setEmail('');
      setPassword('');
    };
    return (
    <ImageBackground 

    source={require("../assets/back2.jpg")}
    style={styles.container}>
      <View
      style={{ backgroundColor:"grey",
    width: "95%",
     height: 280,
     alignItems: "center",
     borderRadius:10,
     borderColor: "white",
     borderWidth:2
  }}
      >
      <Text 
      style={{ backgroundColor: "grey",
      fontSize: 34,
      fontStyle: "italic",
      fontWeight :"bold",
      color:"white",
      borderRadius: 5,

       }}
      >
        Bienvenue !
        </Text>
        <TextInput 
       value={email}
       onChangeText={(text) => setEmail(text)}
        keyboardType='email-adress'
        placeholder= "email"
        style={styles.inputstyle}></TextInput>
        <TextInput 
       value={pwd}
       onChangeText={(text) => setPassword(text)}

        placeholder='*'
        secureTextEntry={true}

        style={styles.inputstyle}></TextInput>
        <View style={{ flexDirection: "row", 
        alignItems: "flex-end"
      }}>
        <Button
        
        onPress={()=>{

       
            auth.signInWithEmailAndPassword(email,pwd)
            .then(()=>{   
              const currentid =auth.currentUser.uid;
              props.navigation.replace("home",{currentid:currentid});})
            .catch((err)=>{
              alert(err);
            });
          
          
          
        }}
        title="Se connecter"></Button>
        <Button title="Annuler" color="red"             onPress={handleCancel}

        ></Button>
        </View>
        <TouchableOpacity onPress={() =>props. navigation.navigate('NewAccount')}>
        <Text style={styles.newacc}>Créer un nouveau compte</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',//allignment horizental
    justifyContent: 'center',//alignement verticale
  },
  inputstyle: {
    width: "90%",
    height: 50,
    margin: 10,
    textAlign: "center",
    borderRadius: 7,
    backgroundColor: 'white',
    
  },
  newacc: {
    marginTop: 10,
    color: 'blue', 
    textDecorationLine: 'underline', 
  },
});