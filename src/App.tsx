import React, {ChangeEvent, useEffect, useState} from 'react';
import {Card} from "./components/card/card";
import s from './App.module.css'
import {Search} from "./components/search/search";
import {IUser} from "./interfaces/user";
import {Modal} from "./components/modal/modal";

function App() {
    const [users, setUsers] = useState([])
    const [termSearchParam, setTermSearchParam] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTermSearchParam(e.currentTarget.value)
    }

    const onUserClickHandler = (user: IUser) => {
        setSelectedUser(user)
        setIsOpen(true)
    }

    const closeModal = () => {
        setSelectedUser(null)
        setIsOpen(false)
    }

    const fetchData = async () => {
        try {
            const url = termSearchParam ? `http://localhost:3000?term=${termSearchParam}` : 'http://localhost:3000'
            const response = await fetch(url)
            const users = await response.json()
            setUsers(users)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [termSearchParam])

  return (
    <div className="App">
        <div className={s.searchInputContainer}>
            <Search
                value={termSearchParam}
                onChange={onChangeHandler}
                onSearchClick={fetchData}
            />
        </div>
        <div className={s.cardContainer}>
            {users.map((user: IUser, index) => <Card key={index} user={user} onClick={onUserClickHandler}/>
            )}
        </div>
        {isOpen && <Modal user={selectedUser} onClose={closeModal}/>}
    </div>
  );
}

export default App;


