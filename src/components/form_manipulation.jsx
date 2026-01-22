export const LoginForm = ({ email, setEmail, password, setPassword}) => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log("Login: ", email, password);
    }
    return(
        <form onSubmit = {handleSubmit}>
            <input value ={email} onChange={e => setEmail(e.target.value)} placeholder = "Email"/>
            <input value = {password} onChange={e => setPassword(e.target.value)} placeholder = "password"/>
            <button>Login</button>
        </form>
    );
}