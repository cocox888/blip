import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './customStyles';
import CustomHeaderLeft from '../../components/CustomHeaderLeft';
import CustomHeaderRight from '../../components/CustomHeaderRight';
import ServiceCard from '../../components/ServiceCard';
import PromotionCard from '../../components/PromotionCard';
import Notification from '../../components/Notification';
import { AuthContext } from '../../Provider/AuthProvider';

const images = {
  medical: require('../../assets/images/Layer_1 (3).png'),
  food: require('../../assets/images/Layer_1 (4).png'),
  flower: require('../../assets/images/Layer_1 (5).png'),
  pet: require('../../assets/images/Layer_1 (2).png'),
  electronic: require('../../assets/images/Layer_1.png'),
  grocery: require('../../assets/images/Layer_1 (1).png'),

  courier: require('../../assets/images/Layer_1 (14).png'),
  construction: require('../../assets/images/Layer_1 (7).png'),
  personal: require('../../assets/images/Layer_1 (8).png'),
  hardware: require('../../assets/images/Layer_1 (9).png'),
  sub: require('../../assets/images/Layer_1 (10).png'),
  clothing: require('../../assets/images/Layer_1 (11).png'),
  video: require('../../assets/images/Layer_1 (12).png'),
  eco: require('../../assets/images/Layer_1 (13).png'),

};

const DashboardScreen = ({ navigation }) => {
  const [showNotification, setShowNotification] = useState(true);

  const { user } = useContext(AuthContext);

  const handleNotif = (show) => {
    setShowNotification(show);
  }
  // const {user}=navigation.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CustomHeaderLeft />,
      headerTitle: "",
      headerRight: () => <CustomHeaderRight />,
      headerStyle: {
        backgroundColor: 'black', // Custom background color
      },

    });

    // const timer = setTimeout(() => {
    //   setShowNotification(false);
    // }, 3000); // 3000ms = 3 seconds
    // return () => clearTimeout(timer);

  }, [navigation]);


  return (
    <View>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Welcome to Blip</Text>
        <View style={styles.serviceContainer}>
          <ServiceCard name="Medical Supplies" imgUrl={images.medical} delay={200} />
          <ServiceCard name="Food & Beverages" imgUrl={images.food} delay={400} />
          <ServiceCard name="Flowers and Gifts" imgUrl={images.flower} delay={600} />
          <ServiceCard name="Pet Supplies" imgUrl={images.pet} delay={800} />
          <ServiceCard name="Electronics" imgUrl={images.electronic} delay={1000} />
          <ServiceCard name="Groceries" imgUrl={images.grocery} delay={1200} />
        </View>
        <View style={styles.promotionContainer}>
          <Text style={{ fontSize: 20, fontWeight: 600, marginLeft: 25 }}>Promotions & Offers</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 20, marginLeft: 25 }}>
            <PromotionCard text="Save 20% on your first delivery" />
            <PromotionCard text="Monthly subscription for unlimited instant delivery." />

          </ScrollView>
          <Text style={{ fontSize: 20, fontWeight: 600, marginLeft: 25 }}>Popular Products and Services</Text>

          <View style={styles.serviceContainer}>
            <ServiceCard name="Courier Services" imgUrl={images.medical} backColor='#EEEEEE' />
            <ServiceCard name="Construction Services" imgUrl={images.construction} backColor='#EEEEEE' />
            <ServiceCard name="Personal Care Items" imgUrl={images.personal} backColor='#EEEEEE' />
            <ServiceCard name="Hardware" imgUrl={images.hardware} backColor='#EEEEEE' isFavorite />
            <ServiceCard name="Food & Beverages" imgUrl={images.food} backColor='#EEEEEE' isFavorite />
            <ServiceCard name="Subscription" imgUrl={images.sub} backColor='#EEEEEE' isFavorite />
            <ServiceCard name="Clothing and Accessories" imgUrl={images.clothing} backColor='#EEEEEE' isFavorite />
            <ServiceCard name="Video Surveillance" imgUrl={images.video} backColor='#EEEEEE' isFavorite />
            <ServiceCard name="Eco Friendly Delivery" imgUrl={images.eco} backColor='#EEEEEE' isFavorite />

          </View>
        </View>
      </ScrollView>
      {
        showNotification ? (
          <Notification onPress={handleNotif} />) : (
          <View></View>
        )
      }
    </View>


  );
};

export default DashboardScreen;