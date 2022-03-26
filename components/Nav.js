import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Link from "next/link";
import TLink from "./TLink";

import { useRouter } from "next/router";

export default function Nav() {
    const router = useRouter();
    const currentLocale = router.locale;
    const { t } = useTranslation("common");

    let locales = [
        {
            value: "ptbr",
            label: "PTBR",
        },
        {
            value: "en",
            label: "EN",
        },
    ];

    const currentLocaleOption = locales.find(
        (locale) => locale.value === currentLocale
    );

    locales = locales.filter((locale) => locale.value !== currentLocale);

    function handleChangeLocale(event) {
        router.push("/", undefined, {
            locale: event.target.value,
        });
    }

    return (
        <nav>
            <ul>
                <li>Current locale: {currentLocale}</li>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link
                        href="/[about]"
                        query={{ about: t("about").toLowerCase() }}
                        as={`/${t("about").toLowerCase()}`}
                    >
                        <a>{t("about")}</a>
                    </Link>
                    <TLink text={t("about")} />
                </li>
                <li>
                    <select
                        onChange={handleChangeLocale}
                        value={currentLocaleOption.value}
                    >
                        <option value={currentLocaleOption.value} disabled>
                            {currentLocaleOption.label}
                        </option>

                        {locales.map((locale) => (
                            <option key={locale.value} value={locale.value}>
                                {locale.label}
                            </option>
                        ))}
                    </select>
                </li>
            </ul>
        </nav>
    );
}

export const getStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
};
