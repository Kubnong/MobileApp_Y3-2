import React from "react";
import {View ,Text ,StyleSheet, Button} from 'react-native';

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