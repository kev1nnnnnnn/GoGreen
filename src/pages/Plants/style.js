import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {

        backgroundColor: "#004953",
    },
    albumImage: {
        width: 250,
        height: 200,
        marginLeft: "20%",
        marginRight: "20%",
        borderRadius: 20,
    },
    contentTop: {
        marginTop: "0%",
        backgroundColor: "#20B2AA",
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        paddingTop: "5%",
    },
    titleAlbum: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#ffff",
        textAlign: "center"
    },
    textAlbum: {
        fontSize: 18,
        color: "#fff",
        lineHeight: 25,
        paddingTop: "2%",
        marginBottom: "10%",
        textAlign: "center"
    },

    contentScroll: {

        marginTop: "5%",
        marginBottom: "39%",
    },  
    titleScroll: {
        fontSize: 26,
        color: "#fff",
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: "6%",
    },
    textScroll: {
        fontSize: 17,
        color: "#fff",
        lineHeight: 25,
        marginBottom: "5%",
        marginLeft: "4%",
        marginRight: "4%",
        textAlign: "left",
    },
    button: {
        padding: 15,
        backgroundColor: "#20B2AA",
        marginLeft: "15%",
        marginRight: "15%",
        borderRadius: 25,
        marginTop: "5%",
        alignItems: "center"
    },
    textButton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 19,
    }

});

export default styles