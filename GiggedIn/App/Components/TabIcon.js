import React from "react";
import { Colors, Metrics } from "../Themes";
import { styles } from "./Styles/BottomTabsStyles";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TabBarIcon = props => {
  const { name = "", icon = "", id = "" } = props.data;
  const isSelected = props.selectedId == id;
  const color = isSelected ? Colors.background : Colors.grayBackground;
  const containerStyle = isSelected
    ? styles.tabItemContainerSelected
    : styles.tabItemContainer;
  const textStyles = isSelected ? styles.selectedText : styles.text;
  const line = isSelected ? styles.greenLine : styles.normalLine;
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => props.onSelected(props.data)}
    >
      <View style={line} />
      <Text style={textStyles}>{name}</Text>
    </TouchableOpacity>
  );
};
