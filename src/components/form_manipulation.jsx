import {useForm} from 'react-hook-form';
export const LoginForm = () => {

    const {register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = (data) =>{
        console.log("successfully LoggedIN", data.email, data.password);
    }

    return(
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div style={{marginBottom: "10px"}}>
            <input placeholder = "Email" {...register('email',
            {required: 'email is required',
            pattern:{value: /^\S+@\S+$/i,
            message: "Please enter a valid email"} })}
            style={{borderColor: errors.email? 'red': 'initial'}}/>
            {errors.email && <span style ={{color: 'red', fontsize:'12px', display: 'block'}}>{errors.email.message}</span>}
            </div>
            <div style={{marginBottom: "10px"}}>
            <input  placeholder = "password"
            {...register('password',{required: "password is required", minLength: {value: 6, message: "Password must be atleast 6 characters"}})}
            style={{borderColor: errors.password? 'red': 'initial'}}/>
            {errors.password && <span style={{color: 'red', fontsize: '12px', display: 'block'}}>{errors.password.message}</span>}
            </div>
            <button type="submit">Login</button>
        </form>
    );
}