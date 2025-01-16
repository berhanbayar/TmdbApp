import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import NowPlaying from '../components/NowPlaying';
import MovieList from  '../components/MovieList';
import { useNavigation } from 'expo-router';
import { fetchNowPlayingMovies, fetchTopRatedMovies, fetchTrendMovies, fetchUpComingMovies } from '../api/moviedb';

const index = () => {
    const [NowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [trendMovies, setTranding] = useState([]);
    const [upcomingMovies, setUpcoming] = useState([]);
    const [topRatedMovies, setToprated] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
      getNowPlayingMovies();
      getTrendMovies();
      getUpComingMovies();
      getTopRatedMovies();
    }, [])
    
    const getNowPlayingMovies = async () => {
        const data = await fetchNowPlayingMovies();
        if (data && data.results) setNowPlayingMovies(data.results);
    }
    const getTrendMovies = async () => {
        const data = await fetchTrendMovies();
        if (data && data.results) setTranding(data.results);
    }
    const getUpComingMovies = async () => {
        const data = await fetchUpComingMovies();
        if (data && data.results) setUpcoming(data.results);
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        if (data && data.results) setToprated(data.results);
    }
    return (
    <View className="flex-1 bg-colors">
       {/* Search Bar and Logo */}
       <SafeAreaView className="mb-3 mt-10">
        <StatusBar style='auto'/>
        <View className='flex-row justify-between items-center mx-4'>
        <MaterialIcons name="menu" size={30} color="white"/>
            <Text className='text-colors text-3xl font-bold'>Movies</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
                >
                <MaterialIcons name='search' size={30} color="white"/>
            </TouchableOpacity>
        </View>
       </SafeAreaView>
       <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 1}}
       >
        {/* Vizyondaki Filmler */}
       {NowPlayingMovies.length>0 && <NowPlaying data={NowPlayingMovies}/>}
       {/* Yakında Gelecek Filmler */}
       <MovieList title="Up Coming" data={upcomingMovies} />
        {/* En çok beğenilen  Filmler */}
       <MovieList title="Top Rated" data={topRatedMovies} />

       <MovieList title="Trend Movies" data={trendMovies} />
       </ScrollView>
    </View>
    );
};

export default index;