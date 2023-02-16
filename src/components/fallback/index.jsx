import PropTypes from "prop-types";

import "./index.css";

import fallbackLogo from "./icon.svg";

export const Fallback = (props) => {
    const { message } = props;

    return (
        <div className="fallback">
            <img
                src={fallbackLogo}
                alt="Fallback error"
                width={64}
                height={64}
            />
            <h2>{message}</h2>
        </div>
    );
};

Fallback.propTypes = {
    message: PropTypes.string,
};
