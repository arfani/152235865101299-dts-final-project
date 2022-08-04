import classNames from "classnames"
import { useEffect, useState } from "react"
import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from "react-router-dom"

export default function (props) {
    const [userTogle, setUserTogle] = useState(false)
    const [user] = useAuthState(auth)

    const userDropdownStylesStatic = 'z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
    let userDropdownStyles = classNames(userDropdownStylesStatic, props.className, {
        'block': userTogle,
        'hidden': !userTogle
    })
    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex items-center">
                        {/* <img src="#" className="mr-3 h-6 sm:h-9" alt="Logo" /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Muslim App</span>
                    </a>
                    <div className="flex items-center md:order-2">
                        <div className="mr-2">Hii, { user?.displayName ?? "there"}</div>
                        <button onClick={() => setUserTogle(!userTogle)} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            { user?.photoURL && <img referrerPolicy="no-referrer" className="w-8 h-8 rounded-full" src={user.photoURL} alt="user pic" />}
                        </button>
                        <div className={userDropdownStyles} id="user-dropdown" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(710px, 82px)' }} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                            <div className="py-3 px-4">
                                <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName ?? "Hi there"}</span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email ?? "Not Logged in"}</span>
                            </div>
                            {/* <ul className="py-1" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul> */}
                        </div>
                        {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button> */}
                    </div>
                    {/* <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>

            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="py-3 mx-auto max-w-screen-xl">
                    <div className="flex items-center ml-3">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <Link to="/" className="text-gray-900 dark:text-white hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link to="/quran" className="text-gray-900 dark:text-white hover:underline">Al Qur'an</Link>
                            </li>
                            <li>
                                <Link to="/jadwalsholat" className="text-gray-900 dark:text-white hover:underline">Jadwal Sholat</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}