import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    ImageBackground,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { BaseNavigationContainer, useTheme } from '@react-navigation/native';
import { COLORS, SIZES, icons, FONTS, } from '../constants';

//import { useTheme } from 'react-native-paper';

//import { AuthContext } from '../components/context';

//import users from '../module/users';


const Reset = ({ navigation }) => {
    const [data, setData] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        isValidPassword: true,
        isValidUser: true,


    });

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry

        });
    }



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View
                style={{
                    width: "100%",
                    height: 220,
                    ...styles.shadow
                }}
            >
                <ImageBackground
                    source={require('../assets/icons/banner.png')}
                    resizeMode='stretch'
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require('../assets/icons/back_arrow.png')}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 25,
                                marginRight: 320,
                                padding: 14
                            }}
                        />

                    </TouchableOpacity>


                    <Text style={styles.text_header}>Create Your New Password</Text>
                </ImageBackground>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}

            >
                <Text style={[styles.text_footer, { marginTop: 20 }]}>New Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="enter your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.TextInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}

                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >{data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="red"
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color="green"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                {data.isValidPassword ? null :
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={800}>
                        <Text style={styles.errorMsg}>Password must be 8 character long</Text>
                    </Animatable.View>
                }
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>submit</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <Text style={styles.or}>--------OR--------</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                        style={[styles.signIn, {
                            borderColor: '#009397',
                            borderWidth: 1,
                            marginTop: 15
                        }]}

                    >
                        <Text style={[styles.textSign, { color: '#009387' }]}>
                            SignUp</Text>

                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default Reset;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'purple'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: SIZES.padding * 3.3
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    TextInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontWeight: "700"
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    or: {
        justifyContent: 'center',
        marginTop: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    }
});
