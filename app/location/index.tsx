import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import * as Location from 'expo-location';
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LocationSetup() {
    const [permissionStatus, setPermissionStatus] = useState<Location.PermissionStatus | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [closestInstitution, setClosestInstitution] = useState<string | null>(null);
    const router = useRouter();

    const checkAndRequestPermission = async () => {
        try {
            // Check current permission status first
            const { status } = await Location.getForegroundPermissionsAsync();

            if (status === Location.PermissionStatus.GRANTED) {
                setPermissionStatus(status);
                await fetchClosestInstitution();
                return;
            }

            // Request permission if not granted
            const { status: newStatus } = await Location.requestForegroundPermissionsAsync();
            setPermissionStatus(newStatus);

            if (newStatus === Location.PermissionStatus.GRANTED) {
                await fetchClosestInstitution();
            } else {
                // Handle permission denied - maybe show an alert or different UI
                console.log("Permission denied");
            }
        } catch (error) {
            console.error("Error requesting location permission:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchClosestInstitution = async () => {
        try {
            const location = await Location.getCurrentPositionAsync({});
            // TODO: Implement logic to find closest institution based on location.coords
            // For now, hardcoded
            setClosestInstitution("University of Lagos");
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    };

    useEffect(() => {
        checkAndRequestPermission();
    }, []);

    if (isLoading) {
        return (
            <SafeAreaView className='flex-1 items-center justify-center bg-white'>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        );
    }

    if (permissionStatus !== Location.PermissionStatus.GRANTED) {
        return (
            <SafeAreaView className='flex-1 px-5 justify-center bg-white'>
                <Text className="text-center text-lg">
                    Location permission is required to find your nearest campus.
                </Text>
                <Button size="4xl" onPress={checkAndRequestPermission} className="mt-4">
                    <Text>Grant Permission</Text>
                </Button>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className='flex-1 px-5 flex justify-between bg-white'>
            <View className="flex-1 relative items-center justify-center">
                <View>
                    <Text className="max-w-[388px] mx-auto text-center text-[20px] font-light text-black">
                        We detected your closest campus as{" "}
                        <Text className="font-bold text-[20px] text-black">
                            {closestInstitution || "Loading..."}
                        </Text>
                        . Would you like to set this as your location or change it?
                    </Text>
                </View>
            </View>
            <View className="flex flex-col gap-2.5">
                <Button
                    size="4xl"
                    variant="outline"
                    onPress={() => router.replace("/location/map")}
                >
                    <Text>Change</Text>
                </Button>
                <Button
                    size="4xl"
                    onPress={() => router.replace("/rider")}
                >
                    <Text>Set Location</Text>
                </Button>
            </View>
        </SafeAreaView>
    );
}