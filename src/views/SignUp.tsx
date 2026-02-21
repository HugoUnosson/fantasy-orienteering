import { NavLink } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="">
            <form className="mt-24 p-4 rounded max-w-lg mx-auto bg-slate-900">
                <h2 className="font-bold text-xl">Create account</h2>
                <p>Already have an account? <NavLink to="/singin" className="text-primary underline">Log in here</NavLink></p>
                <div className="flex flex-col mt-6 gap-6">
                    <div className="flex gap-2">
                        <button className="bg-slate-800 border border-slate-700 font-semibold p-3 rounded hover:cursor-pointer hover:bg-primary transition-all">G</button>
                        <button className="bg-slate-800 border border-slate-700 font-semibold p-3 rounded hover:cursor-pointer hover:bg-primary transition-all">B</button>
                        <button className="bg-slate-800 border border-slate-700 font-semibold p-3 rounded hover:cursor-pointer hover:bg-primary transition-all">C</button>
                    </div>
                    <p>or</p>
                    <input placeholder="Email" className="bg-slate-800 p-3 rounded focus:outline-3 focus:outline-primary"></input>
                    <input placeholder="Password" className="bg-slate-800 p-3 rounded focus:outline-3 focus:outline-primary"></input>
                    <button type="submit" className="bg-slate-800 font-semibold p-3 rounded border border-slate-700 hover:cursor-pointer hover:bg-primary transition-all">Create account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;