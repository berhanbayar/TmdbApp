import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import TrendingMovies from '../components/TrendingMovies'
import MovieList from  '../components/MovieList';

const index = () => {
    const [trending, setTranding] = useState([1,2,3]);
    const [upcoming, setUpcoming] = useState([1,2,3]);
    const [topRated, setToprated] = useState([1,2,3]);
    
    return (
    <View className="flex-1 bg-colors">
       {/* Search Bar and Logo */}
       <SafeAreaView className="mb-3 mt-10">
        <StatusBar style='auto'/>
        <View className='flex-row justify-between items-center mx-4'>
        <MaterialIcons name="menu" size={30} color="white"/>
            <Text className='text-colors text-3xl font-bold'>Movies</Text>
            <TouchableOpacity>
                <MaterialIcons name='search' size={30} color="white"/>
            </TouchableOpacity>
        </View>
       </SafeAreaView>
       <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 1}}
       >
        {/* Trend Filmler */}
       <TrendingMovies data={TrendingMovies}/>
       {/* Yakında Gelecek Filmler */}
       <MovieList title="Yakında" data={upcoming} />
        {/* Yakında Gelecek Filmler */}
       <MovieList title="En çok beğenilenler" data={topRated} />
       </ScrollView>
    </View>
    );
};

export default index;