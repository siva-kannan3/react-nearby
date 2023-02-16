import Select from "react-select";
import PropTypes from "prop-types";

import "./index.css";

export const SelectDropdown = (props) => {
  const { options, onChange } = props;

  return (
    <Select
      options={options}
      aria-label={"Select category"}
      placeholder={"Choose category"}
      className="dropdown"
      isClearable
      isSearchable={false}
      onChange={onChange}
    />
  );
};

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onChange: PropTypes.func,
};
