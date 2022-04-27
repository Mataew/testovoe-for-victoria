import React, { useState } from 'react';
import styles from '../../Styles/AddUser.module.css'

const AddUser = ({setData, data}) => {

  const id = Math.floor(Math.random() * (500 - 1)) + 1;

  // оживление формы email
  const [email, setEmail] = useState('')
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  // оживление формы firstName
  const [first_name, setFirstName] = useState('')
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  // оживление формы pay status
  const [pay_status, setPayStatus] = useState(false)
  const handlePayStatus = (e) => {
    setPayStatus(e.target.value)
    console.log(e.target.value)
  }
  //
  // оживление формы lastName
  const [last_name, setLastName] = useState('')
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  // оживление формы UserName
  const [username, setUserName] = useState('')
  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  // оживление формы profile link
  const [profile_link, setProfileLink] = useState('')
  const handleProfileLink = (e) => {
    setProfileLink(e.target.value)
  }

  const addUser = () => {
    setData([...data, {id, email, first_name, pay_status, last_name, username, profile_link}])
    console.log(email, first_name, pay_status, last_name, username, profile_link)
    setEmail('')
    setFirstName('')
    setUserName('')
    setLastName('')
    setProfileLink('')
  }


  return (
    <>
      <h1>Добавление пользователя</h1>
      <div className={ styles.addUserWrapper}>
        <input value={email} onChange={(e) => handleEmail(e)} placeholder="email" type="boolean"/>
        <input value={first_name} onChange={(e) => handleFirstName(e)} placeholder="First name" type="text"/>

        <select onChange={(e) => handlePayStatus(e)}>
          <option value={false}>Не оплатил</option>
          <option value={true}>Оплатил</option>
        </select>

        <input value={last_name} onChange={(e) => handleLastName(e)} placeholder="Last name" type="text"/>
        <input value={username} onChange={(e) => handleUserName(e)} placeholder="Username" type="text"/>
        <input value={profile_link} onChange={(e) => handleProfileLink(e)} placeholder="Profile link" type="text"/>
        <button onClick={() => addUser()}>ADD</button>
      </div>
    </>
  );
};

export default AddUser;