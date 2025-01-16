import { View, Text, Dimensions, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import MovieList from '../components/MovieList';
import { fallbackPersonImage, fetchPersonDetails, fetchPersonMovies, image185, image342 } from '../api/moviedb';
import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Person({person}) {
    const {params: item } = useRoute();
     const navigation = useNavigation();
    const [isFavorited, toggleFavorited] = useState(false);
    const [personalMovies, setPersonalMovies] = useState([]);
    const [personDetails, setPersonDetails] = useState({})
    useEffect(() => {
    getPersonDetails(item.id);
    getPersonalMovies(item.id);
    }, [item])
    
    const getPersonDetails = async id => {
        const data = await fetchPersonDetails(id);
        if (data) setPersonDetails(data);
    }

    const getPersonalMovies = async id => {
        const data = await fetchPersonMovies(id);
        if (data && data.cast) setPersonalMovies(data.cast);
    }
    return (
        <ScrollView className="flex-1 bg-colors" contentContainerStyle={{ paddingBottom: 20 }}>
            {/* back button */}
            <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4 mt-10">
                <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-3xl p-5 btnbg-colors">
                    <MaterialIcons name='arrow-back-ios-new' size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavorited(!isFavorited)} className="rounded-3xl p-5">
                    <MaterialIcons name={isFavorited ? 'favorite' : 'favorite-outline'} size={30} color={isFavorited? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* person details  */}
            <View>
                <View className="flex-row justify-center">
                    <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                    <Image
                        // source={require('../assets/images/cast-1.jpg')}
                        source={{uri: image342(personDetails?.profile_path) || fallbackPersonImage}}
                        style={{width: width*0.74, height: height*0.43}}
                    />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                        {
                            personDetails?.name
                        }
                    </Text>
                    <Text className="text-base text-neutral-500 text-center">
                       {
                            personDetails?.place_of_birth
                       }
                    </Text>
                </View>
                <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">
                            {
                                personDetails?.gender==1? 'Female' : 'Male'
                            }
                        </Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">{personDetails?.birthday}</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Known for</Text>
                        <Text className="text-neutral-300 text-sm">{personDetails?.known_for_department}</Text>
                    </View>
                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">{personDetails?.popularity?.toFixed(2)}</Text>
                    </View>
                </View>
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                       {
                         personDetails?.biography || 'N/A'
                       }
                    </Text>
                </View>

                {/* movies */}
                <MovieList title={'Filmleri'} data={personalMovies} hideSeeAll={true}/>
            </View>
        </ScrollView>
    )
}

