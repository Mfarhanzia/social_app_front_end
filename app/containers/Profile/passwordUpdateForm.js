import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    Button,
    Form,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap';
import LockIcon from '@material-ui/icons/Lock';
import { validate } from '../../utils/validationFunctions';
import { useDispatch } from 'react-redux';
import { updatePasswordAction } from "./redux/actions";


export default function UpdatePassword(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        old_password: "",
        new_password: "",
    })
    const [formErrors, setFormError] = useState({
        old_password: "",
        new_password: "",
    })

    const isEmpty = (e) => {
        const value = e.target.value.toString().trim();
        if (value === "") {
            setFormError({ ...formErrors, [e.target.name]: "Required" })
        } else {
            setFormError({ ...formErrors, [e.target.name]: "" })
        }
    }

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [fieldName]: value })
    }

    const validatePassword = () => {
        if (!validate("password", formData.new_password)) {
            const msg = "Password must contain one uppercase letter, one lowercase letter, one digit, one special character and minimum of 8 characters."
            setFormError({ ...formErrors, ["new_password"]: msg });
            return false;
        }
        if(formData.new_password === formData.old_password){
            const msg = "New and Old Passwords are Same."
            setFormError({ ...formErrors, ["new_password"]: msg });
            return false;
        }
        setFormError({ ...formErrors, ["new_password"]: "" });
        return true;
    };

    const dispatch = useDispatch()
    const handlePasswordUpdate = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        formData.append("profile_image", "")
        const isFormValid = Object.keys(formErrors).every(key => formErrors[key] === "");
        const isValidNewPass = validatePassword()
        if (isFormValid && !isLoading && isValidNewPass) {
            setIsLoading(true)
            dispatch(updatePasswordAction({
                formData: formData,
                setFormError: setFormError,
                setIsLoading: setIsLoading,
            }))
        }
        return false
    }
    return (
        <Form className="form-horizontal mt-5" method="post" onSubmit={handlePasswordUpdate}>
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
                            name="old_password"
                            value={formData.old_password}
                            onChange={handleChange}
                            placeholder="Enter old password"
                            onBlur={isEmpty}
                        />
                    </InputGroup>
                    {formErrors.old_password ?
                        <p className="text-danger small">{formErrors.old_password}</p>
                        : null
                    }
                </Col>
                <Col sm="6">
                    <div className="">
                        <Label for="New_password">
                            New Password
                        </Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className="bg-form-blue color-light">
                                    <LockIcon style={{ fontSize: 20 }} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="password"
                                name="new_password"
                                placeholder="New password"
                                value={formData.new_password}
                                onChange={handleChange}
                                // onBlur={checkPassword}
                                onBlur={validatePassword}
                            />
                        </InputGroup>
                        {formErrors.new_password ?
                            <p className="text-danger small">{formErrors.new_password}</p>
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
                    Update
                </Button>
            </Col>
        </Form>
    );
}