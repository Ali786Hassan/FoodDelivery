import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';
function Home1(props) {
    return (
       <SafeAreaView style={{backgroundColor: "#eee",flex:1}}>
        <View style={{ backgroundColor: "white" , padding:15}}>
        <HeaderTabs/>
        <SearchBar/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems/>
        <RestaurantItems/>
        <RestaurantItems/>
        <RestaurantItems/>
        
        </ScrollView>
       </SafeAreaView>
    );
}

export default Home1;

