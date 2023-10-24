import React, { useState } from "react";
import "./Contacts.css";
import "../../store";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, update } from "../../slices/contacts";
import { v1 as uuid } from "uuid";
function Contacts() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let contacts = useSelector((state) => state.contacts);

  let [editId, setEditId] = useState("");
  let [editFirstName, setEditFirstName] = useState("");
  let [editLastName, setEditLastName] = useState("");
  let [editEmail, setEditEmail] = useState("");
  let [editPhone, setEditPhone] = useState("");

  /* Dipatch used to carry the actions to redcers */
  let dispatch = useDispatch();

  /* Add the contacts using the dispatch */
  let onAddClick = () => {
    dispatch(
      add({
        id: uuid(),
        firstName,
        lastName,
        email,
        phone,
      })
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  let onEditClick = (contacts) => {
    setEditId(contacts.id);
    setEditFirstName(contacts.firstName);
    setEditLastName(contacts.lastName);
    setEditEmail(contacts.email);
    setEditPhone(contacts.phone);
  };

  let onUpdateClick = () => {
    dispatch(
      update({
        id: editId,
        firstName: editFirstName,
        lastName: editLastName,
        email: editEmail,
        phone: editPhone,
      })
    );

    setEditId("");
    setEditFirstName("");
    setEditLastName("");
    setEditEmail("");
    setEditPhone("");
  };

  /* Delete the contacts using the dispatch */
  let onDeleteClick = (contact) => {
    if (window.confirm("Are you sure you want to Delete contact ?")) {
      dispatch(remove(contact.id));
    }
  };
  return (
    <div className="container">
      <h4 className="grid-header">Contacts</h4>

      <div className="box">
        <details>
          <summary>New Contact</summary>

          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Phone"
              className="form-control"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <button className="button button-green" onClick={() => onAddClick()}>
            Save
          </button>
        </details>
      </div>

      <div className="grid-container">
        <table className="grid">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact.id}>
                <td>{index + 1}</td>
                <td>
                  {editId === contact.id ? (
                    <input
                      type="text"
                      value={editFirstName}
                      onChange={(event) => setEditFirstName(event.target.value)}
                      className="form-control"
                    />
                  ) : (
                    contact.firstName
                  )}
                </td>
                <td>
                  {editId === contact.id ? (
                    <input
                      type="text"
                      value={editLastName}
                      onChange={(event) => setEditLastName(event.target.value)}
                      className="form-control"
                    />
                  ) : (
                    contact.lastName
                  )}
                </td>
                <td>
                  {editId === contact.id ? (
                    <input
                      type="text"
                      value={editEmail}
                      onChange={(event) => setEditEmail(event.target.value)}
                      className="form-control"
                    />
                  ) : (
                    contact.email
                  )}
                </td>
                <td>
                  {editId === contact.id ? (
                    <input
                      type="text"
                      value={editPhone}
                      onChange={(event) => setEditPhone(event.target.value)}
                      className="form-control"
                    />
                  ) : (
                    contact.phone
                  )}
                </td>
                <td>
                  {editId === contact.id ? (
                    <button
                      className="button button-green"
                      onClick={() => {
                        onUpdateClick();
                      }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="button button-green"
                      onClick={() => {
                        onEditClick(contact);
                      }}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className="button button-red"
                    onClick={() => {
                      onDeleteClick(contact);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contacts;
