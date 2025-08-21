import s from './Intro.module.scss'
import frame from '../../assets/img/header_bg.png'
import names from '../../assets/img/intor_names.svg'
import hands from '../../assets/img/hands.png'
import hands_video from '../../assets/img/video_hands.MOV'
const Intro = () => {
    return (
        <>
            <div className={s.intro}>
                <div className={s.intro__img}>
                    <img src={frame} alt="" />
                    <div className={s.intro__choose_lng}>
                        <p>РУС</p>
                        <p>EN</p>
                    </div>
                </div>
                <div className={s.intro__info}>
                    <div className={s.intro__names}>
                        <img src={names} alt="" />
                    </div>
                    <div className={s.intro__text}>
                        <p>скоро мы станем</p>
                        <span>семьей</span>
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