export default function Login() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="form-wrapper w-72 shadow-lg h-fit rounded p-4 bg-pink-400 ">
                <div className="img-wrapper"></div>
                <div className="input-wrapper">
                    <h2 className="text-2xl mb-2">Please Login</h2>
                <form>
                    <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input className="block w-full rounded p-1" type="email" name="email" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input className="block w-full" type="password" name="password"/>
                    </div>
                    <button className="bg-blue-500 rounded px-2 py-1">submit</button>
                </form>
                </div>
            </div>
        </div>
    )
}