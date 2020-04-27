import React from 'react';

import UserProfile from './user-profile/user-profile.component';

import './Hoc.scss';
import UserList from './user-list/user-list.component';

function Hoc() {
  return (
    <div className='Hoc'>
      <UserList />
      <UserProfile
        name='Qwerty'
        email='qwerty@gmail.com'
        dataSource='https://jsonplaceholder.typicode.com/posts'
      />
    </div>
  );
}
 
export default Hoc;
