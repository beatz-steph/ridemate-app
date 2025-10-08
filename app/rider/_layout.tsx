import { HomeSvg, HomeSvgActive } from "@/assets/svgs/navigation/home";
import { ProfileSvg, ProfileSvgActive } from "@/assets/svgs/navigation/profile";
import { RidesSvg, RidesSvgActive } from "@/assets/svgs/navigation/rides";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function RiderLayout() {

    return (<Tabs screenOptions={{ tabBarActiveTintColor: "#7A0000", tabBarStyle: { "borderTopWidth": 0, paddingTop: 20, paddingBottom: 20, height: 100 }, tabBarLabelStyle: { "fontSize": 15, marginTop: 10 } }} >

        <Tabs.Screen name="index" options={{ headerShown: false, title: "Home", tabBarIcon: ({ focused }) => focused ? <HomeSvgActive /> : <HomeSvg /> }} />

        <Tabs.Screen name="rides" options={{ headerShown: false, title: "Rides", tabBarIcon: ({ focused }) => focused ? <RidesSvgActive /> : <RidesSvg /> }} />

        <Tabs.Screen name="profile" options={{ headerShown: false, title: "Profile", tabBarIcon: ({ focused }) => <View> {focused ? <ProfileSvgActive /> : <ProfileSvg />} </View> }} />
    </Tabs>)
}