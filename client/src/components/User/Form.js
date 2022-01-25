import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

// using react bootstrap tab for styling
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export default function Form({currentUser, setCurrentUser}) {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="login" title="Login">
          <LoginForm setCurrentUser={setCurrentUser}
              currentUser={currentUser}/>
        </Tab>
        <Tab eventKey="signup" title="Signup">
          <SignupForm setCurrentUser={setCurrentUser}
              currentUser={currentUser}/>
        </Tab>
      </Tabs>
    </div>
  );
}
