import { Image, View, Text } from "react-native";
import styles from "./customStyles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

export default function CustomHeaderRight() {
    const navigation = useNavigation();

    const gotoNotification = () => {
        navigation.navigate("Notifications");
    }

    const onLogoutPress = async () => {
        try {
            await signOut(auth);
            // navigation.navigate('Login');
        } catch (error) {
            alert(error.message);
        }
    };
    
    return (

        <View style={styles.container}>
            <Image source={require("../../assets/images/map-pin.png")} />
            <TouchableOpacity onPress={() => alert('Left button pressed!')}>
                <Text style={{ color: "white" }}>1901 THorinridge Cir.</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={gotoNotification}>
                <Image source={require("../../assets/images/bell.png")} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onLogoutPress}>
                <Image source={require("../../assets/images/user.png")} />
            </TouchableOpacity>
        </View>

    )
}
