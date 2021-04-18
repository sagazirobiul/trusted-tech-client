import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
    return (
        <Loader
        type="Grid"
        color="#263179"
        height={90}
        width={90}
      />
    );
};

export default Spinner;