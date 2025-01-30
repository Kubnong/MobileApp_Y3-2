import React from "react";
import {View ,Text ,StyleSheet, Button} from 'react-native';
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";

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
            <Button
                title = "Go to Modal Demo"
                onPress={() => navigation.navigate("Modal")}
                color='green'
            />
            <Button
                title = "Go to Component Screen"
                onPress={() => navigation.navigate("Component")}
                color='green'
            />
            <CustomButton
                title='เรียก Card Screen 🚀'
                onPress={() => navigation.navigate("Card")} 
                backgroundColor="grey"
            />
            <CustomButton
                title='ซ้อม useEffect'
                onPress={() => navigation.navigate("Load")} 
                backgroundColor="blue"
            />
            <Card title='Card #4' content='This is the card number Four.'/>  
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row", // จัดคอมโพเนนต์ในแนวนอน
        alignItems: 'center', // จัดตำแหน่งในแนวตั้ง
        justifyContent: 'center' // จัดตำแหน่งในแนวนอน
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default HomeScreen;