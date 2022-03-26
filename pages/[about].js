import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
    const { t } = useTranslation("common");

    return (
        <div>
            <h1>{t("aboutTitle")}</h1>
        </div>
    );
}

export const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};

export const getStaticPaths = async ({ locales, defaultLocale }) => {
    let paths = [];

    locales.map((locale) => {
        const common = require(`../public/locales/${locale}/common.json`);

        if (locale == defaultLocale) {
            paths.push(`/${common.about.toLowerCase()}`);
        } else {
            paths.push(`/${locale}/${common.about.toLowerCase()}`);
        }
    });

    return {
        paths,
        fallback: false,
    };
};
