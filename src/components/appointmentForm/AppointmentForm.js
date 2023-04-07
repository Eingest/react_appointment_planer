import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
  };

  const onTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleChange = (e) => {
    setContact(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="date"
        value={date}
        min={getTodayString}
        onChange={onDateChange}
      />
      <input type="time" value={time} onChange={onTimeChange} />
      <ContactPicker contacts={contacts} handleChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};
