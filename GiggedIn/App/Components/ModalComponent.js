import React from "react";
import Modal from "react-native-modal";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../Themes";
export const ModalComponent = props => {
    const { isVisible = false, onClose } = props;

    return (
        <Modal isVisible={isVisible} onBackdropPress={() => onClose()}>
            <View style={styles.container}>
                <Text style={styles.helloTxt}>Hello Modal People</Text>
                <TouchableOpacity style={styles.redBtn} onPress={() => onClose()}>
                    <Text style={styles.closeTxt}>CLOSE</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: Colors.silver,
        padding: Metrics.doubleBaseMargin,
        minHeight: (Metrics.screenHeight * 30) / 100
    },
    helloTxt: {
        color: Colors.windowTint,
        fontSize: Fonts.size.h3,
        textAlign: "center"
    },
    redBtn: {
        marginTop: Metrics.doubleBaseMargin,
        backgroundColor: Colors.fire,
        padding: Metrics.baseMargin,
        position: "absolute",
        bottom:  Metrics.doubleBaseMargin,
        left:Metrics.baseMargin,
        right:Metrics.baseMargin,
        marginHorizontal: Metrics.baseMargin
    },
    closeTxt: {
        color: "#ffffff",
        fontSize: Fonts.size.regular,
        textAlign: "center"
    }
});
