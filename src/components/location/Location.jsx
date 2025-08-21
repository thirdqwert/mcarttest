import { useTranslation } from 'react-i18next'
import s from './Location.module.scss'
const Location = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={s.location}>
                <div className={s.texts}>
                    <p>{t("location_longText")}</p>
                    <span>{t("location_shortText")}</span>
                </div>
                <a href="https://yandex.ru/maps/org/16569065793">{t("open_map")}</a>
            </div>
        </>
    )
}

export default Location