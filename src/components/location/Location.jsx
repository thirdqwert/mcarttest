import s from './Location.module.scss'
const Location = () => {
    return (
        <>
            <div className={s.location}>
                <div className={s.texts}>
                    <p>С нетерпением ждём вас к 18:00, чтобы вместе начать этот важный для нас вечер в ресторане “Santini” по адресу: </p>
                    <span>улица Каранкол, 88</span>
                </div>
                <a href="https://yandex.ru/maps/org/16569065793">открыть карту</a>
            </div>
        </>
    )
}

export default Location