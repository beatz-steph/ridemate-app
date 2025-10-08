import UberStyleMap from '@/components/general/map';
import { DraggableRideHistory } from '@/components/rider/home/draggable-ride-history';
import React, { useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const instant_ride_image = require('@/assets/images/rider/instant-ride.png')
const scheduled_ride_image = require('@/assets/images/rider/scheduled-ride.png')




const RiderHomeScreen = () => {
    const [region] = useState({
        latitude: 6.5244,
        longitude: 3.3792,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    return (
        <GestureHandlerRootView className="flex-1">
            <View className="flex-1 bg-black relative">
                {/* Map Background */}
                <View className='inset-0'>

                    <UberStyleMap region={region} />
                </View>

                {/* Floating Cards Section */}
                <View className="absolute top-20 left-5 right-5">


                    <View className="flex-row gap-4">
                        {/* Book Instant Ride Card */}
                        <TouchableOpacity className="flex-1 bg-[#7D1515] rounded-3xl p-5 h-48 justify-between">
                            <Text className="text-2xl font-bold text-white leading-7">
                                Book Instant{'\n'}Ride
                            </Text>
                            <Image
                                source={instant_ride_image}
                                className="w-full h-20"
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        {/* Schedule Ride Card */}
                        <TouchableOpacity className="flex-1 bg-gray-200 rounded-3xl p-5 h-48 justify-between">
                            <Text className="text-2xl font-bold text-gray-800 leading-7">
                                Schedule{'\n'}Ride
                            </Text>
                            <Image
                                source={scheduled_ride_image}
                                className="w-full h-20"
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Draggable ride history */}
                <DraggableRideHistory />

            </View>
        </GestureHandlerRootView>
    );
};

export default RiderHomeScreen;