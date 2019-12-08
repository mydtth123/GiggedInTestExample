import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import BottomBarContainer from "../../TabContainer/BottomTabContainer";
import MapView, { Polyline, AnimatedRegion } from "react-native-maps";
import { Metrics, Colors, Fonts } from "../../../Themes";
import Geocoder from "react-native-geocoding";
import Api from "../../../Services/Api";
import polyline from "@mapbox/polyline";
export default class DirectionsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "",
            to: "",
            coords: []
        };
        Geocoder.init(""); // use a valid API key
    }
    onChangeFromText = from => {
        this.setState({
            from: from
        });
    };
    onChangeToText = to => {
        this.setState({
            to: to
        });
    };
    drawDirections = () => {
        // let locationTo ={},locationFrom={}
        // Geocoder.from(this.state.to)
        // .then(json => {
        //      locationTo = json.results[0].geometry.location;
        //     console.log(location);
        // })
        // .catch(error => console.warn(error));
        // Geocoder.from(this.state.from)
        // .then(json => {
        //     locationFrom = json.results[0].geometry.location;
        //     console.log(location);
        // })
        // .catch(error => console.warn(error));
        //iNPUT THE API KEY HERE
        const API_KEY = "";
        const { from, to } = this.state;
        if (from.length > 1 && to.length > 1) {
            const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${from}&destination=${to}&mode=transit&key=${API_KEY}`;
            Api.create()
                .getDirection(url)
                .then(res => {
                    console.log("res===", res);
                    const data = res.data;
                    const points = polyline.decode(data.routes[0].overview_polyline.points);
                    let coords = points.map((point, index) => {
                        return { latitude: point[0], longitude: point[1] };
                    });
                    this.goToLocation(coords[0]);
                    this.setState({
                        coords: coords
                    });
                })
                .catch(e => {
                    console.log("res eeeee", e);
                });
        }
    };
    goToLocation(location) {
        let initialRegion = Object.assign({}, location);
        initialRegion["latitudeDelta"] = 0.005;
        initialRegion["longitudeDelta"] = 0.005;
        this.mapView.animateToRegion(initialRegion, 2000);
    }

    render() {
        const { from, to, coords } = this.state;
        return (
            <BottomBarContainer>
                <View style={styles.topContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => this.onChangeFromText(text)}
                        value={from}
                        placeholder={"From"}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => this.onChangeToText(text)}
                        value={to}
                        placeholder={"To"}
                    />
                    <TouchableOpacity onPress={this.drawDirections} style={styles.btnDirections}>
                        <Text style={{ fontSize: Fonts.size.medium, color: "white" }}>Directions</Text>
                    </TouchableOpacity>
                </View>
                <MapView
                    // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    ref={ref => (this.mapView = ref)}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    style={styles.map}
                >
                    <Polyline coordinates={coords} strokeColor={"red"} strokeWidth={3} />
                </MapView>
            </BottomBarContainer>
        );
    }
}
const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: Metrics.baseMargin,
        padding: Metrics.smallMargin
    },
    topContainer: {
        marginTop: Metrics.navBarHeight
    },
    btnDirections: {
        backgroundColor: Colors.facebook,
        padding: Metrics.baseMargin,
        margin: Metrics.baseMargin,
        justifyContent: "center",
        alignItems: "center"
    }
});
