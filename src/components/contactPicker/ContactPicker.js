import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.handleChange}>
      <option>None</option>
      {props.contacts.map((contact) => {
        return <option>{contact.name}</option>;
      })}
    </select>
  );
};
