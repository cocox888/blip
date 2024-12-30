import { View, Text, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import styles from "./customStyles";
import TextInputWithIcon from "../../../components/TextInputWithIcon/TextInputWithIcon";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import zxcvbn from "zxcvbn";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth, db } from "../../../firebase/config";
import { doc, setDoc } from 'firebase/firestore';
import LoadingScreen from "../../LoadingScreen";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();
export default function RegisterScreen({ navigation }) {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: '233580640746-t5aj3f0gia2tinnk2bkt2k3v5vtk084k.apps.googleusercontent.com',
    });

    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const [confirm, setConfirm] = useState("");

    const [match, setMatch] = useState(false);

    const [color, setColor] = useState("");
    const [score, setScore] = useState(0);

    const colors = ["#FF4C4C", "#FFA500", "#FFD700", "#90EE90", "#4CAF50"];

    const registerWithGoogle = async () => {
        setIsLoading(true);
        const result = await promptAsync();
        if (response?.type === "success") {
            const { id_token } = response.params;

            // Use the id_token to create a Firebase credential
            const credential = GoogleAuthProvider.credential(id_token);
            try {
                const userCredential = await signInWithCredential(auth, credential);
                navigation.navigate("Login");
            } catch (error) {
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
        }

    }

    const gotoLogin = () => {
        navigation.navigate("Login");
    }

    const onRegisterPress = async () => {
        if (validation()) {
            setIsLoading(true);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const uid = userCredential.user.uid;
                const data = {
                    id: uid,
                    email,
                    name,
                };
                console.log(data);
                await setDoc(doc(db, 'users', uid), data);
                // navigation.navigate("Login");
            } catch (error) {
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
        }
    }

    const validation = () => {
        name ? setNameError(false) : setNameError(true);
        email ? setEmailError(false) : setEmailError(true);
        password && score > 2 ? setPasswordError(false) : setPasswordError(true);
        confirm == password ? setMatch(false) : setMatch(true);
        if (name != "" && email != "" && confirm == password && password && score > 2) {
            return true;
        } else {
            return false;
        }
    }

    const handlePassword = (pass) => {
        setPassword(pass);
        const result = zxcvbn(pass);
        setScore(result.score + 1);

        setColor(colors[result.score]);
    }


    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>
                <Image source={require("../../../assets/images/back.png")}
                    style={styles.back} />
                <Image source={require('../../../assets/images/Frame 76.png')}
                    style={styles.logo} />
                <Image source={require('../../../assets/images/Untitled-11.png')}
                />

                <View style={styles.form}>

                    <Text style={{ fontSize: 20, fontWeight: 600, marginBottom: 13 }}>Register</Text>
                    <TextInput style={[styles.inputform, nameError && { borderColor: "red", borderWidth: 1 }]} placeholder="Name"
                        onChangeText={(text) => setName(text)}></TextInput>
                    <TextInput style={[styles.inputform, emailError && { borderColor: "red", borderWidth: 1 }]} placeholder="Email"
                        onChangeText={(text) => setEmail(text)}></TextInput>
                    <TextInputWithIcon isIcon={true} placeholder="Password" onChanged={handlePassword} error={passwordError} />
                    <TextInputWithIcon isIcon={true} placeholder="Confirm Password" onChanged={setConfirm} error={match} />

                    <View style={styles.bars}>
                        {
                            Array.from({ length: score }, (_, index) => index + 1).map((item, index) => {
                                return (
                                    <View style={[styles.bar, { backgroundColor: color }]} key={index}></View>
                                )
                            })
                        }
                    </View>

                </View>

                <TouchableOpacity style={styles.button} onPress={onRegisterPress}>
                    {
                        isLoading ? (
                            <ActivityIndicator size="small" color="black" />
                        ) : (
                            <Text style={styles.buttonText}>REGISTER</Text>
                        )
                    }
                </TouchableOpacity>

                <Text style={{ color: "white" }}>or Register with</Text>

                <View style={styles.bottomLogos}>
                    <TouchableOpacity >
                        <Image source={require("../../../assets/images/Frame 1000004226.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../../assets/images/Frame 1000004215.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../../assets/images/facebook logo (1).png")}></Image>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={gotoLogin}>
                    <Text style={{ color: "white", marginTop: 40 }}>Already Member? Login</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}