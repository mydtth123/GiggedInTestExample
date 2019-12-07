import React from "react";
import { View } from "react-native";
import { TabBarIcon } from "./TabIcon";
import { styles } from "./Styles/BottomTabsStyles";
import { tabData } from "../Services/GlobalMethod";
import { connect } from "react-redux";
import TabBarTypes from "../Redux/TabBarRedux";
import { withNavigation } from "react-navigation";
import AppTypes from "../Redux/AppRedux";
import UserDataTypes from "../Redux/UserDataRedux";
class BottomTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabData: tabData
        };
    }

    onSelected = item => {
        if (item.id === "modal_item") {
            this.props.showModal();
            return;
        } else if (item.id == "home_page") {
            this.props.navigation.navigate("Home");
        } else if (item.id == "direction_page") {
            this.props.navigation.navigate("Directions");
        } else if (item.id == "api_page") {
            this.props.navigation.navigate("ApiScreen");
            this.props.getUserData()
        }
        this.props.setSelectedTab(item.id);
    };
    render() {
        return <View style={styles.container}>{this.renderTabItem()}</View>;
    }
    renderTabItem = () => {
        const { selectedTabbar } = this.props;
        return tabData.map(item => {
            return <TabBarIcon data={item} key={item.id} onSelected={this.onSelected} selectedId={selectedTabbar} />;
        });
    };
}

function mapStateToProps(state) {
    return {
        selectedTabbar: state.tabbars.selectedTab
    };
}
const mapDispatchToProps = dispatch => {
    return {
        setSelectedTab: id => {
            dispatch(TabBarTypes.setSelectedTab(id));
        },
        showModal: () => {
            dispatch(AppTypes.showModal());
        },
        getUserData: () => {
            dispatch(UserDataTypes.fetchingData());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(BottomTabs));
