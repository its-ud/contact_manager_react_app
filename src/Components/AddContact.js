import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    // console.log(this.state,"hehe")
    this.props.addContactHandler(this.state);
    //console.log(localStorage.getItem("contacts"));
    this.setState({ name: "", email: "" });
    window.location.replace("/")
  };

  handleName = (e) => {
    this.setState({name: e.target.value})
  }
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" >
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
            <button onClick={this.add} className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;