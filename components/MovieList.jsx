import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native'
import React, { useRef } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router';
import { fallbackMoviePoster, image185 } from '../api/moviedb';

const {width, height}= Dimensions.get('window');

export default function MovieList ({title, data, hideSeeAll}) {
    const navigation = useNavigation();

   
  return (
  <View className="mb-8">
    <View className="flex-row justify-between items-center mb-5 mx-4">
      <Text className="text-colors text-xl font-bold">{title}</Text>
        {
          !hideSeeAll && (
            <TouchableOpacity>
            <Text className="text-colors text-md">See All</Text>    
            </TouchableOpacity>
          )
        } 
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
    >
    {data.map((item, index) => {
      return(      
        <TouchableOpacity
          key={index}
          onPress={() => navigation.push('moviescreen', {item})}>
          <View className="space-y-1 mr-4">
          <Image
            source={{uri: image185(item.poster_path || fallbackMoviePoster)} }
            className="rounded-3xl"
            style={{width: width*0.33, height: height*0.22}}
          />
          <Text className="text-colors ml-1 mt-1">
              {
                item.title.length>14? item.title.slice(0,14)+'...' : item.title
              }
          </Text>
          </View>
        </TouchableOpacity>
      )})
    }
      
    </ScrollView>
  </View>
    
  )
}