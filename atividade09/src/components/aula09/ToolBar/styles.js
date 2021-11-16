import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    buttom: {
        flex:1,
        flexDirection:"column-reverse",
        width: 50,
        height: 50
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
        top: 0,
        backgroundColor: "#6E5494",
    },
    barraRight:{
        flex:1,
        position:"absolute",
        right:10,
    },
    barraLeft:{
        position:"absolute",
        flex:1,
        left:10,
    }
})
export default styles