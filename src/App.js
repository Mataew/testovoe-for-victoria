import React, { useState } from 'react';
import styles from './Styles/App.module.css'
import Users from './Components/Users';
import allData from './ForTable.json';
import AddUser from './Components/AddUser/AddUser';


const App = () => {

  const [data, setData] = useState(allData) // получаем базу и помещаем в стейт

  const [formValue, setFormValue] = useState('') // стейт для оживления формы
  // функция делающее форму управляемым и живой поиск
  const handleFormInput = (e) => {
    // делаем форму управляемым
    setFormValue(e.target.value)

    // живой поиск с помощью фильтра
    setData([...data.filter(item => item.last_name.includes(e.target.value) || item.last_name.toLowerCase().includes(e.target.value))])

    // возвращение даных после очищения формы
    if (e.target.value === ''){
      setData(allData)
    }
  }

  // сортировка по разным условиями с помощью switch
  const handleSorting = (e) => {
    switch (e.target.value){
      case 'По умолчанию':
        setData(allData)
        break
      case 'По ID':
        setData([...data.sort((a,b) => {
          if (a.id > b.id) return 1;
          if (a.id === b.id) return 0;
          if (a.id < b.id) return -1;
        })])
        break
      case 'Оплаченные':
        setData([...data.filter(item => item.pay_status)])
        break
      case 'Не оплатили':
        setData([...data.filter(item => !item.pay_status)])
        break
    }
  }

  return (
    <main>
      {/* форма для живого поиска*/}
      <input placeholder='Поиск по фамилии' className={ styles.liveSearch} value={formValue} onChange={(e) => handleFormInput(e)} type="text"/>

      {/* форма для сортировки по id и тд*/}
      <select onChange={(e) => handleSorting(e)} className={ styles.sorting }>
        <option value="По умолчанию">По умолчанию</option>
        <option value="По ID">По ID</option>
        <option value="Оплаченные">Оплаченные</option>
        <option value="Не оплатили">Не оплатили</option>
      </select>
      <Users data={data} />
      <AddUser setData={setData} data={data}/>
    </main>
  );
};

export default App;