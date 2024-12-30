import { Dimensions, StyleSheet } from "react-native";

const {width, height}=Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#B3E3E9',
        borderRadius:15,
        width:width*0.7,
        padding:10,
        marginRight:20,
      
    },

});

export default styles;
