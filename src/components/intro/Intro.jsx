import s from './Intro.module.scss'
import frame from '../../assets/img/header_bg.png'
import names from '../../assets/img/intor_names.svg'
import hands from '../../assets/img/hands.png'
const Intro = () => {
    return (
        <>
            <div className={s.intro}>
                <div className={s.intro__img}>
                    <img src={frame} alt="" />
                </div>
                <div className={s.intro__info} data-aos="fade-up">
                    <div className={s.intro__names}>
                        <img src={names} alt="" />
                    </div>
                    <div className={s.intro__text}>
                        <p>скоро мы станем</p>
                        <span>семьей</span>
                    </div>
                </div>
                <div className={s.intro__hands} data-aos="fade-up">
                    <img src={hands} alt="" />
                </div>
            </div>
        </>
    )
}

export default Intro