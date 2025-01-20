import React from "react";
import {View ,Text ,StyleSheet, Button} from 'react-native';
import MyButton from "../components/MyButton";

//function HomeScreen() {}
//const HomeScreen = (a, b) => {}
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.ViewStyle}>
            <Text style = {styles.textStyle}>List of Screen:</Text>
            <Button
                title = "Go to List Screen"
                onPress={() => navigation.navigate("List")}
            />
            <Button
                title = "Go to Swipe Demo"
                onPress={() => navigation.navigate("Swipe")}
            />
            <MyButton
                title = "Go to Modal Demo"
                onPress={() => navigation.navigate("Modal")}
                backgroundColor="#523d35"
            />
            <MyButton 
                title="ปุ่ม 1" 
                onPress={() => alert("ปุ่ม 1 ถูกกด")} 
                backgroundColor="#523d35"
            />
            <MyButton 
                title="ปุ่ม 2" 
                onPress={() => alert("ปุ่ม 2 ถูกกด")}
                backgroundColor="#523d35"
            />
            <MyButton 
                title="เปิดการ์ด" 
                onPress={() => navigation.navigate("Card")}
                backgroundColor="#223030"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default HomeScreen;