import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
const Card = ({title, content, image}) => {
    return (
        <View style={styles.card}>
            <Image
                source={{uri:image}}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 20, // เพิ่มระยะห่างด้านในของการ์ด
        borderRadius: 10, // มุมของการ์ดโค้งมน 10 หน่วย
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 14,
        color: '#555'
    },
    image: {
        width: 300,
        height: 350,
        resizeMode: 'cover', // ทำให้รูปภาพพอดีกับพื้นที่โดยคงอัตราส่วนเดิม
        borderRadius: 10,
    },
})
export default Card;