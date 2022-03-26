import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
    const { t } = useTranslation("common");

    const router = useRouter();

    return (
        <div className={styles.container}>
            <p>Current locale: {router.locale}</p>
            <p>{t("message")}</p>
            <Link href="/" locale={router.locale === "pt-br" ? "en" : "pt-br"}>
                <button>Switch locale</button>
            </Link>
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
