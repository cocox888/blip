import { Image, View, Text } from "react-native";
import styles from "./customStyles";
import { TouchableOpacity } from "react-native";

export default function PromotionCard({ text }) {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={{fontSize:16, width:"50%"}}>
                    {text}
                </Text>
                <Image source={require("../../assets/images/drone.png")} style={styles.image} />
            </View>
        </TouchableOpacity>

    )
}
