import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/textInputGroup";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, errors } = this.state;
    if (name === "") {
      this.setState({
        errors: { name: "Name is required" },
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: { email: "Email is required" },
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: { phone: "Phone is required" },
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({
      type: "ADD_CONTACT",
      payload: res.data,
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/"); // history attribute in props
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.submit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    onChange={this.onChange}
                    value={name}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                    value={email}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    onChange={this.onChange}
                    value={phone}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light  btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContacts;
