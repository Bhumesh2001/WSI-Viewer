import React from "react";

const BoundingBox = ({ coords, zoom }) => {
    const [x1, y1, x2, y2, label] = coords;
    const width = (x2 - x1) * zoom;
    const height = (y2 - y1) * zoom;

    return (
        <div
            className="bounding-box"
            style={{
                left: x1 * zoom,
                top: y1 * zoom,
                width,
                height,
                position: "absolute",
                border: "2px solid red",
            }}
        >
            <span className="label">{label}</span>
        </div>
    );
};

export default BoundingBox;
