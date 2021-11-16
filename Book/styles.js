import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    contorno: {
        position: "absolute",
        top: 50,
        width: "100%",
        // height: 10,
        borderWidth: 1,
        borderColor: "#6E5494",
        margin: 10
    },
    input: {
        width: '80%',
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5,
        textAlign: 'center',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },

    circle: {
        width: 280,
        height: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#111',
        borderWidth: 2,
        borderRadius: 280,
        marginBottom: 12,
    },
    barra: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
        width: "100%",
        height: 50,
        position: "absolute",
        top: 51,
        backgroundColor: "#fff",
    },
    buttom: {
        flex: 1,
        // flexDirection: "column-reverse",
        width: 50,
        height: 50
    },
    flatList:{
        flex:1,
        top:100,
        flexDirection:"row",
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }    

})


export default styles