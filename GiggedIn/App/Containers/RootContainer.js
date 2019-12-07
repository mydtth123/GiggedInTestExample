import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import ReduxNavigation from "../Navigation/ReduxNavigation";
import { connect } from "react-redux";
import StartupActions from "../Redux/StartupRedux";
import ReduxPersist from "../Config/ReduxPersist";

// Styles
import styles from "./Styles/RootContainerStyles";
import { ModalComponent } from "../Components/ModalComponent";
import  AppTypes  from "../Redux/AppRedux";

class RootContainer extends Component {
    componentDidMount() {
        // if redux persist is not active fire startup action
        if (!ReduxPersist.active) {
            this.props.startup();
        }
    }
    onClose = ()=>  {
      console.log('onCloseonClose')
      this.props.hideModal()
    }

    render() {
        const {isShowModal} = this.props
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle="light-content" />
                <ReduxNavigation />
                <ModalComponent isVisible={isShowModal} onClose={()=>this.onClose()}/>
            </View>
        );
    }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
    startup: () => dispatch(StartupActions.startup()),
    hideModal:() => dispatch(AppTypes.hideModal())
});

function mapStateToProps(state) {
    return {
        isShowModal: state.app.isShowModal
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
