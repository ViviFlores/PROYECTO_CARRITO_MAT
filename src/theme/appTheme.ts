import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    titleWelcome: {
        fontSize: 17,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    textDescription: {
        fontSize: 15,
        color: PRIMARY_COLOR,
        paddingVertical: 10
    },
    containerForm: {
        marginVertical: 10
    },
    iconForm: {
        position: 'absolute',
        bottom: 15,
        right: 10

    },
    textRedirect: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        textAlign: 'center',
        marginTop: 20
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', //negro con transparencia
        justifyContent: 'center',
        alignItems: 'center',

    },
    modal: {
        padding: 20,
        margin: 15,
        backgroundColor: SECONDARY_COLOR, //blanco
        borderRadius: 10
    }


});