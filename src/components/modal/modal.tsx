import s from './modal.module.css'
import {IUser} from "../../interfaces/user";
import {CrossIcon} from "../../icons/cross-icon";
import {useEffect} from "react";

type PropsType = {
    onClose: () => void
    user: IUser | null
}

export const Modal = ({onClose, user}: PropsType) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {document.body.style.overflow = ''}
    }, [])
    return (
        <div className={s.container} onClick={onClose}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <div className={s.titleContainer}>
                    <h2 className={s.userName}>{user?.name}</h2>
                    <CrossIcon onClose={onClose} />
                </div>

                <div className={s.mainInfo}>
                    <span>Телефон: </span>
                    <p>{user?.phone}</p>

                    <span>Почта: </span>
                    <p>{user?.email}</p>

                    <span>Дата приема: </span>
                    <p>{user?.hire_date}</p>

                    <span>Должность: </span>
                    <p>{user?.position_name}</p>

                    <span>Подразделение: </span>
                    <p>{user?.department}</p>
                </div>

                <div className={s.additionalInfo}>
                    <span>Дополнительная информация</span>
                    <p>Разработчики используют текст в качестве заполнителя макета страницы. Разработчики используют
                        текст в качестве заполнителя макета страницы.</p>
                </div>
            </div>
        </div>
    )
}