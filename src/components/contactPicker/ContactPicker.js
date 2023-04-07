import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.handleContactPickerChange}>
      <option>None</option>
      {props.contacts.map((contact) => {
        return <option>{contact.name}</option>;
      })}
    </select>
  );
};
