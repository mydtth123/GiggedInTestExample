import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomBarContainer from "../../TabContainer/BottomTabContainer";
import { Fonts } from "../../../Themes";
export default class HomePage extends React.Component {
    render() {
        return (
            <BottomBarContainer>
                <View style={styles.container}>
                    <Text style={styles.helloTxt}>Hello GiggedIn</Text>
                </View>
            </BottomBarContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    helloTxt: {
        textAlign: "center",
        fontSize: Fonts.size.h3
    }
});
