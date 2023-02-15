import React  from 'react'
import { Container, List, Typography , FormControlLabel , Checkbox} from '@mui/material'
import {makeStyles} from '@mui/styles'
import ContactListItem from './ContactListItem'

const useStyles = makeStyles((theme) => ({
    ListItem:{
        border:'solid 1px',
        marginBottom:5,
    },
    container:{
        [theme.breakpoints.down('sm')]:{
            marginTop: theme.spacing(-2)
        }
    },
    ListItemFirstPart:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'silver',
        marginRight: '60%',
        padding: 2,
        color:'black'
    },
    ListItemSecondPart:{
        // display:'flex',
        // justifyContent:'space-between',
        backgroundColor:'blueviolet',
        color:'whitesmoke',
        padding: theme.spacing(0.5),
        width:'45%',
        [theme.breakpoints.down('sm')]:{
            width:'55%'
        }
    },
    primaryPart:{
        // marginRight:theme.spacing(1),
        // fontWeight:'bold',
        // width:'100%'
        display:'flex',
        justifyContent:'space-between',
        
    },
    titleContainer:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    icons:{
        border:'solid 1px',
        textAlign:'right',
        // On fait disparaitre kes icons dans l'optique de faire apparaitre
        // un icons button Menu with menuitem
        [theme.breakpoints.down('sm')]:{ 
            display:'none'
        }
    },
    iconsXS:{
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    iconsItem:{
        width:105,
        height: 45
    },
    ListItemText:{
        display:'flex'
    },
    viewContacts:{
        display:'block',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}))



const ContactList = ({contacts , deleteContact , updateContact , inputSearch , checkedFav , handleCheckedFav , viewContactsFav}) => {

    const classes = useStyles();
    const regexExp = new RegExp(inputSearch , 'gim');
    
    return (
    <Container className={classes.container}>
        <Typography variant='h5' className={classes.titleContainer}>
           {inputSearch ? '' : ' Contacts :'}
        </Typography>

        {inputSearch ? 
            (<Typography variant='h5' className={classes.titleContainer}>
                Resultats recherche : {inputSearch}
            </Typography>) : ''
        }
        
        <div className={classes.viewContacts}>
            <FormControlLabel 
                label='View contacts favs'
                control={
                    <Checkbox
                        color='warning'
                        checked={checkedFav}
                        onChange={(e) => handleCheckedFav(e.target.checked)}
                    />
            }/>
        </div>
        
        
        {/*  View contacts when Page viewContactsFav is false */}
        <div>
            {!viewContactsFav && <List>
                {!inputSearch ? /* Text search is wide */
                    (
                        !checkedFav ? /* Checkbox fav is false */
                            contacts.map((contact , index) => 
                            <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>)
                        : /* Checkbox fav is true */
                            contacts.map((contact , index) =>
                            contact.fav && <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>)
                    )
                        : /* 'Test search is true (not empty) */
                    (
                        !checkedFav ? /* Checkbox fav is false , use simply the regex for the filter */
                            contacts.map(
                                (contact , index) =>
                                contact.name.match(regexExp) || contact.prename.match(regexExp) || contact.number.match(regexExp) ?
                                <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>
                                : ''
                            )
                        : /* Checkbox fav is false , use simply the regex for the filter AND the value of contact properties FAV */
                            contacts.map(
                                (contact , index) =>
                                (contact.name.match(regexExp) || contact.prename.match(regexExp) || contact.number.match(regexExp)) && contact.fav ?
                                <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>
                                : ''
                            )
                            /* contacts.map((contact , index) =>
                            contact.fav && <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>) */
                    )
                }
                    
                </List>
            }
        
        {/*  View contacts when Page viewContactsFav is true */}
            {viewContactsFav && <List>
                {!inputSearch ? 
                    /* Text search is wide */
                    (
                        /* !checkedFav ? 
                            contacts.map((contact , index) => 
                            <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>)
                        :  */
                            contacts.map((contact , index) =>
                            contact.fav && <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>)
                    )
                    :
                    /* 'Test search' */
                    (
                        /* !checkedFav ? 

                            contacts.map(
                                (contact , index) =>
                                contact.name.match(regexExp) || contact.prename.match(regexExp) || contact.number.match(regexExp) ?
                                <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>
                                : ''
                            )
                        :  */
                            contacts.map(
                                (contact , index) =>
                                (contact.name.match(regexExp) || contact.prename.match(regexExp) || contact.number.match(regexExp)) && contact.fav ?
                                <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>
                                : ''
                            )
                            /* contacts.map((contact , index) =>
                            contact.fav && <ContactListItem deleteContact={deleteContact} updateContact={updateContact} contact={contact} key={index}/>) */
                    )
                    }
                    
                </List>
            }
        </div>

    </Container>
  )
}

export default ContactList