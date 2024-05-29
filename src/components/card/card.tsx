import React from "react";
import s from './card.module.css'
import {IUser} from "../../interfaces/user";
import {PhoneIcon} from "../../icons/phone-icon";
import {EmailIcon} from "../../icons/email-icon";

type CardProps = {
    user: IUser
    onClick: (user: IUser) => void
}

export const Card = ({user, onClick}: CardProps) => {
    return (
        <div className={s.cardContainer} onClick={() => onClick(user)}>
            <h2 className={s.userName}>{user.name}</h2>
            <div className={s.userInfo}>
                <span>
                    <PhoneIcon className={s.phoneIcon}/>
                    {user.phone}
                </span>
                <span>
                    <EmailIcon  className={s.emailIcon}/>
                    {user.email}
                </span>
            </div>
        </div>
    )
}