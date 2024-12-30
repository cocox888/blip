import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import styles from './customStyles';

const LoadingScreen = () => {
   

    return (
        <View style={styles.loadingContainer}>
            <View style={styles.loadingBox}>
                <Image source={require('../../assets/images/Frame 1000004374.png')}/>
            </View>
        </View>
    );

};

export default LoadingScreen;
