/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import styled from "styled-components";
import {
  errorMessages,
  validateEmail,
  validatePassword,
} from "../utils/helpers";

const LoginFormArea = styled(Form)`
  width: 30%;
  min-width: 300px;
  margin: auto;
`;

const initialFormValues = {
  email: "",
  password: "",
  terms: false,
  name: "Emre",
  id: 1,
  avatar:
    "https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg",
};

function LoginForm(props) {
  //hook'lar
  const { setUser } = props;
  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: "",
  });
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (
      validateEmail(formData.email) &&
      validatePassword(formData.password) &&
      formData.terms
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  //helper fn
  const handleChange = (event) => {
    let { value, name, checked, type } = event.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, email: "" });
      } else {
        setErrors({ ...errors, email: errorMessages.email });
      }
    }
    if (name === "password") {
      if (validatePassword(value)) {
        setErrors({ ...errors, password: "" });
      } else {
        setErrors({
          ...errors,
          password: errorMessages.password,
        });
      }
    }
    if (name === "terms") {
      if (checked === true) {
        setErrors({ ...errors, terms: "" });
      } else {
        setErrors({
          ...errors,
          terms: errorMessages.terms,
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        console.log(response);
        setFormData(initialFormValues);
        setUser(response.data);
        history.push("/welcome");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //template
  return (
    <>
      <LoginFormArea onSubmit={handleSubmit}>
        <h2>Create a password to start your membership</h2>
        <p>
          Just a few more steps and you&apos;re done!
          <br />
          We hate paperwork, too.
        </p>
        <FormGroup floating>
          <Input
            id="email"
            name="email"
            data-cy="email-input"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            invalid={errors.email !== ""}
          />
          <Label for="email">Email</Label>
          <FormFeedback tooltip data-cy="error">
            {errors.email}
          </FormFeedback>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            data-cy="password-input"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            invalid={errors.password !== ""}
          />
          <Label for="password">Password</Label>
          <FormFeedback tooltip data-cy="error">
            {errors.password}
          </FormFeedback>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            type="checkbox"
            name="terms"
            data-cy="terms-input"
            checked={formData.terms}
            onChange={handleChange}
            invalid={errors.terms !== ""}
          />
          <Label check className="d-inline-block">
            I agree with the terms and conditions.
          </Label>
          <FormFeedback tooltip>{errors.terms}</FormFeedback>
        </FormGroup>
        <Button
          disabled={!isValid}
          data-cy="submit-button"
          className="w-100 btn-danger"
        >
          Submit
        </Button>
      </LoginFormArea>
    </>
  );
}

export default LoginForm;
