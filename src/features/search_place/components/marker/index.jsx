import PropTypes from "prop-types";

import "./index.css";

export const Marker = (props) => {
    const { color = "", name = "" } = props;
    return (
        <div className="marker">
            <div
                className="marker__pin"
                style={{ backgroundColor: color, cursor: "pointer" }}
                title={name}
                data-testid={"marker_pin"}
            />
            <div className="marker__pulse" />
        </div>
    );
};

Marker.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string,
};
