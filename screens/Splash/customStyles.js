import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000",
    paddingBottom:height*0.02
  },

  slideContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: width * 0.1,
    width: width,
 
  },
  //start pagination
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:70
  },
  dot: {
    width: 28,
    height: 2,
    marginHorizontal: 13,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
  //end pagination

  logo: {
    marginTop: width * 0.1
  },

  image: {
    width: 289,
    height: 289,
    marginBottom: height * 0.07
  },

  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: height * 0.02
    
  },

  description: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: height * 0.03,
    width: width * 0.8
  },

  subdescription: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "400",
    textAlign: "center",
    width: width * 0.7
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: height * 0.001,
  },

  button: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center"
  }
});

export default styles;