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

const {width, height}= Dimensions.get('window');

const moviescreen = () => {
  const {params: item} = useRoute();
  const [isFavorited, toggleFavorited] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([1,2,3,4,5]);
  const [similarMovies, setsimilarMovies] = useState([1,2,3,4,5]);
  useEffect(() => {
    //movie details api
  }, [item])
  
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
                    source={require('../assets/images/movieposter-2.jpg')}
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
                Moviename
            </Text>
            {/* status relese runtime */}
            <Text className="text-colors text-center text-base font-light tracking-wider">
                Yayınlandı | 2020 | 170 dakika
            </Text>
            
            {/* genres */}
            <View className="flex-row justify-center my-4 space-x-3">
            <Text className="text-colors text-center text-base font-light">
                Aksiyon |
            </Text>
            <Text className="text-colors text-center text-base font-light ml-3">
                Macera |
            </Text>
            <Text className="text-colors text-center text-base font-light ml-3">
                Komedi |
            </Text>
            </View>

             {/* description */}
            <Text className="text-colors mx-4 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo eligendi 
                provident quidem tempore aspernatur dignissimos quisquam officiis reiciendis, sunt nesciunt, 
                dicta error numquam, id a porro eos expedita suscipit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Illum vel magni accusantium architecto doloremque fuga totam mollitia consequatur harum vitae. Reiciendis nisi rem, 
                perspiciatis inventore aut recusandae ea consequuntur eaque.
            </Text>
        </View>
        
        {/* cast */}
        <Cast navigation={navigation} cast={cast}  />

        {/* Similar movies */}
        <MovieList title="Benzer Filmler" hideSeeAll={true} data={similarMovies}></MovieList>
    </ScrollView>
  )
}

export default moviescreen