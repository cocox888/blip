import { Image, View, Text } from "react-native";
import styles from "./customStyles";
import { TouchableOpacity } from "react-native";

export default function CommonButton({title, pressEvent}) {

    return (
        <TouchableOpacity style={styles.button} onPress={pressEvent} >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                {/* <Image source={require("../../assets/images/bell.png")} /> */}
                <Text style={{ color: "white", fontWeight: 700 }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    
}
