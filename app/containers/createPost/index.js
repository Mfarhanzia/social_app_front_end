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
import TitleIcon from '@material-ui/icons/Title';
import { useSelector, useDispatch } from 'react-redux';
import { createPostAction } from './redux/actions';
import { useInjectSaga } from '../../utils/injectSaga';
import createPostSagas from './redux/saga';
import UploadFile from '../shared/uploadFile';


export default function CreatePost(props) {
  const { history } = props;
  useInjectSaga({ key: 'createPostSagas', saga: createPostSagas });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    "title": "",
    "detail": "",
    "is_public": true
  });
  const [formErrors, setFormError] = useState({
    "title": "",
    "detail": "",
  });
  const [profilePicPreview, setProfilePicPreview] = useState(null);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    if (fieldName === "is_public") {
      setFormData({ ...formData, [fieldName]: !value })
    } else {
      setFormData({ ...formData, [fieldName]: value })
    }
  }
  
  const handleCheckBox = async (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked })
  };

  const isEmpty = e => {
    const value = e.target.value.toString().trim();
    if (value === '') {
      setFormError({ ...formErrors, [e.target.name]: 'Required' });
    } else {
      setFormError({ ...formErrors, [e.target.name]: '' });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    formdata.delete('post_image');
    formdata.delete('is_public');
    console.log(formData['is_public'])
    formdata.append('is_public', formData['is_public'] ? true : false);

    if (profilePicPreview) {
      formdata.append('post_image', profilePicPreview);
    }
    const isFormValid = Object.keys(formErrors).every(
      key => formErrors[key] === '',
    );
    if (isFormValid && !isLoading) {
      setIsLoading(true);
      dispatch(
        createPostAction({
          formdata,
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
                    <p className="font-18 text-center">Create Post</p>
                    <Form
                      className="form-horizontal mt-5"
                      method="post"
                      onSubmit={handleSubmit}
                    >
                      <Row className="form-group">
                        <Col sm='6'>
                          <Row className="form-group">
                            <Col sm="12">
                              <FormGroup>
                                <Label for="">Title</Label>
                                <InputGroup>
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="bg-form-blue color-light">
                                      <TitleIcon style={{ fontSize: 20 }} />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    type="text"
                                    name="title"
                                    placeholder="Enter Title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    onBlur={isEmpty}
                                  />
                                </InputGroup>
                                {formErrors.title ? (
                                  <p className="text-danger small">
                                    {formErrors.title}
                                  </p>
                                ) : null}
                              </FormGroup>
                            </Col>
                            <Col sm="12">
                              <div className="">
                                <FormGroup>
                                  <Label for="detail">Text Area</Label>
                                  <Input
                                    type="textarea"
                                    name="detail"
                                    id="detail"
                                    value={formData.detail}
                                    onChange={handleChange}
                                  />
                                  {formErrors.last_name ? (
                                    <p className="text-danger small">
                                      {formErrors.last_name}
                                    </p>
                                  ) : null}
                                </FormGroup>
                              </div>
                            </Col>
                            <Col sm="12" className="mt-3">
                              <div className="">
                                <FormGroup>
                                  <Input
                                    type="checkbox"
                                    name="is_public"
                                    id="isPublic"
                                    checked={formData.is_public}
                                    onChange={handleCheckBox}
                                  />
                                  <Label className="ms-2" for="isPublic">Public</Label>
                                </FormGroup>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm='6'>
                          <Row className="form-group">
                            <Col sm="12" className="text-center">
                              {profilePicPreview ?
                                <FormGroup className="text-center">
                                  <img
                                    width="500"
                                    height="400"
                                    className="img rounded"
                                    src={URL.createObjectURL(profilePicPreview)}
                                    alt="Profile Image"
                                  />
                                </FormGroup>
                                : null}
                              <UploadFile
                                onChange={e => {
                                  const file = e.target.files[0];
                                  console.log(file);
                                  setProfilePicPreview(file);
                                }}
                                label="Upload Image"
                                name="post_image"
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <br />
                      <Col xl="12" className="text-center">
                        <Button
                          className="btn btn-primary w-md waves-effect waves-light text-white"
                          type="submit"
                          disabled={isLoading}
                        >
                          Post
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
