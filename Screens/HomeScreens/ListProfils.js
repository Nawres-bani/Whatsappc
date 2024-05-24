import { Text ,ImageBackground,StyleSheet, FlatList,View,Image, TouchableOpacity, Platform, Linking } from "react-native";
import  React, { useState } from 'react';
import { useEffect } from "react";


import firebase from "../../Config";
import { Dialog,Button } from "react-native-paper";
const database =firebase.database();


export default function Users(props) {
  const currentid=props.route.params.currentid;;

  const [data, setdata] = useState([]);
  const [isDialogVisible, setIsDialogVisible] =useState(false)
  const [itemPressed, setItemPressed ]= useState({});
  
  useEffect(() => {
    
  const ref_users =database.ref("users");
  ref_users.on("value",(datasnapshot)=>{
    let d = [];

    datasnapshot.forEach((one_user)=>{
      if(one_user.val().Id!=currentid )
      d.push(one_user.val());
    });
    setdata(d);
    console.log(data);
  });
  
    return () => {
      ref_users.off();
    };
  }, []);
  


  


  return (
    <ImageBackground
      source={require("../../assets/back2.jpg")}
      style={styles.container}
    >
      <Text
        style={{
          textAlign: "center",
          fontsize: 28,
          fontweight: "bold",
          color: "green",
          marginTop: 20,
        }}
      >
        Users
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
          <View
          style={{ 
            flexDirection : "row",
            backgroundColor:"#f5f5f5",
            elevation:5,
            margin:10,
            borderRadius:5,
            alignItems:"center",
            height: 60,

           }}
          >
            <TouchableOpacity onPress ={()=>{
              setItemPressed(item)
              setIsDialogVisible(true)}}>

            <Image
            style ={{ width: 50,height:50,marginRight:20 }}
            source={item.Url ? {uri: item.Url}: require("../../assets/back2.jpg")}>

            </Image>
            </TouchableOpacity>
          <Text> {item.Pseudo }</Text>
          
          </View>)
        }}
        style={{
          margin: 5,
        }}
      ></FlatList>
      <Dialog visible={isDialogVisible}>
        <Dialog.Title>Details et options</Dialog.Title>
        <Dialog.Content>
        <Image
            style ={{ width: 100,height:100,marginRight:20 }}
            source={itemPressed.Url ? {uri: itemPressed.Url}: require("../../assets/back2.jpg")}>

            </Image>
        <Text>{itemPressed.Nom+" "+itemPressed.Prenom+" "+itemPressed.Telephone}</Text>
        </Dialog.Content>

        <Dialog.Actions>
        <Button onPress={()=>{
          if (Platform.OS=="andoid")
          Linking.openURL("tel:"+itemPressed.Telephone);
        if(Platform.Os=="ios")
        Linking.openURL("telprompt:"+itemPressed.Telephone)
        
        }}> Call </Button>
          <Button onPress={()=>{props.navigation.navigate("Chat",{currentid: currentid,secondid:itemPressed.Id,});}} >chat </Button>
          <Button onPress={()=>{setIsDialogVisible(false)}}> cancel </Button>
        </Dialog.Actions>
      </Dialog>
    </ImageBackground>
  );
}
const styles= StyleSheet.create({
  container:{
    flex:1,
  },
});
itempressed.id