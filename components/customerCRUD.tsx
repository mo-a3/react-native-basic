import React, { useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

var DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Rasheda",
    email: "rasheda@pyther.com",
    address: "India",
    phone:'123456'
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Vivek",
    email: "vivek@pyther.com",
    address: "India",
    phone:'9724232340'
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Rama",
    email: "vivek@pyther.com",
    address: "India",
    phone:'9724232340'
  }
];

const Item = ({ item, onPress, style, onDelete,onEdit  }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{flex:8, height: 50, flexDirection: 'row'}} >
            <View style={{flex:7, height: 50}}>
                <Text style={styles.title}>{item.name}  </Text>
                
            </View>
            <View style={ {flex: 1}} >
            <TouchableOpacity onPress={()=>{
              onEdit(item.id);
              console.log("edit record "+item.id);
            }}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://training.pyther.com/icons/edit.png?9',
            }}
          />
          </TouchableOpacity>
         </View>
            <View  style={{flex:1, height: 50}}>
                <TouchableOpacity onPress={()=>{
                    //DATA = DATA.filter((record)=>(record.id != item.id));
           
                    console.log("delete record item "+item.id);
                    onDelete(item.id);
                }}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://training.pyther.com/icons/delete.png',
            }}
          />
          </TouchableOpacity>
            </View>
        </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{flex:3,  height: 50}} >
            <Text style={{flex:3}}>{item.email}</Text>
        </View>
        <View style={{flex:2,  height: 50}} >
            <Text style={{flex:3}}>{item.phone}</Text>
        </View>
        <View style={{flex:1,  height: 50}} >
            <Text style={{flex:3}}>{item.address}</Text>
        </View>
      </View>
      </View>
  </TouchableOpacity>
);

const CustomerCRUD = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [state, setState] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setRecordId] = useState("");
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
        onDelete = {(id)=>{
            console.log("delete record by Id "+id);
            DATA = DATA.filter((record)=>(record.id != id));
            setState((val)=>(val+1));
        }}
        onEdit = {(id)=>{
          console.log("delete record by Id "+id);
          const temp = DATA.filter((record)=>(record.id == id));
          if(temp.length >0){
            setName(temp[0].name);
            setPhone(temp[0].phone);
            setEmail(temp[0].email);
            setAddress(temp[0].address);
            setRecordId(temp[0].id);
          }
      }}

      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <TextInput style={styles.inputs} placeholder="name" value={name} 
            onChangeText={(value)=>{
                setName(value);
            }} />
            <TextInput style={styles.inputs} placeholder="email" value={email} 
            onChangeText={(value)=>{
                setEmail(value);
            }}  />
            <TextInput style={styles.inputs} placeholder="phone" value={phone} 
            onChangeText={(value)=>{
                setPhone(value);
            }}  />
            <TextInput style={styles.inputs} placeholder="address" value={address} 
            onChangeText={(value)=>{
                setAddress(value);
            }}  />
        </View>
        <TouchableOpacity style={{margin:"4%"}}  onPress={()=>{
            console.log("add customer");
            if(id!=""){ //edit
              const temp = DATA.filter((item)=>(item.id == id));
              if(temp.length > 0){
                //useReducer
                temp[0].name = name;
                temp[0].email = email;
                temp[0].phone = phone;
                temp[0].address = address;
              }
            }else{
              let customer = {
                id: "3ac68afc-c605-48d3-a4f8-" +Date.now(),
                name,email,address,phone
              }
              DATA.push(customer);
            }
              setAddress("");
              setName("");
              setEmail(""); //useReducer
              setPhone(""); 
              setRecordId("");
              setState((oldVal)=>(oldVal+1));
        }} >
            <Text>Add Record</Text>
        </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  email: {
    fontSize: 20,
  },
  phone: {
    fontSize: 18,
  },
  inputs: {
    height: 45,
    marginLeft: 16
    },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  
});

export default CustomerCRUD;
