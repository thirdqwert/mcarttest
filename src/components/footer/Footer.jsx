import rings from '../../assets/img/rings.png'
import s from './Footer.module.scss'
import frame from '../../assets/img/footer_img.png'
const Footer = () => {
    return (
        <>
            <footer >
                <div className={s.rings} data-aos='fade-up'>
                    <img src={rings} alt="" />
                </div>

                <div className={s.frame} data-aos='fade-up'>
                    <div className={s.texts}>
                        <p>Пожалуйста, дайте нам знать, что вы с нами в этот день. Будет <span>очень приятно,</span> если вы отправите кружочек в Telegram
                            со словами:  </p>
                        <h2>“Готов(а) к вашей свадьбе!”</h2>
                    </div>
                    <img src={frame} alt="" />
                </div>
            </footer>
        </>
    )
}

export default Footer