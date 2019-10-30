import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs"
import Home from "../screens/Home";
import Search from "../screens/Search";
import Save from "../screens/Save";
import Profile from "../screens/Profile";

/* 탭 내비게이션 메뉴 설정 */
export default createBottomTabNavigator({
  Home,
  Search,
  Add: {
    screen: View,
    navigationOptions: {
        tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation")
    }
  },
  Profile,
  Save
});
