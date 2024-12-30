import { TextInput, View } from "react-native";
import styles from "./customStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";



export default function TextInputWithIcon({ isIcon, icon, placeholder, onChanged, error=false}) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={[styles.form, error&&{borderColor:"red", borderWidth:1}]}>
            <TextInput style={styles.input}
                secureTextEntry={!showPassword}
                placeholder={placeholder}
                onChangeText={(text)=>onChanged(text)}></TextInput>
            {
                isIcon ? (
                    <MaterialCommunityIcons
                        name={!showPassword ? 'eye-off' : 'eye'}
                        size={20}
                        color="#aaa"
                        onPress={toggleShowPassword}
                    />
                ) : (<View></View>)
            }

        </View>
    )
}
