import {useState} from 'react';
import "./App.css";
import contactsJSON from './contacts.json';

function App() {
const [contacts, setContacts] = useState(contactsJSON.slice(0,5))
console.log('contacts', contacts)

const [remainingContacts, setRemainingContacts] = useState(contactsJSON.slice(5))
function randomContact () {
const randomContactIndex = Math.floor(Math.random() * remainingContacts.length)
const randomContact = contacts[randomContactIndex]

return randomContact
} 
const sortName = () => {
  const newContacts = {...contacts}
newContacts.sort((a,b) => a.name.localeCompare(b.name));
  setContacts( {contacts: newContacts})
}
const sortPopularity = () => {
  const newContacts = {...contacts}
newContacts.sort((a,b) =>{
if(a.value > b.value){
return 1
} else{
  return -1
}})

  setContacts( {contacts: newContacts})

}

/* const removeElement = () => {
  setVisible((contacts) => !contacts)
} */
return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={randomContact} className='btn-add'>
        Add random Contact
      </button>
      <button onClick={sortName} className='btn-add'>
        Sort by Name
      </button>
      <button onClick={sortPopularity} className='btn-add'>
        Sort by Popularity
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact) =>{

              return (
                <tr key ={contact.id}>
                <td>
                <img src={contact.pictureUrl} alt={contact.name}
                   style ={{height: '200px'}} />
                 </td>
               <td>
                <h3>{contact.name}</h3>
                </td>
                <td>
               <h3>{contact.popularity}</h3>
                </td>
                <td>
                  {contact.wonEmmy  ? <p>🏆</p> : ''}
                </td>
                <td>
                  {contact.wonOscar  ? <p>🏆</p> : ''}
                </td>
                <td>
                <button onClick={() => deleteContact(contact.id)} className="btn-delete">
                  Delete</button>
                </td>
               </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
