import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("successfully logged", data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottm: "10px" }}>
        <input
          placeholder="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid Email",
            },
          })}
          style={{ borderColor: errors.email ? "red" : "inital" }}
        />
        {errors.email && (
          <span style={{ color: "red", fontSize: "12px", display: "block" }}>
            {errors.email.message}
          </span>
        )}
      </div>
      <div style={{ marginBottm: "10px" }}>
        <input
          placeholder="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be minimum of 6 character long",
            },
          })}
          style={{ borderColor: errors.password ? "red" : "initial" }}
        />
        {errors.password && (
          <span style={{ color: "red", fontSize: "12px", display: "block" }}>
            {errors.password.message}
          </span>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
