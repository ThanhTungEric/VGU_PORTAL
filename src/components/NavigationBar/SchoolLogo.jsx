import React from "react";
import PropTypes from "prop-types";
// @ts-ignore
import VGU_Logo from "../../assets/VGU_logo_long_cut.png";

export default function SchoolLogo({ navigator }) {
    return (
        <div
            style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                paddingTop: "8px",
                paddingBottom: "8px",
            }}
            onClick={() => navigator("/")}
        >
            <img src={VGU_Logo} alt="VGU Logo" className="logo" style={{ height: "48px" }} />
        </div>
    );
}
SchoolLogo.propTypes = {
    navigator: PropTypes.func.isRequired,
};
