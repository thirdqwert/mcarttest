import s from './Calendar.module.scss'
import heart from '../../assets/img/heart_img.png'
import { useTranslation } from 'react-i18next'
const Calendar = () => {
    const { t } = useTranslation()
    const days = [{ date: 13, name: t("saturday") }, { date: 14, name: t("sunday") }, { date: 15, name: t("monday") }]

    return (
        <div className={s.calendar}>
            <p className={s.text}>save the date</p>
            <div className={s.days}>
                {days.map((day, i) => (
                    <div key={i} className={s.day}>
                        <div>
                            <span className={s.top__span}>{day.name}</span>
                        </div>
                        <div>
                            <p>{day.date}</p>
                            <span>{t("september")}</span>
                        </div>
                    </div>
                ))
                }
                <div className={s.heart__img} >
                    <img src={heart} alt="" data-aos='zoom-in' data-aos-duration={800} />
                </div>
            </div>
            <p className={s.year__text}>2025 {t("year")}</p>
        </div>
    )
}

export default Calendar