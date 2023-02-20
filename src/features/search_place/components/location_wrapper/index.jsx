import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { updatePermission, updateCoordinates } from "../../index";

const OPTIONS = {
    enableHighAccuracy: true,
    timeout: 10000,
};

export const UserLocationWrapper = ({ children }) => {
    const dispatch = useDispatch();

    const getLocationPermissions = () => {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(({ state }) => {
                if (state === "granted") {
                    dispatch(updatePermission(true));
                } else {
                    dispatch(updatePermission(false));
                }
            });
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(
                    updateCoordinates({
                        longitude: position.coords.longitude,
                        latitude: position.coords.latitude,
                    })
                );
                dispatch(updatePermission(true));
            },
            () => {
                dispatch(updatePermission(false));
            },
            OPTIONS
        );
    };

    useEffect(() => {
        if (navigator.geolocation) {
            getLocationPermissions();
        }
    }, []);

    return <>{children}</>;
};
