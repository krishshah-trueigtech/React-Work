import { Form, redirect, useActionData  } from "react-router-dom";

export const loginAction = async ({request}) => {
  const data = await request.formData();
  const email = data.get('email');
  const password = data.get('password');
  if (email === "admin@test.com" && password === "password") {
    
    localStorage.setItem("token", "12345"); 
    return redirect("/users");
    
  };
  return { error: "Invalid credentials (try admin@test.com / password)" };
};

const LoginForm = () => {
   const actionData = useActionData();
  return (
    <div style={{ padding: 20 }}>
    <h2>Login</h2>
    <Form method="post">
      <div>
        <input name="email" type="email" placeholder="Email" required />
      </div>
      <div>
        <input name="password" type="password" placeholder="Password" required />
      </div>
      {actionData?.error && <p style={{color: 'red'}}>{actionData.error}</p>}
      <button type="submit">Login</button>
    </Form>
  </div>
);
};

export default LoginForm;