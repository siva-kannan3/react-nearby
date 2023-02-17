import PropTypes from "prop-types";

import { Fallback } from "../fallback";

import "./index.css";

export const PlacesList = ({ places = [] }) => {
    if (!places.length) {
        return <Fallback message={"No data to display"} />;
    }
    return (
        <ul
            className="place-list place-list--reset"
            data-testid={"places-list"}
        >
            {places.map((mapEntry) => {
                return (
                    <li key={mapEntry.place_id} className="place-list__card">
                        <div className="place-list__card-info">
                            <span data-testid="place-list-card-name">
                                {mapEntry.name}
                            </span>
                            <span>⭐ {mapEntry.rating || 0}</span>
                        </div>
                        <div className="place-list__card-rating">
                            <span>
                                Total user ratings -{" "}
                                {mapEntry.user_ratings_total || 0}
                            </span>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

PlacesList.propTypes = {
    places: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            rating: PropTypes.number,
            user_ratings_total: PropTypes.number,
            place_id: PropTypes.string,
        })
    ),
};
