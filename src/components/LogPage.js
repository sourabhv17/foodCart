import userContext from "../utils/userContext";
import { useContext, useState, useEffect } from "react";
import "./LogPage.css";
import user_icon from "../images/person.png";
import email_icon from "../images/email.png";
import password_icon from "../images/password.png";

const LogPage = () => {
  const { setUser } = useContext(userContext);
  const handleNameChange = (e) => setUser(e.target.value);

  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.password) {
      errors.password = "password is required!";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "password must be less than 10 characters";
    }

    return errors;
  };

  return (
    <div className="main-div">
      <pre className="pre-text">{JSON.stringify(formValues, undefined, 2)}</pre>
      <div className="container">
        <div className="heading">Log in</div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src={user_icon}></img>
              <input
                type="text"
                placeholder="name"
                maxLength={35}
                size={35}
                onChange={handleNameChange}
              ></input>
            </div>
            <p></p>
            <div className="input">
              <img src={email_icon}></img>
              <input
                name="email"
                type="email"
                placeholder="virat18@gmail.com"
                maxLength={20}
                size={35}
                value={formValues.email}
                onChange={handleChange}
              ></input>
            </div>
            <p className="email-alert">{formErrors.email}</p>
            <div className="input">
              <img src={password_icon}></img>

              <input
                name="password"
                type="password"
                placeholder="password"
                maxLength={10}
                size={35}
                value={formValues.password}
                onChange={handleChange}
              ></input>
            </div>
            <p className="password-alert">{formErrors.password}</p>

            <div className="submit-container">
              <button className="submit">Log in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogPage;
