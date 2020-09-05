import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: "Om Prasanna Jain",
  //         email: "omjain2606@gmail.com",
  //         phone: 8275481040,
  //       },

  //       {
  //         id: 2,
  //         name: "Mahima Prasanna Jain",
  //         email: "jainmahi1998@gmail.com",
  //         phone: 9405814787,
  //       },

  //       {
  //         id: 3,
  //         name: "Yogita Prasanna Jain",
  //         email: "yogitajainjalgaon@gmail.com",
  //         phone: 8275481040,
  //       },
  //     ],
  //   };
  // }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map((ele) => (
                <Contact key={ele.id} contact={ele} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
