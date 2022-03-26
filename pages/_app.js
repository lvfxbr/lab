import { appWithTranslation } from "next-i18next";

import Nav from "../components/Nav";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const { _nextI18Next } = pageProps;

    return (
        <>
            {/*
                the instance of i18next is needed in Nav component to stop the warning of react-i18next and make it work properly
                here is the warning raised:

                react-i18next:: You will need to pass in an i18next instance by using initReactI18next
            */}
            <Nav _nextI18Next />
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
