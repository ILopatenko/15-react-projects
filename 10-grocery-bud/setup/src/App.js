import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  return list ? JSON.parse(list) : [];
};

//Create main App component
const App = () => {
  //Create useState() hook for work with a name of current item
  const [name, setName] = useState('');

  //Create useState() hook for work with a list of all the items
  const [list, setList] = useState(getLocalStorage);

  const [isEditing, setIsEditing] = useState(false);

  //Create useState() hook for work with a name of item to edit
  const [editID, setEditID] = useState(null);

  //Create useState() hook for work with an alert
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  //Create a function handleSubmit for work with data from a form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //set alert to error about an empty value of item
      showAlert(true, 'danger', 'Enter a valid value');
    } else if (name && isEditing) {
      setList(
        list.map((element) => {
          if (element.id === editID) {
            return { ...element, title: name };
          }
          return element;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'item changed');
    } else {
      showAlert(true, 'success', 'item added to list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  //Create a function showAlert(). By default it will call setAlert function with (show = false, type = '', msg = '')
  //or with custom values setAlert({ true, 'any tipe', 'any message })
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  //Create a function clearList() for delete all the items from the list
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  //Create a function removeItem() for delete an item from the list
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((el) => el.id !== id));
  };

  //Create a function editItem() for change an item from the list
  const editItem = (id) => {
    const itemToEdit = list.find((el) => el.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(itemToEdit.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  });

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grosery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};
export default App;
