import { View, Text, Dimensions, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import MovieList from '../components/MovieList';

const { width, height } = Dimensions.get('window');

export default function Person({ person }) {
     const navigation = useNavigation();
    const [isFavorited, toggleFavorited] = useState(false);
    const [personalMovies, setPersonalMovies] = useState([1,2,3,4,5]);
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
                        source={require('../assets/images/cast-1.jpg')}
                        style={{width: width*0.74, height: height*0.43}}
                    />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">
                        Keanu Reeves
                    </Text>
                    <Text className="text-base text-neutral-500 text-center">
                        London, United Kingdom
                    </Text>
                </View>
                <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">Male</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">1964-09-02</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Known for</Text>
                        <Text className="text-neutral-300 text-sm">Acting</Text>
                    </View>
                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">64.23</Text>
                    </View>
                </View>
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate debitis consectetur odit fugit consequatur porro. Perferendis nobis, culpa error iure voluptatibus aliquam illum quos, voluptates corrupti dolores et praesentium neque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis beatae aliquam accusamus nostrum animi enim voluptates maxime sapiente atque, ratione architecto fuga vel, commodi est iste harum rem obcaecati.
                    </Text>
                </View>

                {/* movies */}
                <MovieList title={'Filmleri'} data={personalMovies} hideSeeAll={true}/>
            </View>
        </ScrollView>
    )
}

