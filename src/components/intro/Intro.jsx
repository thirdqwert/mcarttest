import s from './Intro.module.scss'
import frame from '../../assets/img/header_bg.png'
import names from '../../assets/img/intor_names.svg'
import names_en from '../../assets/img/names_en.png'
// import hands from '../../assets/img/hands.png'
import hands_video from '../../assets/img/video_hands.MOV'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
const Intro = () => {
    const { i18n, t } = useTranslation()
    const [currentLng, setCurrentLng] = useState('ru')
    const changeLng = (lng) => {
        i18n.changeLanguage(lng).then(() => {
            setCurrentLng(lng)
        });
    }
    return (
        <>
            <div className={s.intro}>
                <div className={s.intro__img}>
                    <img src={frame} alt="" />
                    <div className={s.intro__choose_lng}>
                        <p onClick={() => changeLng('ru')} style={{ color: currentLng == 'ru' ? 'red' : 'black' }}>РУС</p>
                        <p onClick={() => changeLng('en')} style={{ color: currentLng == 'en' ? 'red' : 'black' }}>EN</p>
                    </div>
                </div>
                <div className={s.intro__info}>
                    <div className={s.intro__names}>
                        <img src={currentLng == 'ru' ? names : names_en} alt="" />
                    </div>
                    <div className={s.intro__text}>
                        <p>{t("Soon, we will become a")}</p>
                        <span>{t("family")}</span>
                    </div>
                </div>
                <div className={s.intro__hands}>
                    {/* <img src={hands} alt="" /> */}
                    <video src={hands_video} autoPlay={true} muted></video>
                </div>
            </div>
        </>
    )
}

export default Intro