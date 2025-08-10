import s from './Calendar.module.scss'
import heart from '../../assets/img/heart_img.png'
let days = [{ date: 13, name: 'суббота' }, { date: 14, name: 'воскресенье' }, { date: 15, name: 'понедельник' }]
const Calendar = () => {
    return (
        <div className={s.calendar} data-aos='fade-up'>
            <p className={s.text}>save the date</p>
            <div className={s.days}>
                {days.map((day, i) => (
                    <div key={i} className={s.day}>
                        <div>
                            <span className={s.top__span}>{day.name}</span>
                        </div>
                        <div>
                            <p>{day.date}</p>
                            <span>сентября</span>
                        </div>
                    </div>
                ))
                }
                <div className={s.heart__img}>
                    <img src={heart} alt="" />
                </div>
            </div>
            <p className={s.year__text}>2025 года</p>
        </div>
    )
}

export default Calendar