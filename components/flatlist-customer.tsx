import React, { useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Rasheda",
    email: "rasheda@pyther.com",
    address: "India",
    phone:'12345678'
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

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{flex:8, height: 50, flexDirection: 'row'}} >
            <View style={{flex:7, height: 50}}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={ {flex: 1}} >
            <TouchableOpacity onPress={()=>{

            }}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'http://training.pyther.com/icons/edit.png?9',
            }}
          />
          </TouchableOpacity>
         </View>
            <View  style={{flex:1, height: 50}}>
            <Image
            style={styles.tinyLogo}
            source={{
              uri: 'http://training.pyther.com/icons/delete.png',
            }}
          />
            </View>
        </View>
        <View style={{flex:2,  height: 50}} >
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
        </View>
      </View>
  </TouchableOpacity>
);

const Customer = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

export default Customer;
