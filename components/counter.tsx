import React,{useContext,useReducer, useState} from 'react';
//useReducer is used only in functional component
import { Text, View, Button} from "react-native";
const initialState = {count: 0}; // It is Object {name,id,email,address,phone}

function reducer(state, action) {
  switch (action.type) {
    case 'increment': //actions
      return {count: state.count + 1};
    case 'decrement'://actions
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

// component to update Value
// action => increment 
// reducer => will receive action | update state
// reducer State
// dispatcher 
function Counter() {
  const [name, setName] = useState("initial");
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <View>
      <Text>Count: {state.count}</Text>
      <Button title=" - " onPress={() => dispatch({type: 'decrement'})}></Button>
      <Button title=" + " onPress={() => dispatch({type: 'increment'})}>+</Button>
    </View>
  );
}

export default Counter;