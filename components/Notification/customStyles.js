import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:0,
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        backgroundColor:"white",
        borderRadius:30,
        paddingHorizontal:50,
        paddingVertical:50
    },

    button:{
        flex:1,
        backgroundColor:"black",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        borderRadius:10,
        paddingVertical:20,
        marginVertical:34
    },

    notText:{
        textDecorationLine:"underline",
        fontSize:15,
        fontWeight:700
    },

    title:{
        fontSize:20,
        fontWeight:700,
        marginVertical:10
    }
});

export default styles;
