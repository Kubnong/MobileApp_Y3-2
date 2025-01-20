import React from "react";
import {Text,StyleSheet,Image,View,FlatList} from 'react-native'

const Card = ({title,content,image}) => { /*รับค่า title จากหน้า Card Screen*/
    return(
        <View style={styles.card}>
            <Image
                source={{
                    uri: image,
                    
                }}
                style={styles.image}
            />
            <Text>{title}</Text>
            <Text>{content}</Text>
        </View>   
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
    card:{
        padding: 10,
        shadowColor:"#fff",
        shadowOffset:{width:0,height:2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor:"white",
        margin:10,
    },
    image:{
        width: "100%",
        height: 400
    },
    container:{
        backgroundColor: "#808080",
    }
});

export default Card;