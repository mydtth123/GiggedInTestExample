import React from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../../Themes";
import { connect } from "react-redux";
import BottomBarContainer from "../../TabContainer/BottomTabContainer";
class ApiScreen extends React.Component {
    render() {
        const { loading, userData = [] } = this.props;
        console.log("userData", userData);
        return (
            <BottomBarContainer>
                <View style={styles.container}>
                    {loading ? (
                        <ActivityIndicator size={"large"} />
                    ) : (
                        <FlatList
                            data={userData}
                            renderItem={this._renderItem}
                            keyExtractor={item => item.id.toString()}
                            ItemSeparatorComponent={() => <View style={styles.line} />}
                        />
                    )}
                </View>
            </BottomBarContainer>
        );
    }
    _renderItem = ({ item }) => {
        return <ListItem data={item} />;
    };
}

class ListItem extends React.PureComponent {
    render() {
        const { data } = this.props;
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>{`Name: ${data.name}`}</Text>
                <Text style={styles.itemLabel}>{`Email: ${data.email}`}</Text>
                <Text style={styles.itemLabel}>{`Phone Number: ${data.phone}`}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemContainer: {
        padding: Metrics.baseMargin
    },
    itemLabel: {
        fontSize: Fonts.size.regular,
        color: "black",
        marginVertical: Metrics.smallMargin
    },
    container: {
        flex: 1,
        paddingTop: Metrics.navBarHeight
    },
    line:{
        backgroundColor:Colors.steel,
        height:1,
        marginHorizontal:Metrics.baseMargin
    }
});
function mapStateToProps(state) {
    return {
        userData: state.users.userData,
        loading: state.users.loading
    };
}

export default connect(mapStateToProps, null)(ApiScreen);
