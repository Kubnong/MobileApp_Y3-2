import React ,{useState} from "react";
import {View ,Text ,StyleSheet ,FlatList ,Image ,Alert ,TouchableOpacity, Modal} from 'react-native';
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListScreen = ({navigation}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [abc, setName] = useState('')
    const [data, setData] = useState([
            { name: 'Piya', status: 'Phone', day:'Friday'},
            { name: 'Riw', status: 'Mobile', day:'Friday'},
            { name: 'Time', status: 'Phone', day:'Wednesday'},
            { name: 'Kittabech', status: 'Phone', day:'Monday'},
            { name: 'Aum', status: 'Phone', day:'Sunday'},
            { name: 'Stamp', status: 'Mobile', day:'Saturday'},
            { name: 'Praiiiii', status: 'Phone', day:'Friday'},
            { name: 'tamp', status: 'Mobile', day:'Thursday'},
            { name: 'Pat', status: 'Phone', day:'Tuesday'},
            { name: 'Guy', status: 'Phone', day:'Monday'},
        ]);
    const deleteItem = (name) => {
            const newList = data.filter((item) => item.name != name);
            setData(newList);
        };
    {/*
    const ShowAlert = (said,msg) => {
            Alert.alert(said, msg,[
                {text:"OK",onPress: () => console.log('Click OK')},
                {text:"Cancel",onPress: () => console.log('Click Cancel')},
            ]);
        };
    */}
    return (
        <View style={styles.container}>
            <Text style = {styles.textTitle}>Recents</Text>
            <Modal 
                transparent={false} 
                animationType="fade" 
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textStyle}>กำลังโทรหา...</Text>
                        <Image
                            style={styles.ImageStyleList} /*เปลี่ยน style*/
                            source={require("../img/cat.jpg")}
                        />
                        <Text style={styles.textName}>{abc.name}</Text> 
                        <TouchableOpacity 
                            style={styles.okButton}
                            onPress={() => {
                                setIsVisible(false);
                                {/*navigation.navigate("Modal")*/}
                            }}
                        >
                            <Icon name="call-end" size={36} color='light red'/>
                        </TouchableOpacity>
                    </View> 
                </View>                        
            </Modal>

            <SwipeListView  
                data={data}
                keyExtractor={(History) => History.name} 
                renderItem={({item, index}) => { // ส่ง index จะไม่ซ้ำกันอยู่แล้ว
                    return (
                        <View>
                            <TouchableOpacity 
                                onPress={() => {
                                    setIsVisible(true);
                                    setName(item);
                                    navigation.navigate("List",{friends:item});
                                }}
                            >
                                <View style={styles.listItem}>
                                    <View style ={{flexDirection: "row"}}>
                                        <View>
                                            <Image 
                                                style={styles.ImageStyle} 
                                                source={require("../img/cat.jpg")} 
                                            />
                                        </View>
                                        <View style ={{flex: 1}}>                                                  
                                            <Text style ={styles.textStyle}>{item.name}</Text>
                                            <Text style ={styles.text}>{item.status}</Text>
                                        </View>
                                        <View style ={{flex: 0}}>
                                            <Text style ={{marginTop:15}}>{item.day}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }}
                renderHiddenItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.actionButton} 
                        onPress={() => deleteItem(item.name)}
                    >
                        <Text style={StyleSheet.actionText}>Delete {item.name}</Text>
                    </TouchableOpacity>
                )}  
                rightOpenValue={-100}
                disableRightSwipe={true} 
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
        //justifyContent: 'center'
    },
    textTitle:{
        paddingLeft: 20,
        fontSize: 35,
        fontWeight: 'bold'
    },
    textStyle:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    text:{
        fontSize: 15,
        fontWeight: 'thin'
    },
    textName:{
        fontSize: 25,
        fontWeight: 'thin'  
    },
    Record:{
        height: 80,
        paddingLeft: 20,
        paddingRight: 40,
        padding: 10,
        borderColor: "gray",
        borderWidth: 1
    },
    ImageStyle:{
        width:45,
        height:45,
        margin:6,
        marginTop:8,
        paddingLeft:40,
        borderWidth:1,
        borderRadius:30
    },
    modalOverlay:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalContainer:{
        width:300,
        height:400,
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
        backgroundColor: "red",
        padding: 10,        
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    okButtonText: {
        fontSize: 10,
        color:"#fff",
        fontWeight: "bold",
    },
    modelTitle:{
        paddingLeft: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    ImageStyleList:{
        width:200,
        height:200,
        margin:4,
        marginTop:8,
        borderWidth:2,
        borderRadius:100
    },
    listItem:{
        backgroundColor: "#fff",
        padding: 20,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        elevation: 3,
        borderWidth: 1
    },
    listItemText:{
        fontSize: 15,
    },
    actionButton:{
        backgroundColor: "#ff5252",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
        paddingHorizontal: 20,
    },
    actionText:{
        color:"#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
export default ListScreen;