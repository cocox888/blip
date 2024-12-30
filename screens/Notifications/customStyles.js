import { FontAwesome } from "@expo/vector-icons";
import { Dimensions, StyleSheet } from "react-native";

const {width, height}=Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"white",
        width:width
    },
    notif:{
        width:width,
        flexDirection:"row",
        justifyContent:"center",
        paddingVertical:10,
        paddingHorizontal:25,
        
    },
    notif_active:{
        backgroundColor:"#EEEEEE",
    },
    notif_body:{
        marginLeft:10,
        flexDirection:"column"
    },
    notif_head:{
        fontSize:14,
        fontWeight:600,
        paddingBottom:5
    },
    notif_content:{
        flexWrap:"wrap"
    },
    mark:{
        width:width,
        textDecorationLine:"underline",
        fontSize:12,
        marginLeft:30,
        marginBottom:10
    },
    btn_group:{
        marginVertical:20,
        flexDirection:"row",
        justifyContent:"space-around",
        width:width
    },
    btn:{
        width:112,
        backgroundColor: "#F5F5F5",
        paddingVertical:8,
        borderRadius:10,
    },
    btn_pressed:{
        backgroundColor:"black",

    },  
    btn_text:{
        color:"black",
        textAlign:"center",
       
    },  
    btn_text_pressed:{
        color:"white"
    }
});

export default styles;
