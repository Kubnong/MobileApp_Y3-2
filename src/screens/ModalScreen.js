import React, { useState } from "react";
import {View, Text, StyleSheet, Modal, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from "../components/MyButton";

const ModalScreen = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <View style={styles.container}>
            <Text> This is Modal Screen </Text>
            <TouchableOpacity 
                style={styles.okButton} 
                onPress={() => setIsVisible(true)}
            >
                <Text style={styles.okButtonText}>Open Modal</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType="fade" visible={isVisible}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Welcome Message</Text>
                        <Text style={styles.msg}>ยินดีต้อนรับ เข้าสู่โลกแห่งจินตนาการ</Text>
                        <TouchableOpacity 
                            style={styles.okButton}
                            onPress={() => {
                                setIsVisible(false);
                                navigation.navigate("List");
                            }}
                        >
                            {/*<Text style={styles.okButtonText}>เข้าสู่ระบบ</Text>*/}
                            <Icon name="call-end" size={36} color='#7268a6'/>
                        </TouchableOpacity>
                    </View> 
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalOverlay:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalContainer:{
        width:350,
        backgroundColor:"#fff",
        borderRadius:10,
        padding:20,
        alignItems:"center",
        elevation: 5,
    },
    title:{
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10,
    },
    msg:{
        fontSize: 15,
        textAlign: "Center",
        marginBottom: 20,
    },
    okButton: {
        backgroundColor: "#4caf50",
        padding: 10,        
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    okButtonText: {
        fontSize: 10,
        color:"#fff",
        fontWeight: "bold",
    },
});

export default ModalScreen;