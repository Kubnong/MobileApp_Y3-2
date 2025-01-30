import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image} from "react-native";
import Card from '../components/Card'
import CustomButton from "../components/CustomButton";
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from "@react-native-async-storage/async-storage";

const CardScreen = () => {
    const [searchText, setSearchText] = useState(""); //useState เอาไว้จัดการตัวแปรต่าง ๆ
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const STORAGE_KEY = '@card_data'

    useEffect(() => {
        console.log('Content is changed'); //ส่วนที่ให้ code ทำงาน
    }, [title]);
    // [] ทำงานเฉพาะ ครั้งแรก ถ้าไม่มีจะขึ้นใน console ทุกครั้งที่พิมพ์
    // [x] ทำงานทุกครั้งที่ x เปลี่ยน
    // [content] ทำงานทุกครั้งที่พิพม์ content แล้วเปลี่ยน
    const [heroes, setHeroes] = useState([]);
        /*
        {
          id: "1",
          title: "SUNSPOT",
          content:
            "Sunspot channels solar energy to become a powerhouse of unbelievable strength, helps the X-Men, and runs a multi-billion dollar company.",
          image: "https://cdn.marvel.com/content/1x/306ssp_com_crd_01.jpg",
        },
        {
          id: "2",
          image: "https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg",
          title: "ABOMINATION",
          content:
            "Savage and full of a blind rage, Abomination is the Hulk’s foremost foe and while able to crush him, he often faces defeat himself.",
        },
        {
          id: "3",
          image: "https://cdn.marvel.com/content/1x/428all_com_crd_01.jpg",
          title: "Aero",
          content:
            "With the power of the wind at her command, Lei Ling is the master of the sky and the protector of Shanghai!",
        },
        */
    const filteredData = heroes.filter((hero) => 
        hero.title.toLowerCase().includes(searchText.toLowerCase())
    );
    const addCard = async () =>{
        if(!url.trim() || !title.trim() || !content.trim()){
            alert("กรุณากรอก title, content และ url");
            return ;
        }
        const newCard = { id: Date.now().toString(),title,content,image:url};
        const updateCard = [newCard, ...heroes]
        setHeroes(updateCard);
        setUrl("");
        setTitle("");
        setContent("");

        try {
            console.log(STORAGE_KEY,updateCard)
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updateCard))
        } catch(error) {
            console.log("Error : ",error)
        }
    };

    const loadCards = async () => {
        try{
            const storedCards = await AsyncStorage.getItem(STORAGE_KEY);
            setHeroes(JSON.parse(storedCards));
        } catch(error) {
            console.error("Failed to load",error)
        }
    }

    useEffect(() => {
        loadCards();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>ทดสอบการส้รางการ์ด</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Content"
                value={content}
                onChangeText={setContent}
            />
            <TextInput
                style={styles.input}
                placeholder="Image URL"
                value={url}
                onChangeText={setUrl} 
            />
            <CustomButton
                title='เพิ่มการ์ด'
                backgroundColor='pink'
                onPress={addCard} 
            />
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Search by Name"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Card
                            image={item.image}
                            title={item.title}
                            content={item.content}
                        />
                    )
                }}
                contentContainerStyle={styles.cardList}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        margin: 5
    },
    cardList : {
        marginTop: 20
    }
})
export default CardScreen;