import { useState, useEffect } from "react";

export const useGeolocation = () => {
    const [location, setLocation] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by this browser.");
            return;
        }

        setLoading(true);
        setLocationError(null);

        const successFunction = (position) => {
            setLocation(position.coords);
            setLoading(false);
        };

        const errorFunction = (error) => {
            let errorMessage = "Unable to retrieve your location.";
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "Location access denied by user.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "Location request timed out.";
                    break;
                default:
                    errorMessage = "An unknown error occurred.";
                    break;
            }
            setLocationError(errorMessage);
            setLoading(false);
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 300000
        };

        navigator.geolocation.getCurrentPosition(successFunction, errorFunction, options);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return { 
        location, 
        locationError, 
        loading, 
        getCurrentLocation
    };
};


