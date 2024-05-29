import s from './search.module.css'
import {SearchIcon} from "../../icons/search-icon";
import {ChangeEvent} from "react";

type PropsType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSearchClick: () => void
}

export const Search = ({value, onChange, onSearchClick}: PropsType) => {
    return (
        <div className={s.container}>
            <input
                type="search"
                value={value}
                onChange={onChange}
                className={s.searchInput}/>
            <SearchIcon className={s.searchIcon} onClick={onSearchClick}/>
        </div>
    )
}