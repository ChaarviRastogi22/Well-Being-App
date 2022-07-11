import Sidebar from "react-native-sidebar";
import SideMenu from "react-native-side-menu-updated";
import { Text, Button } from "react-native";

const SidebarScreen = () => {
    return (
    <SideMenu
        style={{ flex: 1, backgroundColor: 'black', width: 200}}>
        <Text>This is the side</Text>
    </SideMenu>
)};

export default SidebarScreen;
