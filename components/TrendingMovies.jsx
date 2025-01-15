import { View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';

const {width, height} = Dimensions.get('window');

export default function TrendingMovies ({data}) {
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Movie', item);
    }
    // const data = [
    //     { id: 1, image: require('../assets/images/movieposter-1.jpg') },
    //     { id: 2, image: require('../assets/images/movieposter-2.jpg') },
    //     { id: 3, image: require('../assets/images/movieposter-3.jpg') },
    //   ];
  return (
    <View className='mb-8'>
      <Text className='text-colors text-xl mx-4 mb-5'>TrendingMovies</Text>
    <Carousel 
        loop={true}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={2000}
        autoPlay={false}
        data={data}
        renderItem={({item}) => <MovieCard item={item} handleClick={handleClick}/>}
        width={width}
        height={height*0.62}
    />
    </View>
  )
}

const MovieCard = ({item, handleClick }) => {
    return (
        <TouchableWithoutFeedback style={{display: 'flex', alignItems:'center'}} onPress={handleClick}>
            <Image
                source={require("../assets/images/movieposter-1.jpg")}
                style={{
                    width: width*0.6,
                    height: height*0.4
                }}
                className='rounded-3xl'
                />
        </TouchableWithoutFeedback>
    )
}