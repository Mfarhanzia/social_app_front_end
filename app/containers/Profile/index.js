// @ts-nocheck
import React, { useState, useEffect } from 'react';
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
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfoAction, updateUserInfoAction } from './redux/actions';
import { useInjectSaga } from '../../utils/injectSaga';
import { validate } from '../../utils/validationFunctions';
import editProfileSagas from './redux/saga';
import { defaultValues } from './constant';
import { DOMAIN } from '../../config/constants';
import UpdatePassword from './passwordUpdateForm';
import UploadFile from '../shared/uploadFile';
import Header from '../../components/Header';

export default function ViewProfile(props) {
  const history = { props };
  useInjectSaga({ key: 'editProfileSagas', saga: editProfileSagas });
  const [isLoading, setIsLoading] = useState(false);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [formData, setFormData] = useState(defaultValues);
  const [formErrors, setFormError] = useState(defaultValues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoAction());
  }, []);

  const userInfo = useSelector(state => state.Profile.userInfo);
  // userInfo.
  useEffect(() => {
    setFormData({ ...formData, ...userInfo });
  }, [userInfo]);

  const handleChange = e => {
    const fieldName = e.target.name;
    const { value } = e.target;
    setFormData({ ...formData, [fieldName]: value });
    if (fieldName === 'password' || fieldName === 'password2') {
    }
  };

  const isEmpty = e => {
    const value = e.target.value.toString().trim();
    if (value === '') {
      setFormError({ ...formErrors, [e.target.name]: 'Required' });
    } else {
      setFormError({ ...formErrors, [e.target.name]: '' });
    }
  };

  const validateEmail = () => {
    if (!validate('email', formData.email)) {
      setFormError({ ...formErrors, email: 'Email is not valid' });
      return false;
    }
    setFormError({ ...formErrors, email: '' });
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.delete('profile_image');
    if (profilePicPreview) {
      formData.append('profile_image', profilePicPreview);
    }
    const isFormValid = Object.keys(formErrors).every(
      key => formErrors[key] === '',
    );
    if (isFormValid && !isLoading) {
      setIsLoading(true);
      dispatch(
        updateUserInfoAction({
          formData,
          setFormError,
          history,
          setIsLoading,
        }),
      );
    }
    return false;
  };

  return (
    <div className="socialAppLogin socialAppSignup">
      <div className="container-fluid">
        <Row className="align-items-center full-height-row">
          <Col lg="" className="full-height-block bg-dark-blue">
            <div className="">
              <div className="p-3">
                <div>
                  <div className="text-left p-3">
                    <p className="font-18 text-center">Edit Profile</p>
                    <Form
                      className="form-horizontal mt-5"
                      method="post"
                      onSubmit={handleSubmit}
                    >
                      <Row>
                        <Col sm="12" />
                      </Row>
                      <Row className="form-group">
                        <Col sm="12" className="text-center">
                          <FormGroup className="text-center">
                            <img
                              width="200"
                              height="200"
                              className="img rounded"
                              src={
                                profilePicPreview
                                  ? URL.createObjectURL(profilePicPreview)
                                  : `${DOMAIN}${formData.profile_image}`
                              }
                              alt="Profile Image"
                            />
                          </FormGroup>
                          <UploadFile
                            onChange={e => {
                              const file = e.target.files[0];
                              console.log(file);
                              setProfilePicPreview(file);
                            }}
                            label="Upload Image"
                            name="profile_image"
                          />
                        </Col>
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
                            {formErrors.first_name ? (
                              <p className="text-danger small">
                                {formErrors.first_name}
                              </p>
                            ) : null}
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
                              {formErrors.last_name ? (
                                <p className="text-danger small">
                                  {formErrors.last_name}
                                </p>
                              ) : null}
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
                            {formErrors.email ? (
                              <p className="text-danger small">
                                {formErrors.email}
                              </p>
                            ) : null}
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
                            {formErrors.username ? (
                              <p className="text-danger small">
                                {formErrors.username}
                              </p>
                            ) : null}
                          </FormGroup>
                        </Col>
                      </Row>
                      <br />
                      <Col xl="12" className="text-center">
                        <Button
                          className="btn btn-primary w-md waves-effect waves-light text-white"
                          type="submit"
                          disabled={isLoading}
                        >
                          Update
                        </Button>
                      </Col>
                    </Form>
                    <UpdatePassword />
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
