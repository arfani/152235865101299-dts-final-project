import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

import {
    registerUser,
    logInUser,
    signInGoogle,
} from "../config/firebase"

export default function ({ mode }) {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const inputOnChangeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const loginHandler = (e) => {
        e.preventDefault()
        if(mode === "login"){
            logInUser(user.email, user.password)
        }else{
            registerUser(user.email, user.password)
        }
    }

    const loginGoogleHandler = (e) => {
        e.preventDefault()
        signInGoogle()
    }

    useEffect(
        () => {
            console.log(user);
        }, [user]
    )

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="form-wrapper w-80 shadow-lg h-fit rounded p-4 bg-pink-400 ">
                <div className="img-wrapper"></div>
                <div className="input-wrapper">
                    <h2 className="text-2xl mb-2 w-full text-center">Please {mode === 'login' ? 'Login' : 'Register'}</h2>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <input className="block w-full rounded p-1" type="email" name="email" value={user.email} onChange={inputOnChangeHandler} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password">Password</label>
                            <input className="block w-full rounded p-1" type="password" name="password" value={user.password} onChange={inputOnChangeHandler} />
                        </div>
                        <div className="flex items-end flex-col">
                            <button onClick={loginHandler} className="bg-blue-500 hover:bg-blue-600 hover:text-blue-100 font-semibold rounded px-4 py-1 w-fit text-white">{mode === 'login' ? 'Login' : 'Register'} <FontAwesomeIcon icon={faPaperPlane} /></button>
                            {mode === 'login' && <button onClick={loginGoogleHandler} className="bg-blue-500 hover:bg-blue-600 hover:text-blue-100 font-semibold rounded px-4 py-1 w-fit mt-2">Login Google <FontAwesomeIcon icon={faGoogle} /></button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}