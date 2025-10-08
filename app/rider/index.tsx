import { View } from 'react-native';
import MapView from 'react-native-maps';



export default function RiderHome() {
    return (<View className='flex-1 bg-red-500'>
        <MapView style={{ width: "100%", height: "100%", padding: 0, margin: 0, flex: 1 }} />
    </View>)
}