import { View, Text, Dimensions, TouchableOpacity, TextInput, ScrollView, TouchableWithoutFeedback, Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const {width, height}= Dimensions.get('window');

export default function Search  () {
  const movieName = "Movie Name: The War End";
  const [results, setResults] = useState([1,2,3,4])
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-colors flex-1">
     <View className="mx-4 mt-3 mb-3 flex-row justify-between items-center border border-neutral-300 rounded-full">
        <TextInput
            placeholder='Aradığınız filmi yazın...'
            placeholderTextColor={'lightgray'}
            className="pb-1 pl-6 flex-1 text-base font-semibold text-colors tracking-wider"
            >
        </TextInput>
        <TouchableOpacity
            onPress={() => navigation.navigate('index')}
            className="rounded-full p-3 m-1 bg-colors"
        >
        <MaterialIcons name='cancel' size={25} color="white"></MaterialIcons>
        </TouchableOpacity>
     </View>

        {/* Results */}
        {
            results.length>0 ?(
                  <ScrollView
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{ paddingHorizontal: 15 }}
                      className="space-y-5"
                  >
                      <Text className="text-white font-semibold ml-1">
                          Arama Sonuçları ({results.length})
                      </Text>
                      <View className="flex-row justify-between flex-wrap mt-5">
                          {results.map((item, index) => {
                              return (
                                  <TouchableWithoutFeedback
                                      key={index}
                                      onPress={() => navigation.push("moviescreen", { item })}
                                  >
                                      <View className="space-y-2 mb-5">
                                          <Image
                                              className="rounded-3xl"
                                              source={require('../assets/images/movieposter-2.jpg')}
                                              style={{ width: width * 0.44, height: height * 0.3 }}
                                          />
                                          <Text className="text-colors ml-1">
                                              {
                                                  movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName
                                              }
                                          </Text>
                                      </View>
                                  </TouchableWithoutFeedback>
                              );
                          })}
                      </View>
                  </ScrollView>

            ):(
                <View className="flex-1 justify-center items-center">
                   <Image 
                        source={require("../assets/images/notfound-image.png")}
                        style={{width: 300, height: 250}}
                   />
                   <Text className="text-3xl text-colors font-light">Biraz film bulalım!</Text>
                </View>
            )
        }
          

    </SafeAreaView>
  )
}

