import { Dimensions, StyleSheet } from "react-native";

const {width, height}=Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        width:width*0.6,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },

});

export default styles;
