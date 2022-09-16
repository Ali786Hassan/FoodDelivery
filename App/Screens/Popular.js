import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from "react-native";

export default class Popular extends React.Component{

  constructor(props){
    super(props);
    this.state={
      data: [
        {
            name: 'Hassan',
            rating: 5,
            comment: 'Very Good',
            image: require("../Assets/config/avatar1.png")
        },
        {
            name: 'Jawwad',
            rating: 4,
            comment: 'Chaman',
            image: require("../Assets/config/avatar2.png")
        },
        {
            name: 'Furqan beti',
            rating: 2,
            comment: 'Bad',
            image: require("../Assets/config/avatar3.png")
        },
        {
            name: 'Abbas',
            rating: 5,
            comment: 'Chaddi',
            image: require("../Assets/config/avatar4.png")
        },
        {
            name: 'Safdar',
            rating: 4,
            comment: 'Khapr',
            image: require("../Assets/config/avatar2.png")
        },
        {
            name: 'Mujtuba',
            rating: 2,
            comment: 'normal',
            image: require("../Assets/config/avatar4.png")
        }
    ]
    }
  }

  _rating(item){
    let rating = [];
    for(i=0;i<item;i++){
      rating.push(
        <Image 
          source={require("../Assets/config/star2.png")}
          style={{width:15, height:15, marginRight:3}}
          resizeMode="cover"
        />
      )
    }
    return rating;
  }

  renderItem = ({item}) => {
    return(
      <View style={styles.item}>
          <Image 
            source={item.image}
            style={styles.image}
          />
          <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
          <View style={{flexDirection:'row'}}>
            {this._rating(item.rating)}
          </View>
          <Text numberOfLines={2}
          style={styles.comment}
          >"{item.comment}"</Text>
      </View>
    )
  }

  ItemSeparatorComponent = () => {
    return(
      <View 
        style={{height:30}}
      />
    )
  }

  render(){
    return(
      <View style={styles.container}>
         <FlatList 
          data={this.state.data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.ItemSeparatorComponent}
          keyExtractor={(item,index)=>index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={3}
         />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    marginTop:40,
    marginBottom:5

  },
  item: {
    flex:1,
    alignItems:'center'
  },
  image: {
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:2,
    borderColor:'red',
    borderWidth:3,
  },
  name: {
    color:'green',
    fontWeight:'bold'
  },
  comment:{
    fontStyle:'italic',
    marginTop:5,
    fontWeight:'bold',
  }
});