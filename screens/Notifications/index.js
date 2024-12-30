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

    const handleState = (i) => {
        setState(i);
        console.log("notif pressed22");
    }

    const handleSelect = (i) => {
        setSelect(i);
    }
    return (
        <View style={styles.container}>
            <View style={styles.btn_group}>
                <Pressable onPress={() => handleState(0)} style={({ pressed }) => [
                    styles.btn,
                    state == 0 && styles.btn_pressed,
                ]}>
                    <Text style={[
                        styles.btn_text,
                        state == 0 && styles.btn_text_pressed,
                    ]}>All</Text>
                </Pressable>

                <Pressable onPress={() => handleState(1)} style={({ pressed }) => [
                    styles.btn,
                    state == 1 && styles.btn_pressed,
                ]}>
                    <Text style={[
                        styles.btn_text,
                        state == 1 && styles.btn_text_pressed,
                    ]}>Promotion</Text>
                </Pressable>

                <Pressable onPress={() => handleState(2)} style={({ pressed }) => [
                    styles.btn,
                    state == 2 && styles.btn_pressed,
                ]}>
                    <Text style={[
                        styles.btn_text,
                        state == 2 && styles.btn_text_pressed,
                    ]}>Updates</Text>
                </Pressable>

            </View>

            <TouchableOpacity>
                <Text style={styles.mark}>Mark all as read</Text>
            </TouchableOpacity>

            <ScrollView style={{ flex: 1 }}>
                {
                    Array.from({ length: 10 }, (_, index) => index + 1).map((item, index) => {
                        return (
                            <Pressable onPress={() => handleSelect(index)} style={[styles.notif, select == index && styles.notif_active]}
                                key={index}>
                                <MaterialCommunityIcons name="alert-circle" size={24} color="black" />
                                <View style={styles.notif_body}>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={styles.notif_head}>
                                            Notification Content
                                        </Text>
                                        <Text>
                                            3 days ago
                                        </Text>
                                    </View>

                                    <Text style={styles.notif_content}>
                                        Fusce purus lacus, pretium ac volutpat vel, dictum vitae sem.
                                        Sed porta finibus tellus vel efficitur. Phasellus varius sed
                                        quam sit amet pellentesque.
                                    </Text>
                                </View>

                            </Pressable>
                        )
                    })
                }
            </ScrollView>

            <Image source={require('../../assets/images/Frame 69.png')} style={{ marginVertical: 20 }} />
        </View>
    )
}