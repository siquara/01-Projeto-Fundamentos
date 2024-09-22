import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
      backgroundColor: "black",
      flex: 1,
      padding: 24,
    },

    eventName:{
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 24,
    }, 
    eventDate:{
      color: "gray",
      fontSize: 16,
    }, 
    input:{
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        height: 56,
        marginTop: 24,
        padding: 16,
        color: "#FDFCFE",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#31CF67",
        borderRadius: 5,
        height: 56,
        width: 56,
        marginTop: 24,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: "white",
        fontSize: 24,
    }
  })
  ;