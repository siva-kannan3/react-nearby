import { SelectDropdown } from "../select";
import { useDispatch } from "react-redux";

import { CATEGORIES_LIST } from "../../helpers/constants";
import { getPlacesAsync, resetPlaces } from "../../store/NearbyPlacesSlice";
import { useLocationContext } from "../../store/LocationContext";

import "./index.css";

import logo from "./logo.svg";

export const Header = () => {
    const dispatch = useDispatch();
    const { latitude, longitude } = useLocationContext();

    const onCategoryChange = (selectedValue) => {
        if (selectedValue) {
            dispatch(
                getPlacesAsync({
                    location: `${latitude},${longitude}`,
                    radius: 5000,
                    type: selectedValue.value,
                    key: process.env.REACT_APP_GOOGLE_PLACE_SEARCH_API_KEY,
                })
            );
        } else {
            dispatch(resetPlaces());
        }
    };

    return (
        <div className="header">
            <img
                src={logo}
                alt="BrowserStack's logo"
                width={48}
                height={48}
                data-testid="logo"
            />
            <div className="header__dropdown">
                <SelectDropdown
                    options={CATEGORIES_LIST}
                    onChange={onCategoryChange}
                />
            </div>
            <div className="header__profile">AG</div>
        </div>
    );
};
