import React, {useState} from "react";
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { SwipeListView } from "react-native-swipe-list-view";

const SwipeScreen = () => {
    const [data, setData] = useState([
        {id: "1", text: "รายการที่ 1"},
        {id: "2", text: "รายการที่ 2"},
        {id: "3", text: "รายการที่ 3"},
        {id: "4", text: "รายการที่ 4"},
        {id: "5", text: "รายการที่ 5"},
    ]);

    const deleteItem = (id) => {
        const newList = data.filter((item) => item.id != id);
        setData(newList);
    }
    return (
        <View style={styles.container}>
            <Text>This is Swipe Screen</Text>
            <SwipeListView 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>{item.text}</Text>
                    </View>  
                )}
                renderHiddenItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.actionButton} 
                        onPress={() => deleteItem(item.id)}
                    >
                        <Text style={StyleSheet.actionText}>Delete {item.id}</Text>
                    </TouchableOpacity>
                )}  
                rightOpenValue={-100}
                //disableRightSwipe={true} ถ้าใช้จะทำการเลื่อนเปิดซ้ายไม่ได้เลย
                onSwipeValueChange={(swipeData) => {
                    const {key, value} = swipeData;
                    value <= -300 ? deleteItem(key) : null;
                }}  
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    },
    listItem:{
        backgroundColor: "#fff",
        padding: 20,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 3,
    },
    listItemText:{
        fontSize: 15,
    },
    actionButton:{
        backgroundColor: "#ff5252",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "90%",
        paddingHorizontal: 20,
    },
    actionText:{
        color:"#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default SwipeScreen;
