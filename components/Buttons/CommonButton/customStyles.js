import { Dimensions, StyleSheet } from "react-native"
const {width, height}=Dimensions.get("window");

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderRadius: 10,
        paddingVertical: 20,
    },
})

