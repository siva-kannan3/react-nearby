import Select from "react-select";
import { useDispatch } from "react-redux";

import { CATEGORIES_LIST } from "../../helpers/constants";
import { getPlacesAsync, resetPlaces } from "../../store/NearbyPlacesSlice";
import { useLocationContext } from "../../store/LocationContext";

import "./index.css";

export const SelectDropdown = () => {
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
    <Select
      options={CATEGORIES_LIST}
      aria-label={"Select category"}
      className="dropdown"
      isClearable
      isSearchable={false}
      onChange={onCategoryChange}
    />
  );
};
