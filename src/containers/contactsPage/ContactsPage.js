import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicateName === false) {
      props.addContact(name, phone, mail);
      setName("");
      setPhone("");
      setMail("");
    }
  };

  useEffect(() => {
    const result = props.contacts.find((element) => {
      return element.name === name;
    });
    if (result) {
      setDuplicateName(true);
      return;
    }
  }, [props.contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          mail={mail}
          setMail={setMail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts} />
      </section>
    </div>
  );
};
