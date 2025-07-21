// import '../Styles/Formvalidation.css'
import { useState } from "react";
const Formvalidation = () => {
  const [email, SetEmail] = useState("");
  const [Name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [age, setage] = useState("");
  const [gender, setGender] = useState("");

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  const validateForm = () => {
    const errors = {};
    //name
    if (!Name) {
      errors.Name = "Name is required";
    }
    //email
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is Inavalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must include 6 characters";
    }
    if (!confirmpassword) {
      errors.confirmpassword = "confirmpassword is requires";
    } else if (confirmpassword !== password) {
      errors.confirmpassword = "Password is not matching";
    }
    if (!age) {
      errors.age = "Age is Required";
    } else if (isNaN(age) || age < 18) {
      errors.age = " Age is not satisfied";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }

    console.log(errors);
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ValidateErrors = validateForm();
    if (Object.keys(ValidateErrors).length > 0) {
      setErrors(ValidateErrors);
    } else {
      console.log("form submitted");
    }
  };

  return (
    <div className="FprmvalidatioPage">
      <div className="FormvalidatioContainer">
        <h1>Form</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              onChange={(e) => setName(e.target.value)}
              //   type='text'
              value={Name}
            />
            {errors.Name}
          </div>

          <div>
            <label>Email:</label>
            <input
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
              value={email}
            />
            {errors.email}
          </div>
          <div>
            <label>Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
            />
            {errors.password}
          </div>
          <div>
            <label>ConfirmPassword:</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              value={confirmpassword}
            />
            {errors.confirmpassword}
          </div>
          <div>
            <label>Age:</label>
            <input
              onChange={(e) => setage(e.target.value)}
              value={age}
              type="number"
            />
            {errors.age}
          </div>

          <div>
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="SelectGender"> Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender}
          </div>

          <button type="submit">Sumit</button>
        </form>
      </div>
    </div>
  );
};

export default Formvalidation;
