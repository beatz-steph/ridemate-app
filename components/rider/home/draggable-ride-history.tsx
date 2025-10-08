import React from 'react';
import {
    Dimensions,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MIN_DRAWER_HEIGHT = 150;
const MAX_DRAWER_HEIGHT = SCREEN_HEIGHT - 150;


export const DraggableRideHistory = () => {

    const translateY = useSharedValue(0);


    const panGesture = Gesture.Pan()
        .onStart(() => {
            // Store the current value when gesture starts
        })
        .onUpdate((event) => {
            const newValue = event.translationY;
            // Clamp the values
            if (newValue > 0) {
                translateY.value = 0;
            } else if (newValue < -(MAX_DRAWER_HEIGHT - MIN_DRAWER_HEIGHT)) {
                translateY.value = -(MAX_DRAWER_HEIGHT - MIN_DRAWER_HEIGHT);
            } else {
                translateY.value = newValue;
            }
        })
        .onEnd((event) => {
            // Snap to positions based on velocity and position
            if (event.velocityY > 500) {
                // Fast swipe down - minimize
                translateY.value = withSpring(0, {
                    damping: 50,
                    stiffness: 400,
                });
            } else if (event.velocityY < -500) {
                // Fast swipe up - maximize
                translateY.value = withSpring(-(MAX_DRAWER_HEIGHT - MIN_DRAWER_HEIGHT), {
                    damping: 50,
                    stiffness: 400,
                });
            } else {
                // Snap to nearest position
                if (translateY.value > -(MAX_DRAWER_HEIGHT - MIN_DRAWER_HEIGHT) / 2) {
                    translateY.value = withSpring(0, {
                        damping: 50,
                        stiffness: 400,
                    });
                } else {
                    translateY.value = withSpring(-(MAX_DRAWER_HEIGHT - MIN_DRAWER_HEIGHT), {
                        damping: 50,
                        stiffness: 400,
                    });
                }
            }
        });

    const animatedStyle = useAnimatedStyle(() => {
        const height = interpolate(
            translateY.value,
            [-(MAX_DRAWER_HEIGHT - MIN_DRAWER_HEIGHT), 0],
            [MAX_DRAWER_HEIGHT, MIN_DRAWER_HEIGHT],
            Extrapolate.CLAMP
        );

        return {
            height,
            transform: [{ translateY: 0 }],
        };
    });

    const recentRides = [
        {
            id: 1,
            address: '20, Abule Str, Iyana Close',
            date: 'July 9',
            time: '12:35 PM',
            price: '₦4,000',
        },
        {
            id: 2,
            address: '20, Ikorodu Bus stop, Iyana Close',
            date: 'July 10',
            time: '12:35 PM',
            price: '₦10,000',
        },
        {
            id: 3,
            address: '20, Abule Str, Iyana Close',
            date: 'July 11',
            time: '1:20 PM',
            price: '₦5,500',
        },
        {
            id: 4,
            address: '15, Lagos Street, Victoria Island',
            date: 'July 12',
            time: '3:45 PM',
            price: '₦7,200',
        },
        {
            id: 5,
            address: '8, Allen Avenue, Ikeja',
            date: 'July 13',
            time: '9:15 AM',
            price: '₦6,800',
        },
    ];
    return (
        <>
            {/* Draggable Ride History Section */}
            <GestureDetector gesture={panGesture}>
                <Animated.View
                    className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[30px] shadow-2xl"
                    style={animatedStyle}
                >
                    {/* Drawer Handle */}
                    <View className="items-center py-3">
                        <View className="w-10 h-1 bg-gray-300 rounded-full" />
                    </View>

                    {/* Header */}
                    <View className="flex-row justify-between items-center px-5 py-2">
                        <Text className="text-xl font-bold text-black">Recent Rides</Text>
                        <TouchableOpacity>
                            <Text className="text-sm text-[#8B0000] underline">
                                View History
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Rides List */}
                    <ScrollView
                        className="flex-1 px-5"
                        showsVerticalScrollIndicator={false}
                    >
                        {recentRides.map((ride) => (
                            <View
                                key={ride.id}
                                className="flex-row items-center py-4 border-b border-gray-100"
                            >
                                {/* Avatar Placeholder */}
                                <View className="w-12 h-12 rounded-full bg-gray-300 mr-4" />

                                {/* Ride Details */}
                                <View className="flex-1">
                                    <Text className="text-base font-semibold text-black mb-1">
                                        {ride.address}
                                    </Text>
                                    <Text className="text-sm text-gray-600 mb-1">
                                        {ride.date} • {ride.time}
                                    </Text>
                                    <Text className="text-sm text-gray-600">{ride.price}</Text>
                                </View>

                                {/* Repeat Button */}
                                <TouchableOpacity className="w-10 h-10 justify-center items-center">
                                    <Text className="text-3xl text-black">↻</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </Animated.View>
            </GestureDetector>
        </>
    )
}
