import { View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { router, useNavigation } from 'expo-router';
import { image500 } from '../api/moviedb';

const {width, height} = Dimensions.get('window');

export default function NowPlaying ({data}) {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('moviescreen', item);
    }
    // const data = [
    //     { id: 1, image: require('../assets/images/movieposter-1.jpg') },
    //     { id: 2, image: require('../assets/images/movieposter-2.jpg') },
    //     { id: 3, image: require('../assets/images/movieposter-3.jpg') },
    //   ];
  return (
    <View>
      <Text className='text-colors text-xl mx-4 mb-5'>Vizyondakiler</Text>
    <Carousel 
        loop={true}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={2000}
        autoPlay={true}
        data={data}
        renderItem={({item}) => <MovieCard item={item} handleClick={handleClick}/>}
        width={width}
        height={height*0.42}
    />
    </View>
  )
}

const MovieCard = ({item, handleClick }) => {
    console.log("poster path:");
    return (
        <TouchableWithoutFeedback style={{display: 'flex', alignItems:'center'}} onPress={() => handleClick(item)}>
            <Image
                // source={require("../assets/images/movieposter-1.jpg")}
                source={{uri: image500(item.poster_path)}}
                style={{
                    width: width*0.6,
                    height: height*0.4
                }}
                className='rounded-3xl'
                />
        </TouchableWithoutFeedback>
    )
}