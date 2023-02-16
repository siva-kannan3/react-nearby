import Select from "react-select";
import PropTypes from "prop-types";

import "./index.css";

export const SelectDropdown = (props) => {
    const { options, onChange } = props;

    return (
        <Select
            options={options}
            aria-label={"Choose category"}
            placeholder={"Choose category"}
            className="dropdown"
            isClearable
            isSearchable={false}
            onChange={onChange}
            data-testid={"dropdown"}
        />
    );
};

SelectDropdown.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};
