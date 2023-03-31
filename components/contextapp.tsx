import React,{useContext} from 'react';
import { Text, View,Button } from "react-native";

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
      name:"Light theme"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
      name:"Dark theme"
    }
  };
  
  //const ThemeContext = React.createContext(themes.light);
  const ThemeContext = React.createContext(themes.light);
  
  function ContextApp() { //parent
    return (
      <ThemeContext.Provider value={themes.light}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) { // child
    return (
      <View>
        <ThemedButton /> 
      </View>
    );
  }
  
  function ThemedButton() { //grand child
    const theme = useContext(ThemeContext);
    return (
      <View>
      <Text>The theme is {theme.name}</Text>
      <View style={{ backgroundColor: theme.background, color: theme.foreground }} >
       
        <Button style={{ backgroundColor: theme.background, color: theme.foreground }} 
        title="I am styled by theme context!" >
          
        </Button>
      </View>
      </View>

    );
  }
  export default ContextApp;