import { Dimensions, StyleSheet } from "react-native";

const {width, height}=Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        position:"relative",
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:10,
        padding:5,
        margin:5,
        width:width/3-25,
        height:width/3-25,
        
    },

    textContainer:{
        width:"80%",
    },

    name:{
        color:"black",
        fontSize:13,
        fontWeight:600,
        width:"100%",
        lineHeight:17.29,
        textAlign:"center"
    },
    favorite:{
        position:"absolute",
        right:10,
        top:10,
        zIndex:10
    }

});

export default styles;
