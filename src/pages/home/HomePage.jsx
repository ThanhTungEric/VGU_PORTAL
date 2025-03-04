// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function Home({ name }) {
    return <div>Hello {name}</div>;
}
Home.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Home;
