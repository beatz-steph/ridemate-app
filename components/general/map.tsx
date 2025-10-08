import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { MapStyleElement, PROVIDER_GOOGLE } from 'react-native-maps';

type Region = {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
}

const UberStyleMap = ({ region }: {
    region: Region
}) => {
    // Custom map style (Uber/Bolt minimalist style)
    const customMapStyle: MapStyleElement[] = [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ lightness: 100 }, { visibility: "simplified" }]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "simplified" }]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9e6f7" }]
        },
        {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5f5f5" }]
        },
        {
            featureType: "administrative",
            elementType: "labels",
            stylers: [{ visibility: "simplified" }]
        }
    ];

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={region}
            showsUserLocation
            showsMyLocationButton={false}
            showsCompass={false}
            showsTraffic={false}
            showsIndoors={false}
            customMapStyle={customMapStyle}
            toolbarEnabled={false}
            rotateEnabled={true}
            pitchEnabled={false}
        />
    );
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});

export default UberStyleMap;