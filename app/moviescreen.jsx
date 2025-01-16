import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '../api/moviedb';

const {width, height}= Dimensions.get('window');

const moviescreen = () => {
  const {params: item} = useRoute();
  const [isFavorited, toggleFavorited] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([]);
  const [similarMovies, setsimilarMovies] = useState([]);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getMovieSimilars(item.id);
  }, [item])
  
  const getMovieDetails =  async id=> {
        const data = await fetchMovieDetails(id);
        if (data) setMovie(data);
  }

  const getMovieCredits =  async id=> {
    const data = await fetchMovieCredits(id);
    if (data) setCast(data.cast);
  }

  const getMovieSimilars =  async id=> {
    const data = await fetchSimilarMovies(id);
    if (data.results) setsimilarMovies(data.results);
}
  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className="flex-1 bg-colors">
        {/* back button and movie poster */}
        <View className="w-full">
            <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
                <TouchableOpacity  onPress={() => navigation.goBack()} className="rounded-3xl p-5 btnbg-colors">
                    <MaterialIcons name='arrow-back-ios-new' size={30} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavorited(!isFavorited)} className="rounded-3xl p-5">
                    <MaterialIcons name={isFavorited? 'favorite' : 'favorite-outline'} size={30} color={isFavorited? 'red': 'white'}/>
                </TouchableOpacity>
            </SafeAreaView>
            <View>
                <Image 
                    source={{uri: image500(movie?.poster_path)}}
                    style={{width, height: height*0.55}}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(38,38,38,1)']}
                    style={{width, height: height * 0.40}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 1}}
                    className="absolute bottom-0"                    
                    />
            </View>
        </View>
        {/* movie details */}
        <View style={{marginTop: -(height*0.09)}} className="space-y-3">
        {/* title */}
            <Text className="text-colors text-center text-3xl font-bold tracking-wider">
                {movie?.title}
            </Text>
            {/* status relese runtime */}
            <Text className="text-colors text-center text-base font-light tracking-wider">
               {movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} minutes
            </Text>
            
            {/* genres */}
            <View className="flex-row justify-center my-4 space-x-4">
                {
                    movie?.genres?.map((genre, index)=> {
                        const showDot = index+1 != movie.genres.length;
                        return (
                            <Text key={index} className="text-colors font-light text-base text-center ml-2">
                                {genre?.name} {showDot? "•":null}
                            </Text>
                        )
                    })
                }
            </View>

             {/* description */}
            <Text className="text-colors mx-4 tracking-wide">
              {
                movie?.overview
              }
            </Text>
        </View>
        
        {/* cast */}
        <Cast navigation={navigation} cast={cast}  />

        {/* Similar movies */}
        <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}></MovieList>
    </ScrollView>
  )
}

export default moviescreen