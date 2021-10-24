import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap';
import './style.scss'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import loginSagas from './redux/saga';
import { validate } from "../../../utils/validationFunctions";
import { loginAction } from "./redux/actions";
import { useInjectSaga } from '../../../utils/injectSaga';
import { useDispatch } from 'react-redux';

export default function Login(props) {
  const {history} = props;
  useInjectSaga({ key: 'loginSagas', saga: loginSagas });
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [otherError, setOtherError] = useState("")
  const [formErrors, setFormError] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [fieldName]: value })
  }

  const validateEmail = () => {
    if (!validate("email", formData.email)) {
      setFormError({ ...formErrors, ["email"]: "Email is not valid" });
      return false;
    }
    setFormError({ ...formErrors, ["email"]: "" });
    return true;
  };
  const validatePassword = () => {
    if (!validate("password", formData.password)) {
      const msg = "Password must contain one uppercase letter, one lowercase letter, one digit, one special character and minimum of 8 characters."
      setFormError({ ...formErrors, ["password"]: msg });
      return false;
    }
    setFormError({ ...formErrors, ["password"]: "" });
    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    validateEmail()
    const formData = new FormData(e.currentTarget);
    const isFormValid = Object.keys(formErrors).every(key => formErrors[key] === "");
    if (isFormValid && !isLoading) {
      setOtherError("")
      setIsLoading(true)
      dispatch(loginAction({ 
        formData: formData, 
        setOtherError: setOtherError, 
        history: history, 
        setIsLoading: setIsLoading
      }))
    }
    return false
  }
  return (
    <div className="socialAppLogin">
      <div className="container-fluid">
        <Row className="full-height-row align-items-center">
          <Col className="full-height-block bg-dark-blue">
            <div className="">
              <div className="p-3">
                <div>
                  <div className="text-right">
                    <Link to="/signup" className="btn-rounded btn-outline-primary btn w-md waves-effect waves-light">Sign up</Link>
                  </div>
                  <div className="text-left p-3">
                    <h4 className="font-24 text-center text-uppercase">
                      Welcome!
                    </h4>
                    <p className="font-18 text-center">
                      Sign in to Your Social App
                    </p>
                    {otherError ?
                      <p className="text-center text-danger small">
                        {otherError}
                      </p> : null
                    }

                    <Form className="form-horizontal mt-5 auth_form" method="post" onSubmit={handleSubmit}>
                      <Label for="exampleEmail">Email</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText className="bg-form-blue color-light"><EmailIcon style={{ fontSize: 20 }} /> </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          name="email"
                          placeholder="test@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={validateEmail}
                        />
                      </InputGroup>
                      {formErrors.email ?
                        <p className="text-danger small">{formErrors.email}</p>
                        : null
                      }
                      <Label for="examplePassword">Password</Label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText className="bg-form-blue ptb-2 color-light"><LockIcon style={{ fontSize: 20.5 }} /></InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          required={true}
                          value={formData.password}
                          onChange={handleChange}
                          onBlur={validatePassword}
                        />
                      </InputGroup>
                      {formErrors.password ?
                        <p className="text-danger small">{formErrors.password}</p>
                        : null
                      }
                      <br />
                      <Col xl="12" className="text-center">
                        <Button 
                          className="btn btn-primary w-md waves-effect waves-light text-white" 
                          type="submit"
                          disabled={isLoading}
                        >
                          Login
                        </Button>
                      </Col>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
