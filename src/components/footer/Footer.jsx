// import rings from '../../assets/img/rings.png'
import s from './Footer.module.scss'
import frame from '../../assets/img/footer_img.png'
import branch_img from '../../assets/img/vetka.png'
import humans from '../../assets/img/footer_human.png'
const Footer = () => {
    return (
        <>
            <footer>
                <div className={s.info}>
                    <div className={s.texts}>
                        <p>Будем счастливы разделить этот день</p>
                        <span>с вами</span>
                    </div>
                    <div className={s.image}>
                        <img src={humans} alt="" />
                    </div>
                </div>
                <img className={s.branch} src={branch_img} alt="" />
                <img className={s.frame__img} src={frame} alt="" />
            </footer>
        </>
    )
}

export default Footer