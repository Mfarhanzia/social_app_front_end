import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {logOutAction} from "../../containers/publicPages/login/redux/actions";

import {  withRouter } from 'react-router-dom';
const Header = (props) => {
  const {history} = props;
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const token = useSelector(state => state.Auth.user ? state.Auth.user.token : null)

  const handleLogout = () =>{
    dispatch(logOutAction({
      history: history
    }))
  }
  console.log("==hisoty", props)
  return (
    <div>
      <Navbar color="dark" className="white" expand="md">
        <NavbarBrand tag={Link} to="/">Social App</NavbarBrand >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              !token ?
                <>
                  <NavItem>
                    <NavLink tag={Link} to="/login">Login</NavLink >
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/signup">signup</NavLink>
                  </NavItem>
                </>
              : null
            }
            {
              token ?
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    More
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem>
                        <NavLink tag={Link} to="/editProfile">EditProfile</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        onClick={handleLogout}
                      >
                        <span className="font-normal">LOG OUT</span>
                      </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              : null
            }
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);