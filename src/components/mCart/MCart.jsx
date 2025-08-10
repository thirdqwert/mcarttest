import s from './MCart.module.scss'
import marrigaCart from '../../assets/img/cart.png'
const MCart = () => {
    return (
        <>
            <div className={s.marriage__cart} data-aos="fade-up">
                <img src={marrigaCart} alt="" />
            </div>
        </>
    )
}

export default MCart