import "./index.css";

export const Marker = (props) => {
    const { color, name } = props;
    return (
        <div className="marker">
            <div
                className="marker__pin"
                style={{ backgroundColor: color, cursor: "pointer" }}
                title={name}
            />
            <div className="marker__pulse" />
        </div>
    );
};
