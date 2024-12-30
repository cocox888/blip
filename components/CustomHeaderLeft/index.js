import { Image, View, Text } from "react-native";
import styles from "./customStyles";
import { TouchableOpacity } from "react-native";

export default function CustomHeaderLeft() {

    return (
        <TouchableOpacity onPress={() => alert('Left button pressed!')}>
            <Image source={require('../../assets/images/blip.png')} />
        </TouchableOpacity>
    )
}
