import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";


const App = () => {
  const [values, setValues] = useState({
        nationalId:'',
        accountId:'',
        visa:'',
        endVisa:'',
        visaPass:'',
        username:'',
        password:'',
        coPassword:'',
        birthday:'',
        country:'',
        city:'',
        address:'',
        gender:'',
        otp:''
  });

  const inputs = [
    {
      id: 1,
      name: "nationalId",
      type: "text",
      placeholder: "nationalId",
      errorMessage:
        "nationalId should be 13 characters and shouldn't include any special character!",
      label: "nationalId",
      pattern: "/^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/",
      required: true,
    },
    {
      id: 2,
      name: "accountId",
      type: "text",
      placeholder: "accountId",
      errorMessage:
        "accountId should be 15 characters and shouldn't include any special character!",
      label: "accountId",
      pattern: "^[0-9]{9,18}$",
      required: true,
    },
    {
      id: 3,
      name: "visa",
      type: "text",
      placeholder: "visa",
      errorMessage:
        "visa should be 15 characters and shouldn't include any special character!",
      label: "visa",
      pattern: "^4[0-9]{12}(?:[0-9]{3})?$",
      required: true,
    },
    {
      id: 4,
      name: "endVisa",
      type: 'date',
      placeholder: "endVisa",
      errorMessage:
        "endVisa should be date [month - year] and shouldn't include any special character!",
      label: "Username",
      required: true,
    },
    {
      id: 5,
      name: "visaPass",
      type: "text",
      placeholder: "visa Password",
      errorMessage:
        "visaPass should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      required: true,
    },
    {
      id: 6,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters ",
      label: "Username",
      pattern: "^[A-Za-z]\\w{5, 29}$",
      required: true,
    },
    {
      id: 7,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 9,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 10,
      name: "country",
      type: "text",
      placeholder: "country",
      label: "country",
      pattern: `[A-Z][a-z]+`,
    },
    {
      id: 11,
      name: "city",
      type: "text",
      placeholder: "city",
      label: "city",
      pattern: `[A-Z][a-z]+`,
    },
    {
      id: 12,
      name: "address",
      type: "text",
      placeholder: "address",
      label: "address",
      pattern: `^[a-zA-Z0-9 .,#;:'-]{1,40}$`,
    },
    {
      id: 13,
      name: "gender",
      type: 'radio',
      label: "Male",
      placeholder:'Male'
    },
    {
      id: 14,
      name: "gender",
      type: 'radio',
      label: "female",
      placeholder:'female'
    },
    {
      id: 15,
      name: "otp",
      type: "text",
      placeholder: "otp",
      label: "otp",
      pattern: "^(\d{4}|\d{6})$",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
