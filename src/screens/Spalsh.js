import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    LogBox
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BaseNavigationContainer, useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {

    React.useEffect(() => {
        LogBox.ignoreLogs([''])

    }, [])
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Animatable.Image
                     animation= "bounceIn"
                 style={styles.logo}
                 resizeMode="stretch"
                 source={require('../assets/icons/logo.png')}
              />
          </View>
          <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
          >
              <Text style={styles.title}>Stay Connected With CrytoCoin!</Text>
              <Text style={styles.text}>Sign in with Account</Text>
              <View style={styles.button}>
              <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                 <LinearGradient
                      colors={['#A46DFF', '#01ab9d']}
                      style={styles.signIn}

                 >
                     <Text style={styles.textSign}>Get Started</Text>
                 </LinearGradient>
              </TouchableOpacity>
              </View>
          </Animatable.View>
          
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black' 
  },
  header: {
      flex: 2,
      justifyContent:'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

