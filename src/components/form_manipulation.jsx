import {useState} from 'react';
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        
        if(!email){
            newErrors.email = "Email is required"; 
            isValid = false;
        }else if(!email.includes('@')){
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if(!password){
            newErrors.password = "Password is required";
            isValid = false;
        }else if(password.length<6){
            newErrors.password = 'Please enter a Password of length 6';
            isValid = false;
        }
        setError(newErrors);
        return isValid;
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(validateForm()){
            console.log("Login Success", email, password);
        setError({});
        }
    }

    return(
        <form onSubmit = {handleSubmit}>
            <div style={{marginBottom: "10px"}}>
            <input value ={email} onChange={e => setEmail(e.target.value)} placeholder = "Email"
            style={{borderColor: error.email? 'red': 'initial'}}/>
            </div>
            <div style={{marginBottom: "10px"}}>
            <input value = {password} onChange={e => setPassword(e.target.value)} placeholder = "password"
            style={{borderColor: error.password? 'red': 'initial'}}/>
            </div>
            <button type="submit">Login</button>
        </form>
    );
}