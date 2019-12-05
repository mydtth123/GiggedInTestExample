import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import BottomTabs from "../../Components/BottomTabs";
import { Metrics } from "../../Themes";

class BottomBarContainer extends React.Component {
  render() {
    const { style = {} } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.props.children}
        <BottomTabs />
      </View>
    );
  }
}
export default BottomBarContainer;
const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: Metrics.bottomBarHeight }
});
