import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function ({ mode }) {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="form-wrapper w-80 shadow-lg h-fit rounded p-4 bg-pink-400 ">
                <div className="img-wrapper"></div>
                <div className="input-wrapper">
                    <h2 className="text-2xl mb-2 w-full text-center">Please {mode === 'login' ? 'Login' : 'Register'}</h2>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <input className="block w-full rounded p-1" type="email" name="email" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password">Password</label>
                            <input className="block w-full rounded p-1" type="password" name="password" />
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-blue-500 hover:bg-blue-600 hover:text-blue-100 font-semibold rounded px-4 py-1">{mode === 'login' ? 'Login' : 'Register'} <FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}