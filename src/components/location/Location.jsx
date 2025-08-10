import s from './Location.module.scss'
const Location = () => {
    return (
        <>
            <div className={s.location} data-aos='fade-up'>
                <div className={s.texts}>
                    <p>С нетерпением ждём вас к 18:00, чтобы вместе начать этот <span style={{display:'inline'}}>важный</span> для нас вечер в ресторане “Santini” по адресу: </p>
                    <span>улица Каранкол, 88</span>
                </div>
                <a href="https://yandex.ru/maps/org/16569065793">открыть карту</a>
            </div>
        </>
    )
}

export default Location