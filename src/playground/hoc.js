// higher order component (HOC)
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login</p> }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
// ReactDOM.render(<AdminInfo isAdmin={true} info="this is the details" />, document.getElementById('root'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is the details" />, document.getElementById('root'))