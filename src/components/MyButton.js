import React from "react";
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

const MyButton = ({title, onPress, backgroundColor="959d90"}) => { /*รับค่า title จากหน้า Home Screen*/
    return(
        <TouchableOpacity 
            style={[styles.button ,{backgroundColor}]} 
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text> 
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#959d90", 
        alignItems:"center", 
        padding: 10,
        borderRadius: 8,
    },
    text: {fontSize:18, color: "#efefe9", fontWeight:"bold"},
});

export default MyButton;