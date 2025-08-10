import Marquee from "react-fast-marquee";
import s from './TextSlide.module.scss'

const TextSlide = () => {

    return (
        <>
            <div data-aos="fade-up">
                <div className={s.texts} >
                    <Marquee direction="right" autoFill={true} className={s.text}>
                        <p className={s.text}>I love you Ti amo Ich liebe dich Je t’aime</p>

                    </Marquee>
                    <Marquee direction="right" autoFill={true} className={s.text}>
                        <p className={s.text}>Men seni sevaman Я тебя люблю Te quiero</p>
                    </Marquee>
                </div>
            </div>

        </>
    );
}

export default TextSlide