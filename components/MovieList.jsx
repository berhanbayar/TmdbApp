import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router';

const {width, height}= Dimensions.get('window');

export default function MovieList ({title, data}) {
    const movieName="Movie Name: This War End";
    const navigation = useNavigation();
  return (
  <View className="mb-8">
    <View className="flex-row justify-between items-center mb-5 mx-4">
      <Text className="text-neutral-300 text-xl font-bold">{title}</Text>
      <TouchableOpacity>
        <Text className="text-colors text-md">Hepsini Gör</Text>
      </TouchableOpacity>
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
          onPress={() => navigation.navigate('moviescreen', {item})}>
          <View className="space-y-1 mr-4">
          <Image
            source={require('../assets/images/movieposter-3.jpg')}
            className="rounded-3xl"
            style={{width: width*0.33, height: height*0.22}}
          />
          <Text className="text-neutral-300 ml-1 mt-1">
              {
                movieName.length>14? movieName.slice(0,14)+'...' : movieName
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