import React from 'react';

import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
  } from "react-native";
  
  export default class Menu extends React.Component{
  
    constructor(props){
      super(props);
      this.state={
        data:[
           
          {
            
              type: 'Dessert',
              color: '#17108a',
              data:[
                  {
                      name:'Stewed Mushrooms',
                      image: require("../Assets/config/namkho.jpg"),
                      price: "$12"
                  },
                  {
                      name:'Jackfruit Fried',
                      image: require("../Assets/config/mitkho.jpg"),
                      price: "$15"
                  }
              ] 
              
          },
          {
              type: 'Main course',
              color: '#17108a',
              data:[
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
          },
          {
              type: 'Other',
              color: '#17108a',
              data:[
                  {
                      name:'Salad dressing',
                      image: require("../Assets/config/cuondiep.jpg"),
                      price: "$13"
                  },
                  {
                      name:'Jackfruit warehouse',
                      image: require("../Assets/config/mitkho.jpg"),
                      price: "$15"
                  }
              ]
          },
      ]
      
      }
    }
  
    renderItem_type = ({item}) => {
      return(
          <TouchableOpacity 
          onPress={()=>this.props.props.navigation.navigate("DetailScreen",{
            image: item.image,
            price: item.price,
            name: item.name
          })}
          style={styles.item_type}>
              <Image 
                source={item.image}
                style={styles.image}
              />
              <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
  
      )
    }
  
    renderItem = ({item}) => {
      return(
        <View style={{flex:1}}>
            <Text style={[styles.type,{
              color: item.color
            }]}>{item.type}</Text>
            <View style={[styles.item,{
              backgroundColor:item.color
            }]}>
                <FlatList 
                  data={item.data}
                  renderItem={this.renderItem_type}
                  keyExtractor={(item,index)=>index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={this.ItemSeparatorComponent_type}
                />
            </View>
        </View>
      )
    }
  
    ItemSeparatorComponent_type = () => {
      return(
        <View 
          style={{width:10}}
        />
      )
    }
    
    ItemSeparatorComponent = () => {
      return(
        <View 
          style={{height:20}}
        />
      )
    }
    
    render(){
      return(
        <View style={styles.container}>
            <FlatList 
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item,index)=>index.toString()}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={this.ItemSeparatorComponent}
            />
        </View>
      )
    }
  }
  
  var styles = StyleSheet.create({
    container: {
      flex:1,
      marginTop:20,
      marginLeft:10,
      marginBottom:10,
      backgroundColor:'white',
      width:'95%'
    },
    type: {
      fontSize:18,
      fontWeight:'bold'
    },
    item: {
      marginTop:10,
      flexDirection:'row',
      paddingHorizontal:15,
      paddingVertical:10,
      borderRadius:10
    },
    item_type: {
      flex:1,
      alignItems:'center'
    },
    image:{
      width:80,
      height:80,
      borderRadius:40,
      borderWidth:2,
      borderColor:'white'
    },
    name: {
      marginTop:10,
      color:'white',
      fontSize:15
    }
  });