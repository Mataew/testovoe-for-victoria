import React, { useState } from 'react';
import styles from '../../Styles/Users.module.css';

const User = (props) => {
  return (
    <>
      {props.data.map(item => {
        return(
          <div className={ styles.user }>
            <div className={ styles.id }>{item.id}</div>
            <div className={ styles.email }>{item.email}</div>
            <div className={ styles.name }>{item.first_name}</div>
            <div className={ styles.payStatus }>{item.pay_status ? 'Оплачено' : 'В минусе'}</div>
            <div className={ styles.name }>{item.last_name}</div>
            <div className={ styles.name }>{item.username}</div>
            <div className={ styles.link }><a href={ item.profile_link }>Ссылка на профиль</a></div>
          </div>
        )
      })}
    </>
  );
};

export default User;