import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([
    { name: "John", phoneNumber: "123456789", mail: "John@Doe.com" },
  ]);

  const [appointments, setAppointments] = useState([
    {
      title: "Dummy Appointment",
      contact: {
        name: "Bob",
        phoneNumber: "987654321",
        mail: "Bob@Manson.com",
      },
      date: "01/01/2023",
      time: "10:00",
    },
  ]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (newName, newPhoneNumber, newMail) => {
    setContacts((prevContacts) => {
      const newContact = {
        name: newName,
        phoneNumber: newPhoneNumber,
        mail: newMail,
      };
      return [...prevContacts, newContact];
    });
  };

  const addAppointment = (newTitle, newContact, newDate, newTime) => {
    setAppointments((prevAppointments) => {
      const newAppointment = {
        title: newTitle,
        contact: newContact,
        date: newDate,
        time: newTime,
      };
      return [...prevAppointments, newAppointment];
    });
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage
              contacts={contacts}
              appointments={appointments}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
