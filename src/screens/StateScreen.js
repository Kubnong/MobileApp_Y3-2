import React, { useState } from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const StateScreen = () => {
   const [value, setValue] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
            <View style={styles.button}>
                <Button 
                    title="Increase"
                    color="green"
                    onPress={() =>{
                        //value++;
                        setValue(value+1);
                        console.log(value);
                    }}
                />
                <Button 
                    title="Decrease" 
                    color="red"
                    onPress={() =>{
                        //value--;
                        setValue(value-1);
                        console.log(value);
                    }}
                />
                <Button 
                    title="Reset" 
                    color="blue"
                    onPress={() =>{
                        //value--;
                        setValue(0);
                        console.log(value);
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    text:{
        fontSize: 250,
    },
    button:{
        width: 250,
        gap: 5,
    },
});

export default StateScreen;