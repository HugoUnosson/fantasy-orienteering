import { NavLink } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="">
            <form className="mt-24 p-4 rounded max-w-lg mx-auto bg-slate-900">
                <h2>Sign up today!</h2>
                <p>
                    Already have an account? <NavLink to="/singin" className="text-primary">Sign in!</NavLink>
                </p>
                <div className="flex flex-col">
                    <input placeholder="Email" className="bg-slate-800 p-3 mt-6 rounded focus:outline-3 focus:outline-primary"></input>
                    <input placeholder="Password" className="bg-slate-800 p-3 mt-6 rounded focus:outline-3 focus:outline-primary"></input>
                    <button type="submit" className="bg-slate-800 p-3 mt-6 rounded hover:cursor-pointer hover:bg-primary">Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;