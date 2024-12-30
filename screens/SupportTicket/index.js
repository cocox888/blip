import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Pressable, TouchableHighlight } from "react-native";
import styles from "./customStyles";
import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function NotificationScreen({ navigation }) {
    const [state, setState] = useState(0);
    const [select, setSelect] = useState(0);


    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
            ),
            headerTitle: "Notifications",
            headerTitleAlign: "center"
        })
    });

   
    return (
        <View style={styles.container}>
          
        </View>
    )
}