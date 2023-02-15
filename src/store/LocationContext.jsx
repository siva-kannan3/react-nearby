import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DEFAULT_VALUE = {
  latitude: "",
  longitude: "",
  hasPermission: false,
};

const OPTIONS = {
  enableHighAccuracy: true,
  timeout: 10000,
};

const LocationContext = createContext(DEFAULT_VALUE);

export const useLocationContext = () => {
  return useContext(LocationContext);
};

export const UserLocationProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState({
    long: "",
    lati: "",
  });

  const [hasPermission, setPermission] = useState(false);

  const getLocationPermissions = useCallback(() => {
    navigator.permissions.query({ name: "geolocation" }).then(({ state }) => {
      if (state === "granted") {
        setPermission(true);
      } else {
        setPermission(false);
      }
    });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          long: position.coords.longitude,
          lati: position.coords.latitude,
        });
      },
      () => {
        setPermission(false);
      },
      OPTIONS
    );
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      getLocationPermissions();
    }
  }, [getLocationPermissions]);

  return (
    <LocationContext.Provider
      value={{
        hasPermission,
        coordinates: {
          longitude: coordinates.long,
          latitude: coordinates.lati,
        },
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
