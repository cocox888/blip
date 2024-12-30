import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#000",
        width: width
    },

    back: {
        position: 'absolute',
        top: '0px'
    },

    logo: {
        position: 'relative',
        marginTop: width * 0.2
    },

    form: {
        width: width * 0.8,
        backgroundColor: '#FFFFFFE5',
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.04,

        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 10,
        marginTop: -100
    },

    inputform: {
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 13,
        fontSize: 14,
        paddingHorizontal: width * 0.05
    },


    button: {
        color: "black",
        backgroundColor: "#F2DFBB",
        paddingVertical:15,    
        width: width * 0.8,
        marginVertical: 0.05 * width,
        borderRadius:10
    },
    buttonText: {
        fontSize: 15, 
        textAlign:"center",
        fontWeight: 700,
    },
    bottomLogos:{
        marginTop:20,
        flexDirection:"row",
        width:0.6*width,
        justifyContent:"space-around",
    },
    forget:{
        fontSize:13,
        fontStyle:'italic'
    }
})

export default styles;
