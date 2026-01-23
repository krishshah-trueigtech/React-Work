import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted!", data);
    console.log("Uploaded Image:", data.profilePic[0]);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <label>First Name</label>
          <input
            {...register("firstName", {
              required: "First Name is required",
              minLength: { value: 2, message: "Min length is 2" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters allowed",
              },
            })}
            style={{ display: "block", width: "100%" }}
          />
          {errors.firstName && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Last Name</label>
          <input
            {...register("lastName", {
              required: "Last Name is required",
              minLength: { value: 2, message: "Min length is 2" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters allowed",
              },
            })}
            style={{ display: "block", width: "100%" }}
          />
          {errors.lastName && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Username</label>
          <input
            {...register("username", {
              required: "Username is required",
              minLength: { value: 2, message: "Min length is 2" },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: "Only letters, numbers, and underscores allowed",
              },
            })}
            style={{ display: "block", width: "100%" }}
          />
          {errors.username && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.username.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Min length is 8" },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                message:
                  "Must include 1 Uppercase, 1 Lowercase, and 1 Special Character",
              },
            })}
            style={{ display: "block", width: "100%" }}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.password.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Gender: </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              value="male"
              {...register("gender", { required: "Please select a gender" })}
            />{" "}
            Male
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              value="female"
              {...register("gender", { required: "Please select a gender" })}
            />{" "}
            Female
          </label>
          {errors.gender && (
            <span style={{ color: "red", fontSize: "12px", display: "block" }}>
              {errors.gender.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            {...register("profilePic", {
              required: "Profile picture is required",
            })}
            style={{ display: "block", marginTop: "5px" }}
          />
          {errors.profilePic && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.profilePic.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              {...register("terms", { required: "You must accept the terms" })}
            />
            I accept the Terms & Conditions
          </label>
          {errors.terms && (
            <span style={{ color: "red", fontSize: "12px", display: "block" }}>
              {errors.terms.message}
            </span>
          )}
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
