import { createStackNavigator, createAppContainer } from "react-navigation";

import styles from "./Styles/NavigationStyles";
import { Home } from "./HomeNavigation";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
    {
        HomeScreen: { screen: Home }
    },
    {
        // Default config for all screens
        headerMode: "none",
        // initialRouteName: "Login",
        navigationOptions: {
            headerStyle: styles.header
        }
    }
);

export default createAppContainer(PrimaryNav);
