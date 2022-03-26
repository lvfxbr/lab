import { appWithTranslation } from "next-i18next";

import Nav from "../components/Nav";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
