import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import SwiperFlatList, { Pagination } from 'react-native-swiper-flatlist';

import { slides, imageItem } from "../../mock/splashMock.js"
import styles from './customStyles';
import Animated, { BounceIn } from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");

const radius = 150;
const numberOfElements = 6;

const getPosition = (index) => {

  const angle = (index * (2 * Math.PI)) / numberOfElements; // Distribute elements evenly
  const x = -radius * Math.sin(angle); // X coordinate
  const y = -radius * Math.cos(angle); // Y coordinate

  return { x, y };
};





const CustomPagination = ({ currentIndex, dataLength }) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: dataLength }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
};



const Splash = ({ navigation }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      swiperRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const gotoRegister = () => {
    navigation.navigate('Login');
  }

  const CarouselCardItem = ({ item, index }) => {
    return (

      <View style={styles.slideContainer} key={index}>
        {
          index == 2 ? (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image source={item.image} style={{ position: "absolute", top: 30, left: 30 }} />
              <Image source={require('../../assets/images/Ellipse 4 (2).png')}
                style={styles.image} />
              {
                currentIndex == 2 ? (
                  Array.from({ length: 6 }).map((_, index) => {
                    const { x, y } = getPosition(index)
                    return (
                      <Animated.View entering={BounceIn.duration(350).delay(300*index)} key={index} style={{ position: "absolute", left: radius + x - 30, top: radius + y - 30, zIndex: 10 }}>
                        <Image source={imageItem[index].image}
                        />
                      </Animated.View>
                    );
                  })
                ) : (<></>)

              }


            </View>
          ) : (
            <Image source={item.image} style={styles.image} />
          )
        }

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.subdescription}>{item.subdescription}</Text>
      </View>


    )
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/blip.png')} style={styles.logo}></Image>

      <SwiperFlatList
        ref={swiperRef}
        showPagination
        index={0}
        data={slides}
        onChangeIndex={({ index }) => setCurrentIndex(index)}
        renderItem={CarouselCardItem}
        PaginationComponent={() => (
          <CustomPagination
            currentIndex={currentIndex}
            dataLength={slides.length}
          />
        )}
      />
      <View style={styles.buttons}>
        {
          currentIndex == 2 ? (
            <View></View>
          ) : (<TouchableOpacity onPress={gotoRegister}>
            <Text style={styles.button}>Skip</Text>
          </TouchableOpacity>)
        }
        {
          currentIndex == 2 ? (
            <TouchableOpacity onPress={gotoRegister}>
              <Text style={styles.button}>Get Started</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleNext}>
              <Text style={styles.button}>Next</Text>
            </TouchableOpacity>
          )
        }

      </View>
    </View>
  );
};

export default Splash;