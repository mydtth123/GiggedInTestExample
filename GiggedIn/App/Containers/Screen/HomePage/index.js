import React from "react";
import { View, Text } from "react-native";
import BottomBarContainer from "../../TabContainer/BottomTabContainer";
export default class HomePage extends React.Component {
    render() {
        return (
            <BottomBarContainer>
                <Text>Directions</Text>
            </BottomBarContainer>
        );
    }
}
