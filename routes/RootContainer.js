import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RegisterScreen from "../screens/User/register";
import LoginScreen from "../screens/User/login";
import DashboardScreen from "../screens/Dashboard";
import NotificationScreen from "../screens/Notifications";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Stack = createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>


        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
        />

    </Stack.Navigator>
);

const AppStack = () => (
    <Stack.Navigator>




    </Stack.Navigator>
);

export default function RootContainer() {

    const { user } = useContext(AuthContext);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>

                    {user ? (
                        <>
                            <Stack.Screen
                                name="Dashboard"
                                component={DashboardScreen}
                                options={{ headerShown: true }}
                            />

                            <Stack.Screen
                                name="Notifications"
                                component={NotificationScreen}
                                options={{ headerShown: true }}
                            />
                        </>

                    ) : (
                        <>
                            <Stack.Screen
                                name="Splash"
                                component={Splash}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Register"
                                component={RegisterScreen}
                                options={{ headerShown: false }}
                            />
                        </>
                    )}
                </Stack.Navigator>

            </NavigationContainer>
        </GestureHandlerRootView>
    )
}