import React from "react"
import { Route, Redirect } from "react-router-dom"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { makeSelectToken } from '../publicPages/login/redux/selectors';

const PublicRoute = ({ component: Component, ...rest }) => {
  return ( 
    <Route
      {...rest}
      render={(props) => {
        return !rest.token ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken()
})
export default connect(mapStateToProps, null)(PublicRoute)
