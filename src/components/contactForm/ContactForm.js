import React from "react";

export const ContactForm = (props) => {
  const onNameChange = (e) => {
    props.setName(e.target.value);
  };

  const onPhoneChange = (e) => {
    props.setPhone(e.target.value);
  };

  const onMailChange = (e) => {
    props.setMail(e.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={props.name}
        onChange={onNameChange}
      />
      <input
        type="tel"
        placeholder="Enter phone"
        value={props.phone}
        onChange={onPhoneChange}
        // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      />
      <input
        type="email"
        placeholder="Enter mail"
        value={props.mail}
        onChange={onMailChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
