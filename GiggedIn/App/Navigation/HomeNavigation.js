import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomePage from "../Containers/Screen/HomePage";
import DirectionsPage from "../Containers/Screen/Directions";
import ApiScreen from "../Containers/Screen/ApiScreen";
const HomeNavigation = createBottomTabNavigator(
    {
        Home: { screen: HomePage },
        Directions: { screen: DirectionsPage },
        ApiScreen: { screen: ApiScreen }
    },
    {
        // Default config for all screens
        headerMode: "none",
        initialRouteName: "Home",
        navigationOptions: {
            //   headerStyle: styles.header
        },
        defaultNavigationOptions: {
            tabBarVisible: false
        }
    }
);
export const Home = createAppContainer(HomeNavigation);
