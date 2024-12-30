import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TouchableHighlight,
} from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import styles from './customStyles';


const Notification = ({ onPress }) => {
    const enableNotification = () => {

    }
    return (
        <Animated.View style={styles.container}
            entering={FadeInDown.delay(300).duration(400)}
            exiting={FadeOutDown}>
            <Image source={require("../../assets/images/notif.png")}></Image>
            <Text style={styles.title}>Never Miss a Deal or Delivery!</Text>
            <Text style={{ textAlign: "center" }}>Get instant updates on your orders and exclusive
                local deals by turning on notifications. You can
                customize your preferences anytime!</Text>
            <TouchableOpacity style={styles.button} onPress={enableNotification} >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require("../../assets/images/bell.png")} />
                    <Text style={{ color: "white", fontWeight: 700 }}>Enable Notifications</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>onPress(false)}>
                <Text style={styles.notText}>Not Now</Text>
            </TouchableOpacity>

        </Animated.View>
    );
}

export default Notification;
