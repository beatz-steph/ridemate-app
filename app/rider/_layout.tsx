import { Tabs } from "expo-router";

export default function RiderLayout() {

    return (<Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false, title: "Home" }} />
        <Tabs.Screen name="rides" options={{ headerShown: false, title: "Rides" }} />
        <Tabs.Screen name="profile" options={{ headerShown: false, title: "Profile" }} />
    </Tabs>)
}