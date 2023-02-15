import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import AddContact from './ComponentsContacts/AddContact'
import ContactForm from './ComponentsContacts/ContactForm'
import ContactList from './ComponentsContacts/ContactList'
import HeaderContact from './ComponentsContacts/HeaderContact'
// import SearchBar from './ComponentsContacts/ContactForm'
import api from './api/api'
import { BrowserRouter as Router } from 'react-router-dom'
import BottomNavigation from './ComponentsContacts/BottomNavigation'


const useStyles = makeStyles((theme) => ({
  grid:{
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(8)
  },
  notFound:{
    backgroundColor:theme.palette.primary.main,
    width:'50%',
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    fontFamily:'consolas',
    border:'solid 1px',
    borderRadius:5,
    padding:theme.spacing(1),
    margin:'auto',
    marginTop:theme.spacing(25),
    [theme.breakpoints.down('sm')]:{
      width:'55%'
    }
  }
}))
const AppContacts = () => {

  const [contacts , setContacts] = React.useState([]);
  const [inputSearch , setInputSearch] = React.useState('');
  const [checkedFav , setCheckedFav] = React.useState(false);
  const [viewContactsFav , setViewContactsFav] = React.useState(false);
  const classes = useStyles();

  const changePage = (value) =>{
    setViewContactsFav(value)
  }

  const changeValueSearch = (value) =>{
    setInputSearch(value);
  }

  const changeCheckedFav = (value) => {
    setCheckedFav(value);
  }

  //Afficher les données grace a json-server via useEffect

  const getContacts = async () =>{
    const res = await api.get();
    return res.data;
  }

  React.useEffect(() => {
    const getContactFromServer = async () =>{
        const contactsFromServer = await getContacts();

        if(contactsFromServer){
          setContacts(contactsFromServer);
        }
    }

    getContactFromServer();

  }, []);

  //Ajouter des contacts dans db.json

  const addContact = async (contact) =>{
    console.log('From the App.js ',contact);

    const theContact = await api.post('/',contact);
    console.log(theContact);

    setContacts([...contacts , theContact.data])
  }

  // Delete a contact

  const deleteContact = async (id) =>{
    console.log('Delete contact : ', id)

    //Delete the contact via id in the db.json
    api.delete(`/${id}`)

    //Update of the state contacts via the methods .filter
    setContacts( contacts.filter((contact) => contact.id !== id) )
  }

  //Update a contact

  const updateContact = async (contact) =>{
    console.log('Contact to update : ', contact);

    const contactUpdated = await api.put(`/${contact.id}` , contact)

    console.log('contactUpdated', contactUpdated.data)
    setContacts( contacts.map((c) => c.id === contact.id ? contactUpdated.data : c))
  }
  
  // console.log(contacts)

  return (
    // Brainstorming on the router and the path of component future
    <Router>
      <div>
          <HeaderContact inputSearch={inputSearch} changeValue={changeValueSearch} />

          <Grid className={classes.grid} container spacing={2}>  
              <Grid item lg={6} md={6} sm={4}>
                <ContactForm addContact={addContact} />
              </Grid>
              <Grid item lg={6} md={6} sm={8} xs={12}>
               {contacts.length > 0 ? <ContactList viewContactsFav={viewContactsFav} checkedFav={checkedFav} handleCheckedFav={changeCheckedFav} inputSearch={inputSearch} updateContact={updateContact} deleteContact={deleteContact} contacts={contacts} /> : <div className={classes.notFound}>Not contacts found</div> }
              </Grid>
          </Grid>
          
          <AddContact addContact={addContact} />
          <BottomNavigation viewContactsFav={viewContactsFav} changePage={changePage} />
      </div>
    </Router>
  )
}

export default AppContacts