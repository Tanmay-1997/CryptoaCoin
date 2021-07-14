import { text } from 'body-parser';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    Modal,
    Image
} from 'react-native';

const Data = [
    {id:1, text:'BitCoin'},
    {id:2, text:'LiteCoin'},
    {id:3, text:'Ethereum'},
    {id:4, text:'Ripple'},

]

const notification = (navigation) => {
    const [data, setdata] = useState(Data)
    const [isRender, setRender] = useState(false);
    const [isModalVisible, setisModalVisible] = useState(false);
    const [inputText, setInpuText] = useState();
    const [editItem, seteditItem] = useState();

    const onPresssItem  = (item) => {
        setisModalVisible(true);
        setInpuText(item.text)
        seteditItem(item.id)
    }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
            style={styles.item}
            onPress={()=>onPress(item)}
            >
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        )
    }

    const onPressSavedEdit = () => {

    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.no}>notification</Text>

            </TouchableOpacity>

            <FlatList
                data={data}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={renderItem}
                extraData={isRender}
            />
            <Modal
            animationType="fade"
            visible={isModalVisible}
            onRequestClose={() => setisModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.text}>Change Text:</Text>
                    <TextInput
                       style={styles.textInput}
                       onChangeText={(text)=>setInpuText(text)}
                       defaultValue={inputText}
                       editable={true}
                       multiline={false}
                       maxLength={100}
                    />

                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item: {
        borderBottomWidth:1,
        borderBottomColor: 'black',
        alignItems:'flex-start',

    },
    text: {
        marginVertical:15,
        fontSize:20,
        fontWeight:'bold',
        marginLeft:20,
        fontWeight:'bold'
    },
    textInput: {
        width:"90%",
        height:'70',
        borderColor:'grey',
        borderWidth:1,
        fontSize:25
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-start'
    },
    touch: {
        backgroundColor:'orange',
        paddingHorizontal:100,
        alignItems:'center',
        marginTop:20
    },
    no:{
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        padding:30
    }


});

export default notification;
