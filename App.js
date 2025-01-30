import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import StateScreen from "./src/screens/StateScreen";
import ModalScreen from "./src/screens/ModalScreen";
import SwipeScreen from "./src/screens/SwipeScreen";
import CardScreen from "./src/screens/CardScreen";
import LoadUsers from "./src/screens/LoadUsers";

const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen 
          name="State" 
          component={StateScreen} 
          options = {{title : "Learning UseState 🎪"}}/>
        <Stack.Screen name="Modal" component={ModalScreen}/>
        <Stack.Screen name="Swipe" component={SwipeScreen}/>
        <Stack.Screen
          name="Card" // ชื่อของหน้าที่ใช้ในระบบนำทาง
          component={ CardScreen} // คอมโพเนนต์ที่จะถูกแสดงในหน้าดังกล่าว
          options={{ title: 'Card 🚀'}} // ใช้กำหนดคุณสมบัติเพิ่มเติม เช่น ชื่อที่แสดงในแถบด้านบน (Header)
        />
        <Stack.Screen name="Load" component={LoadUsers}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}
export default App