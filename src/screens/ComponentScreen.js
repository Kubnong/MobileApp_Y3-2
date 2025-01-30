import React from "react";
import {View ,Text ,StyleSheet ,Image ,Button ,Alert ,TouchableOpacity} from 'react-native';


const ComponentScreen = ({navigation}) => {
    const name = "Phattharapong";
    const a = ["Ph","ul"];
    const b = <Text style={styles.text}>2024</Text>
    const ShowAlert = (said,msg) => {
        Alert.alert(said, msg,[
            {text:"OK",onPress: () => console.log('Click OK')},
            {text:"Cancel",onPress: () => console.log('Click Cancel')},
        ]);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() =>ShowAlert("Pic said","มาดิ!!")}>
                <Image
                    style={styles.ImageStyle} 
                    //source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgiz_9JlTzuXuk7SqQWEXmPOSjV4B0IEFWYg&s'}}
                    source={require("../img/fish man.jpg")} // แบบมีไฟล์รูปอยู่ในเครื่อง
                />      
            </TouchableOpacity>
            <Text style = {styles.text}>This is Component Screen</Text>
            <Text style={styles.text}>By {name}</Text>
            <Text style={styles.text}>By {a}</Text>
            {b}
            <Button 
                title="Say Hi!!" 
                color="green" 
                onPress={() =>ShowAlert("Button said","What the Fabb!!")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    ImageStyle:{
        width:210,
        height:250,
        margin:5, // เว้นระยะห่างรอบรูปภาพ
        borderWidth:1, // เพิ่มเส้นขอบบาง ๆ
        borderRadius:200 // ทำให้รูปภาพมีความโค้งมนจนกลายเป็นวงกลม
    } 
});

export default ComponentScreen;