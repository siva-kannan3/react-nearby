import { useSelector } from "react-redux";
import { Fallback } from "../fallback";

import "./index.css";

export const PlacesList = () => {
    const { result } = useSelector((state) => state.places);

    if (!result.length) {
        return <Fallback message={"No data to display"} />;
    }
    return (
        <div className="place-list">
            {result.map((mapEntry) => {
                return (
                    <div key={mapEntry.place_id} className="place-list__card">
                        <div className="place-list__card-info">
                            <span>{mapEntry.name}</span>
                            <span>⭐ {mapEntry.rating || 0}</span>
                        </div>
                        <div className="place-list__card-rating">
                            <span>
                                Total user ratings -{" "}
                                {mapEntry.user_ratings_total || 0}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
