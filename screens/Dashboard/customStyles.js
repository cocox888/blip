import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black",
    paddingVertical:10
  },
  title:{
    color:"white",
    fontSize:30,
    fontWeight:700,
    marginVertical:33,
    paddingLeft:25
  },

  serviceContainer:{
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between", 
    paddingHorizontal:20
  },

  promotionContainer:{
    marginTop:35,
    width:"100%",
    backgroundColor:"white",
    borderRadius:30,
    paddingVertical:45,
  }
});

export default styles;