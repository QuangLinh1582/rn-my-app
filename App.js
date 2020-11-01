import React from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'

const fl=[
  {name:'Friend 1 - Age 20'},
  {name:'Friend 2 - Age 18'},
  {name:'Friend 3 - Age 19'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'},
  {name:'Friend 4 - Age 21'}
];

const url = "https://www.futuremind.com/m/articles/none/react_native_vs_native_apps.png"

const _renderItem = ({item}) => {
  return(
    <View style={styles.container}>
     <Text style={styles.text}>{item.name}</Text>
      <Image
      style={{width:50,height:50}}
      source={{uri:url}}
      />
    </View>
  ) 
}

const renderList=()=>{
  return (
    <FlatList
      data={fl}
      keyExtractor={fl=>fl.name}
      renderItem={_renderItem}
    
    />
  )
}

const styles=StyleSheet.create({
  text:{
    fontSize:30,
    color:'blue'
  },
  container:{
    borderColor:"red",
    borderWidth:1,
    justifyContent:'center',
    alignItems:"center"
  }

})

export default renderList;
