import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context";
import axios from "axios";

class Contact extends Component {
  //   static propTypes = {
  //       contactNo: PropTypes.string.isRequired
  //   }

  state = { showInfo: false };

  deleteContact = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() => {
                    this.setState({ showInfo: !this.state.showInfo });
                  }}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                />
                <Link to={`editContact/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                    }}
                  ></i>
                </Link>
              </h4>

              {this.state.showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <b>Email</b> : {email}
                  </li>
                  <li className="list-group-item">
                    <b>Contact No</b> : {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// We can also write this as static attribute in the class itself.

Contact.defaultProps = {
  phone: "36698552147",
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
