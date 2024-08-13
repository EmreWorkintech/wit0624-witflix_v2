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

const LoginFormArea = styled(Form)`
  width: 30%;
  min-width: 300px;
  margin: auto;
`;

const initialFormValues = {
  email: "emre@wit.com.tr",
  password: "1234RThj",
  terms: true,
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
      formData.password.trim().length >= 8 &&
      formData.password.toLowerCase() !== formData.password &&
      formData.password.toUpperCase() !== formData.password &&
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
        setErrors({ ...errors, email: "Geçerli bir email giriniz!.." });
      }
    }
    if (name === "password") {
      if (
        value.trim().length >= 8 &&
        value.toLowerCase() !== value &&
        value.toUpperCase() !== value
      ) {
        setErrors({ ...errors, password: "" });
      } else {
        setErrors({
          ...errors,
          password:
            "Password'ünüz en az 8 karakter olmalı, en az 1 büyük harf ve 1 küçük harf içermeli.",
        });
      }
    }
    if (name === "terms") {
      if (checked === true) {
        setErrors({ ...errors, terms: "" });
      } else {
        setErrors({
          ...errors,
          terms:
            "Kayıt olabilmek için anlaşma şartlarını kabul etmelisiniz!...",
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

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
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
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            invalid={errors.email !== ""}
          />
          <Label for="email">Email</Label>
          <FormFeedback tooltip>{errors.email}</FormFeedback>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            invalid={errors.password !== ""}
          />
          <Label for="password">Password</Label>
          <FormFeedback tooltip>{errors.password}</FormFeedback>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            invalid={errors.terms !== ""}
          />
          <Label check className="d-inline-block">
            I agree with the terms and conditions.
          </Label>
          <FormFeedback tooltip>{errors.terms}</FormFeedback>
        </FormGroup>
        <Button disabled={!isValid} className="w-100 btn-danger">
          Submit
        </Button>
      </LoginFormArea>
    </>
  );
}

export default LoginForm;
