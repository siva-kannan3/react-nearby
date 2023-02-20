import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

import { Marker } from "../";

export const MapsWidget = () => {
    const { latitude, longitude } = useSelector((state) => state.location);
    const { result } = useSelector((state) => state.places);

    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_PLACE_SEARCH_API_KEY,
            }}
            defaultZoom={1}
            center={{ lat: latitude, lng: longitude }}
        >
            {result.length > 0 &&
                result.map((mapEntry) => {
                    return (
                        <Marker
                            key={mapEntry.place_id}
                            lat={mapEntry.geometry.location.lat}
                            lng={mapEntry.geometry.location.lng}
                            text={mapEntry.name}
                        />
                    );
                })}
        </GoogleMapReact>
    );
};
