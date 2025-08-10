import { useEffect, useState } from 'react';
import s from './Timer.module.scss'
const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(false);

    useEffect(() => {
        const targetDate = new Date("2025-09-10T00:00:00");

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;
            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({finished: true});
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className={s.timer} data-aos="fade-up">
                <div className={s.timer__content}>
                    {timeLeft.finished ?
                    (<p>Тугади</p>) 
                    :
                    (
                        <>
                        <div className={s.timer__col}>
                            <p>{timeLeft == false ? '00' : timeLeft.days >= 10 ? timeLeft.days : `0${timeLeft.days}` }</p>
                            <span>дней</span>
                        </div>
                        <p>:</p>
                        <div className={s.timer__col}>
                            <p>{timeLeft == false ? '00' : timeLeft.hours >= 10 ? timeLeft.hours : `0${timeLeft.hours}` }</p>
                            <span>часов</span>
                        </div>
                        <p>:</p>
                        <div className={s.timer__col}>
                            <p>{timeLeft == false ? '00' : timeLeft.minutes >= 10 ? timeLeft.minutes : `0${timeLeft.minutes}` }</p>
                            <span>минут</span>
                        </div>
                        <p>:</p>
                        <div className={s.timer__col}>
                            <p>{timeLeft == false ? '00' : timeLeft.seconds >= 10 ? timeLeft.seconds : `0${timeLeft.seconds}` }</p>
                            <span>cекунд</span>
                        </div>
                        </>
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default Timer