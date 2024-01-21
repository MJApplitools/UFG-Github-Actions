import * as React from 'react';
import PropTypes from 'prop-types';
import "../styles/reset.css";
import "../styles/variables.css"
import "../styles/global.css"
import { useRouter } from 'next/router';


export default function MyApp(props) {
    const { Component, pageProps } = props;
    const router = useRouter();

    return (
        <>
            <Component key={router.asPath} {...pageProps} />
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
