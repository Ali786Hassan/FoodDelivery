import React from 'react';
import {  View,StyleSheet,Image,StatusBar,ImageBackground,ScrollView,Text,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
function LS(props) {
    return (

     <View style={styles.container}>
       <StatusBar barStyle="light-content" />
       <ImageBackground source={require('../Assets/config/image.png')}
       style={styles.image}
       resizeMode={"stretch"}>
         <View style={styles.image_container}>
              <Image 
                source={require('../Assets/config/namkho.jpg')}
                style={styles.image1}
              />
          </View>
          <TouchableOpacity style={styles.back}>
              <AntDesign 
                name="arrowleft"
                color="white"
                size={35}
                // onPress={()=>this.props.navigation.goBack()}
              />
            </TouchableOpacity>
       </ImageBackground>
       <ScrollView style={styles.footer}>
            <View style={styles.status}>
                <Text style={{color:'black',fontWeight:'bold'}}>AVALIABLE</Text>
            </View>
            <Text  style={styles.textDetail}> The template details auto text code displays the complete template details, including attribute details and metric details.</Text>
            <TouchableOpacity>
            <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['#120d66','#0a7bbf']}
            style={styles.button}
            >
              <Text style={styles.textOrder}>ORDER NOW</Text>
            </LinearGradient>
            </TouchableOpacity>
            </ScrollView>
       </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
    image:{
        width:'100%',
        height:'65%',
    },
    image1: {
          width:'100%',
          marginLeft:200,
          marginTop:60,
          height:'100%',
          borderWidth:3,
          borderRadius:100,
          borderColor:'white',
        },
    image_container: {
      width:'50%',
      alignItems:'center',
      borderRadius:60,
      height:'40%',
    },
    back:{
       //marginBottom:30,
       marginTop:-170,
       marginLeft:10,
    },
    textDetail: {
      color:'gray',
      marginTop:30,
      fontSize:17,
    },
    footer: {
      flex:1,
      paddingHorizontal:30,
      paddingVertical:20,
      paddingBottom:30,
      marginTop:-150,
    },
    status: {
      width:100,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      paddingVertical:3,
      //marginTop:-10,
      borderColor:'#120d66',
      borderWidth:3,
    },
    textOrder: {
      color:'white',
      fontWeight:'bold',
      fontSize:18
    },
    button: {
      justifyContent:'center',
      alignItems:'center',
      marginTop:80,
      paddingVertical:10,
      borderRadius:100
    },
    
})
export default LS;