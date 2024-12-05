import { useEffect, useState } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import initialContacts from './data.json'

const App = () => {
const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem('contacts')) ?? initialContacts)

const [filter, setFilter] = useState('')
console.log(filter);

useEffect(() => {

  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])

const addContact = (newContact) => {
  setContacts(prevContacts => [...prevContacts, newContact])
}

const changeFilter = value => {setFilter(value)}

const filteredContacts = contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))

const deleteContact = id => {
  setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
}

  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm addContact={addContact}/>
  <SearchBox changeFilter={changeFilter} filter={filter}/>
  <ContactList contacts={filteredContacts} deleteContact={deleteContact}/>
</div>  )
}

export default App