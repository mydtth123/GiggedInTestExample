import { StyleSheet } from "react-native";
import { Metrics, Colors, Fonts } from "../../Themes";
const itemWidth = Metrics.screenWidth / 4 - Metrics.baseMargin;
export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderTopColor: Colors.grayBackground,
        borderTopWidth: 1,
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white
    },
    tabItemContainer: {
        width: itemWidth,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        height: Metrics.bottomBarHeight
        // borderTopColor: Colors.white,
        // borderTopWidth: 1
    },
    tabItemContainerSelected: {
        width: itemWidth,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: Metrics.bottomBarHeight
        // borderTopColor: Colors.background,
        // borderTopWidth: 1
    },
    text: {
        fontFamily: Fonts.type.base,
        color: Colors.text,
        fontSize: Fonts.size.regular,
        marginBottom: Metrics.baseMargin
    },
    selectedText: {
        fontFamily: Fonts.type.bold,
        color: Colors.facebook,
        fontSize: Fonts.size.regular
        // paddingVertical: Metrics.smallMargin
    },
    greenLine: {
        backgroundColor: Colors.facebook,
        height: 3,
        position: "absolute",
        top: 0,
        zIndex: 1,
        width: "60%",
        marginBottom: Metrics.smallMargin,
        marginHorizontal: Metrics.baseMargin
    },
    normalLine: {
        width: "60%",
        position: "absolute",
        top: 0,
        zIndex: 1,
        backgroundColor: "transparent",
        height: Metrics.smallMargin,
        marginBottom: 3,
        marginHorizontal: Metrics.baseMargin
    }
});
