import React from 'react';
import styles from '../../Styles/Users.module.css'
import User from './User';

const Users = (props) => {
  return (
    <div>
      <div className={ styles.title }>
        <div className={ styles.id }>ID</div>
        <div className={ styles.email }>EMAIL</div>
        <div className={ styles.name }>FIRST NAME</div>
        <div className={ styles.payStatus }>PAY STATUS</div>
        <div className={ styles.name }>LAST NAME</div>
        <div className={ styles.name }>USERNAME</div>
        <div className={ styles.link }>PROFILE LINK</div>
      </div>
      <User data={props.data}/>
    </div>
  );
};

export default Users;