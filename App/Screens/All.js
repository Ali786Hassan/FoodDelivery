import React from 'react';
import { View ,Image,FlatList,StyleSheet,Text,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class All extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    name:'Stewed Mushrooms',
                    image: require("../Assets/config/namkho.jpg"),
                    rating: 3,
                    price: "$12"
                },
                {
                    name:'Jackfruit Fried',
                    image: require("../Assets/config/mitkho.jpg"),
                    rating: 5,
                    price: "$15"
                },
                {
                    name:'Noodles',
                    image: require("../Assets/config/hutieu.jpg"),
                    rating: 4,
                    price: "$20"
                },
                {
                    name:'Beef',
                    image: require("../Assets/config/cuonlalot.jpg"),
                    rating: 2,
                    price: "$12"
                },
                {
                    name:'Salad dressing',
                    image: require("../Assets/config/cuondiep.jpg"),
                    rating: 5,
                    price: "$13"
                },
            ]
        }
    }
    _rating(item){
        let rating = [];
        for(i=0;i<item;i++){
            rating.push(
                <Image
                source={require("../Assets/config/star.png")}
                style={{width:15, height:15,marginRight:3}}
                resizeMode="cover"/>
            )
        }
        return rating;
    }
    renderItem = ({item}) => {
        return(
           <LinearGradient
           colors={['#020024','#0a7bbf']}
           start={{x:0,y:1}} end={{x:1,y:0}}
           style={styles.item}>
            <View style={styles.image}>
               <Image
               source={item.image}
               style={styles.img}/>
            </View>
            <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.rating}>
                  {this._rating(item.rating)}
              </View>
              <View style={styles.price_container}>
                  <View style={styles.price}>
                      <Text style={styles.textprice}>{item.price}</Text>
                  </View>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <AntDesign
              name="arrowright"
              color="green"
              size={15}/>
            </TouchableOpacity>
           </LinearGradient>
        )
    }
    ItemSeperatorComponent = () => {
        return(
            <View style={{height:10}}/>
        )
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.flatList}>
                    <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtracter={(item, index) => index.toString()}
                    ItemSeperatorComponent={this.ItemSeperatorComponent}
                    showsVerticalScrollIndicator={false}/>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       marginLeft:20,
       marginTop:10,
       width:'90%',
    },
    flatList:{
        flex:1,
        marginTop:10,
    },
    item:{
        flex:1,
        marginTop:10,
        paddingVertical: 10,
        
        flexDirection:'row',
        borderRadius:10,
    },
    image:{
        width:90,
        height:90,
        
    },
    img:{
        width:'100%',
        height:'100%',
        borderWidth:5,
        borderColor:'white',
        marginLeft:10,
        borderRadius:10,
    },
    content:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    name:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:10,
    },
    rating:{
        marginTop:5,
        marginLeft:10,
        flexDirection:'row',
    },
    button:{
        width:30,
        height:30,
        marginRight:10,
        backgroundColor:'white',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    price_container:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
    },
    price:{
        backgroundColor:'white',
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:50,
    },
    textprice:{
        color:'green',
        fontWeight:'bold',
    }
});
