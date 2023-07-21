import React from 'react';
import Employee from './Employee';

const Profile = (props) => {
  return (
    <div>
        <Employee {...props} />
      
    </div>
  )
}

export default Profile
