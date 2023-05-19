import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}){
    return(
        <main>
             <h1>AuthPage</h1>
             <h2>Sign up</h2>
             <SignUpForm setUser={setUser}/>
            <h2>Login</h2>
             <LoginForm setUser={setUser} />
        </main>
       
    )
}