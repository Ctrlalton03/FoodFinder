import '../Css/GamePage.css';
import { useState } from "react";

function ResturantList ({ selectedFood, userLocation  }) {

    const [resturants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const apiKey = "AIzaSyCrPg8mp6zyogXyi8dHhwmODopDYxAh4dg";

    const fetchRestuarants = async () => {
        setLoading(true) // this will set the loading state to true and show the loading spinner
        setError(""); // reset any previous errors

        const url = "https://places.googleapis.com/v1/places:searchText";
        

        const body = {
            textQuery: `${selectedFood.name} restaurants `,
            locationBias: {
                circle:{
                    center: {
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude
                    },
                    radius: 5000 // Searchs 5km radius
                }
            }
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": apiKey,
                    "X-Goog-FieldMask": "places.displayName,places.formattedAddress,places.rating,places.photos"
                },
                body: JSON.stringify(body)
            });

            if (!response.ok){
                throw new Error("Failed to fetch restaurants");
            }

            const data = await response.json();
            setRestaurants(data.places || []);
            setCurrentIndex(0);
        } catch (error) {
            setError(error.message);    
        } finally {
            setLoading(false); // Set loading to false after the fetch is complete
        }
    }

    const visibleRestaurants = resturants.slice(currentIndex, currentIndex + 1);

    return (
        <div>
            <h2>Nearby Restaurants Serving {selectedFood?.name}</h2>
            <button onClick={fetchRestuarants} disabled={loading}>
                {loading ? "Searching for restaurants..." : "Search for restaurants"}
            </button>
            {error && <p className="error">{error}</p>}
            <div className="restaurant-list-wrapper">
                <button
                    onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
                    disabled={currentIndex === 0 || loading}
                    style={{ height: '100%' }}
                >
                    ◀
                </button>
                <ul className="restaurant-list-container">
                    {visibleRestaurants.map((restaurant) => {
                        const photoReference = restaurant.photos?.[0]?.name;
                        const photoUrl = photoReference
                            ? `https://places.googleapis.com/v1/${photoReference}/media?maxWidthPx=400&key=${apiKey}`
                            : "https://via.placeholder.com/150";
                        return (
                            <li key={restaurant.placeId || restaurant.id} className="restaurant-item">
                                <img src={photoUrl} alt={restaurant.displayName?.text || "Restaurant"} className="restaurant-image" />
                                <h3>{restaurant.displayName?.text}</h3>
                                <p>{restaurant.formattedAddress}</p>
                                <p className='Restaurant-Rating'>Rating: {restaurant.rating}</p>
                            </li>
                        );
                    })}
                </ul>
                <button
                    onClick={() => setCurrentIndex(i => Math.min(i + 1, resturants.length - 1))}
                    disabled={currentIndex >= resturants.length - 1 || loading}
                    style={{ height: '100%' }}
                >
                    ▶
                </button>
            </div>
        </div>
    );
}

export default ResturantList;
// This component fetches and displays a list of restaurants based on the selected food and user's location