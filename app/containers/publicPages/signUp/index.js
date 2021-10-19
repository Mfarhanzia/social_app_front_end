import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import { signUpRegisterAction } from "./redux/actions";
import { useInjectSaga } from '../../../utils/injectSaga';
import { useDispatch } from 'react-redux';
import { validate } from '../../../utils/validationFunctions';
import signUpSagas from "./redux/saga";


export default function Signup(props) {
  const history = {props};
  useInjectSaga({ key: 'signup', saga: signUpSagas });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "farhan",
    last_name: "zia",
    email: "farhan2@mail.com",
    username: "farhan",
    password: "Password@1",
    password2: "Password@1",
  })

  const [formErrors, setFormError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  })

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [fieldName]: value })
    if (fieldName === "password" || fieldName === "password2"){
      checkPassword()
    }
  }
  
  const checkPassword = (e) => {
    if (formData.password === formData.password2) {
      setFormError({ ...formErrors, ["password2"]: "" })
    } else {
      const msg = "Password mismatch!"
      setFormError({ ...formErrors, ["password2"]: msg })
    }
  }
  const isEmpty = (e) => {
    const value = e.target.value.toString().trim();
    if (value === "") {
      setFormError({ ...formErrors, [e.target.name]: "Required" })
    } else {
      setFormError({ ...formErrors, [e.target.name]: "" })
    }
 }
  const validatePassword = () => {
    if (!validate("password", formData.password)) {
      const msg = "Password must contain one uppercase letter, one lowercase letter, one digit, one special character and minimum of 8 characters."
      setFormError({ ...formErrors, ["password"]: msg });
      return false;
    }
    setFormError({ ...formErrors, ["password"]: "" });
    return true;
  };
  const validateEmail = () => {
    if (!validate("email", formData.email)) {
      setFormError({ ...formErrors, ["email"]: "Email is not valid" });
      return false;
    }
    setFormError({ ...formErrors, ["email"]: "" });
    return true;
  };

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const isFormValid = Object.keys(formErrors).every(key => formErrors[key] === "");
    if(isFormValid && !isLoading){
      setIsLoading(true)
      dispatch(signUpRegisterAction({
        formData: formData,
        setFormError: setFormError, 
        history: history,
        setIsLoading: setIsLoading,
      }))
    }
    return false
  }
  return (
    <div className=" socialAppLogin socialAppSignup">
      <div className="container-fluid">
        <Row className="align-items-center full-height-row">
          <Col lg="" className="full-height-block bg-dark-blue">
            <div className="">
              <div className="p-3">
                <div>
                  <div className="text-right">
                    <Link to="/login" className="btn-rounded btn-outline-primary btn w-md waves-effect waves-light">Login</Link>
                  </div>
                  <div className="text-left p-3">
                    <p className="font-18 text-center">
                      Sign up
                    </p>
                    <Form className="form-horizontal mt-5" method="post" onSubmit={handleSubmit}>
                      <Row className="form-group">
                        <Col sm="6">
                          <FormGroup>
                            <Label for="">First Name</Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText className="bg-form-blue color-light">
                                  <PersonIcon style={{ fontSize: 20 }} />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="text"
                                name="first_name"
                                placeholder="Enter first name"
                                value={formData.first_name}
                                onChange={handleChange}
                                onBlur={isEmpty}
                              />
                            </InputGroup>
                            {formErrors.first_name ?
                              <p className="text-danger small">{formErrors.first_name}</p>
                              : null
                            }
                          </FormGroup>
                        </Col>
                        <Col sm="6">
                          <div className="">
                            <FormGroup>
                              <Label for="">Last Name</Label>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText className="bg-form-blue color-light">
                                    <PersonIcon style={{ fontSize: 20 }} />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  type="text"
                                  name="last_name"
                                  placeholder="Enter last name"
                                  value={formData.last_name}
                                  onChange={handleChange}
                                  onBlur={isEmpty}
                                />
                              </InputGroup>
                              {formErrors.last_name ?
                                <p className="text-danger small">{formErrors.last_name}</p>
                                : null
                              }
                            </FormGroup>
                          </div>
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col sm="6">
                          <FormGroup>
                            <Label for="">Email</Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText className="bg-form-blue color-light">
                                  <EmailIcon style={{ fontSize: 20.5 }} />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={validateEmail}
                              />
                            </InputGroup>
                            {formErrors.email ?
                              <p className="text-danger small">{formErrors.email}</p>
                              : null}
                          </FormGroup>
                        </Col>
                        <Col sm="6">
                          <FormGroup>
                            <Label for="">User Name</Label>
                            <InputGroup>
                              <Input
                                type="text"
                                name="username"
                                placeholder="Enter User Name"
                                value={formData.username}
                                onChange={handleChange}
                                onBlur={isEmpty}
                              />
                            </InputGroup>
                            {formErrors.username ?
                              <p className="text-danger small">{formErrors.username}</p>
                              : null
                            }
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="form-group">
                        <Col sm="6">
                          <Label for="Password">Password</Label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText className="bg-form-blue color-light">
                                <LockIcon style={{ fontSize: 20 }} />{' '}
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              onBlur={validatePassword}
                              placeholder="Enter password"
                            />
                          </InputGroup>
                          {formErrors.password ?
                            <p className="text-danger small">{formErrors.password}</p>
                            : null
                          }
                        </Col>
                        <Col sm="6">
                          <div className="">
                            <Label for="ConfirmPassword">
                              Confirm Password
                            </Label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText className="bg-form-blue color-light">
                                  <LockIcon style={{ fontSize: 20 }} />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                type="password"
                                name="password2"
                                placeholder="Confirm password"
                                value={formData.password2}
                                onChange={handleChange}
                                onBlur={checkPassword}
                              />
                            </InputGroup>
                            {formErrors.password2 ?
                              <p className="text-danger small">{formErrors.password2}</p>
                              : null}
                          </div>
                        </Col>
                      </Row>
                      <br />
                      <Col xl="12" className="text-center">
                        <Button
                          className="btn btn-primary w-md waves-effect waves-light text-white"
                          type="submit"
                          disabled={isLoading}
                        >
                          Register
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
