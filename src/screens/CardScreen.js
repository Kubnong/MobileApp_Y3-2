import React, { useState } from 'react'
import {View ,Text ,StyleSheet ,ScrollView ,Image,FlatList,TextInput} from 'react-native';
import Card from '../components/Card';

const CardScreen = ({navigation}) =>{
    const heroes = [
        {
            id:1,
            title:"SUNSPOT",
            content:"Sunspot channels solar energy to become a powerhouse of unbelievable strength, helps the X-Men, and runs a multi-billion dollar company.",
            image:"https://cdn.marvel.com/content/1x/306ssp_com_crd_01.jpg"
        },
        {
            id:2,
            title:"ABOMINATION",
            content:"Savage and full of a blind rage, Abomination is the Hulk’s foremost foe and while able to crush him, he often faces defeat himself.",
            image:"https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg"
        },
        {
            id:3,
            title:"Aero",
            content:"With the power of the wind at her command, Lei Ling is the master of the sky and the protector of Shanghai!",
            image:"https://cdn.marvel.com/content/1x/428all_com_crd_01.jpg"
        }
    ];
    const [searchKey, setSearchKey] = useState("");
    const [currentHeroes, setCurrentHeroes] = useState(heroes);
    const handleSearch = (key) => {
        setSearchKey(key);
        if(key.trim() === ""){
            setCurrentHeroes(heroes);
        }
        else{
            const results = heroes.filter((hero) => 
                hero.title.toLowerCase().includes(key.toLowerCase())
            );
            setCurrentHeroes(results);
        }
    };
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Search by Name"
                style={styles.input}
                value={searchKey}
                onChangeText={handleSearch}
            />
            <Text styles={{color:"#fff", fontSize: 100}}>{searchKey}</Text>
            <FlatList
                data={currentHeroes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => { // ส่ง index จะไม่ซ้ำกันอยู่แล้ว
                    return(
                        <Card
                            title={item.title}
                            content={item.content}
                            image={item.image}
                        />
                    );
                }}
                ListEmptyComponent={<Text style={styles.noHero}>No hero found</Text>}
            />
        </View>
        /*
        <ScrollView style={styles.container}>
            <Card
                id="1"
                title="SUNSPOT"
                content="Sunspot channels solar energy to become a powerhouse of unbelievable strength, helps the X-Men, and runs a multi-billion dollar company."
                image="https://cdn.marvel.com/content/1x/306ssp_com_crd_01.jpg"
            />
            <Card
                id="2"
                title="ABOMINATION"
                content="Savage and full of a blind rage, Abomination is the Hulk’s foremost foe and while able to crush him, he often faces defeat himself."
                image="https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg"
            />
            <Card
                id="3"
                title="Aero"
                content="With the power of the wind at her command, Lei Ling is the master of the sky and the protector of Shanghai!"
                image="https://cdn.marvel.com/content/1x/428all_com_crd_01.jpg"
            />
        </ScrollView>
        */
    );
};

const styles = StyleSheet.create({
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
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
    },
    noHero:{
        textAlign:"center",
        fontSize: 20,
        color:"#fff",
    },
});

export default CardScreen;