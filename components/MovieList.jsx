import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from 'expo-router';

export default function MovieList ({title, data}) {
    const movieName="berhan";
    const navigation = useNavigation();
  return (
    <View className='mb-8 space-y-4'>
      <View className='flex-row justify-between items-center mx-4'></View>
        <Text className='text-white text-xl'>{title}</Text>
        <TouchableOpacity>
            <Text className='text-lg text-colors'>Hepsini Gör</Text>
        </TouchableOpacity>
        <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 15 }}>
              {
                  data.map((item, index) => {
                      return (
                        <Text>deneme</Text>
                        // <TouchableWithoutFeedback
                        //     key={index}
                        //     onPress={() => navigation.navigate('Movie', item)}>
                        // </TouchableWithoutFeedback>
                      )
                  })
              }
          </ScrollView>
    </View>
    
  )
}