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
  NavbarText,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutAction } from '../../containers/publicPages/login/redux/actions';
import logoutSaga from '../../containers/publicPages/login/redux/saga';
import { useInjectSaga } from '../../utils/injectSaga';

import './style.scss';

const Header = props => {
  const { history } = props;
  useInjectSaga({ key: 'logoutSaga', saga: logoutSaga });

  const dispatch = useDispatch();
  const token = useSelector(state =>
    state.Auth.user ? state.Auth.user.token : null,
  );

  const handleLogout = () => {
    dispatch(
      logOutAction({
        history,
      }),
    );
  };
  return (
    <div>
      <Navbar color="dark" className="sticky-top" sticky="top" expand="sm">
        <NavbarBrand tag={Link} to="/">
          Social App
        </NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen navbar>
          <Nav className="mr-auto" navbar>
            {!token ? (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/signup">
                    signup
                  </NavLink>
                </NavItem>
              </>
            ) : null}
            {token ? (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/editProfile">
                    EditProfile
                  </NavLink>
                </NavItem>
                <NavItem className="logout-btn">
                  <NavLink onClick={handleLogout}>LOG OUT</NavLink>
                </NavItem>
              </>
            ) : null}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
