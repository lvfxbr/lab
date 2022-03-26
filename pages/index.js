import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styles from "../styles/Home.module.css";

export default function Home() {
    const { t } = useTranslation("common");

    return (
        <div className={styles.container}>
            <p>{t("message")}</p>
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
