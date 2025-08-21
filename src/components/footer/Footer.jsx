// import rings from '../../assets/img/rings.png'
import s from './Footer.module.scss'
import frame from '../../assets/img/footer_img.png'
// import branch_img from '../../assets/img/vetka.png'
import humans from '../../assets/img/footer_human.png'
import text_img from '../../assets/img/footer_text.png'
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const { i18n, t } = useTranslation()

    return (
        <>
            <footer>
                <div className={s.info} style={{ marginBottom: i18n.language == 'en' ? '-76%' : '-60%' }}>
                    <div className={s.texts}>
                        <p>{t("footer_longText")}</p>
                        <span>{t("footer_shortText")}</span>
                    </div>
                    <div className={s.main_image}>
                        <img src={humans} alt="" />
                    </div>

                    {i18n.language == 'en' &&
                        (
                            <div className={s.text_image}>
                                <img src={text_img} alt="" />
                            </div>
                        )
                    }
                </div>
                {/* <div className={s.branch}>
                    <img src={branch_img} alt="" />
                </div> */}
                <img className={s.frame__img} src={frame} alt="" />
            </footer>
        </>
    )
}

export default Footer