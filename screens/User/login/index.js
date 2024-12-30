import { View, Text, Image, TextInput, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./customStyles";
import TextInputWithIcon from "../../../components/TextInputWithIcon/TextInputWithIcon";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, getDoc } from "firebase/firestore";

export default function LoginScreen({ navigation }) {
    
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const gotoDashboard = async () => {
        if (email != "" && password != "") {
            setIsLoading(true);
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const uid = userCredential.user.uid;
           
                const userDoc = await getDoc(doc(db, 'users', uid));

                if (!userDoc.exists()) {
                    alert("User does not exist anymore.");
                    return;
                }
                const userData = userDoc.data();
                // await AsyncStorage.setItem('user', JSON.stringify(userData));  // Save user data
                // navigation.navigate('Dashboard');
            } catch (error) {
                alert(error.message);
            } finally {
                setIsLoading(false);
            }

           
        }else{
            email?setEmailError(false):setEmailError(true);
            password?setPassError(false):setPassError(true);
        }

    }

    const gotoRegister = () => {
        navigation.navigate("Register");
    }
    return (
        <View style={styles.container}>

            <Image source={require("../../../assets/images/back.png")}
                style={styles.back} />
            <Image source={require('../../../assets/images/Frame 76.png')}
                style={styles.logo} />
            <Image source={require('../../../assets/images/Untitled-11.png')}
            />
            <View style={styles.form}>
                <Text style={{ fontSize: 20, fontWeight: 600, marginBottom: 13 }}>Login</Text>
                <TextInput style={[styles.inputform, emailError && { borderColor: "red", borderWidth: 1 }]} placeholder="Email"
                    onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInputWithIcon isIcon={true} placeholder="Password" onChanged={setPassword} error={passError} />
                <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                    <Text style={styles.forget}>Forget Password?</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.button} onPress={gotoDashboard}>
                {
                    isLoading ? (
                        <ActivityIndicator size="small" color="black" />
                    ) : (
                        <Text style={styles.buttonText}>LOGIN</Text>
                    )
                }
            </TouchableOpacity>

            <Text style={{ color: "white" }}>or Login with</Text>

            <View style={styles.bottomLogos}>
                <TouchableOpacity>
                    <Image source={require("../../../assets/images/Frame 1000004226.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../../../assets/images/Frame 1000004215.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../../../assets/images/facebook logo (1).png")}></Image>
                </TouchableOpacity>


            </View>
            <TouchableOpacity onPress={gotoRegister}>
                <Text style={{ color: "white", marginTop: 40 }}>New Member? Register Now</Text>
            </TouchableOpacity>
        </View>
    )
}