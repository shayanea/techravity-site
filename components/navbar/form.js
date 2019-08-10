import React, { Component } from "react";
import cogoToast from "cogo-toast";

class Form extends Component {
  state = {
    name: "",
    email: "",
    tel: "",
    staff: "",
    role: "",
    description: "",
    hasSubmited: false
  };

  validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validateTel = tel => {
    let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(tel).toLowerCase());
  };

  submit = e => {
    e.preventDefault();
    this.setState({ hasSubmited: true });
    if (
      (this.state.name.trim() !== "" && this.state.role.trim() !== "",
      this.state.description.trim() !== "",
      this.state.staff.trim() !== "" && this.validateEmail(this.state.email) && this.validateTel(this.state.tel))
    ) {
      fetch("http://185.179.169.129:8081/api/freeQuote", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/problem+json; charset=utf-8"
        },
        body: JSON.stringify({
          name: this.state.name,
          companyEmail: this.state.email,
          phone: this.state.tel,
          role: this.state.role,
          size: Number(this.state.staff),
          detail: this.state.description
        })
      }).then(function(res) {
        if (res.ok) {
          this.form.reset();
          return cogoToast.success("Thank you! Your message has been sent successfully.");
        } else {
          return cogoToast.error("Something went wrong");
        }
      });
    }
  };

  render() {
    const { status } = this.props;
    const { hasSubmited, name, email, role, staff, description, tel } = this.state;
    return (
      <div id="freeQuote" className={status ? "active" : ""}>
        <div className="container">
          <h2>tell us about your project</h2>
          <div className="close-btn" onClick={this.props.onHideForm} />
          <form ref={ref => (this.form = ref)} noValidate onSubmit={this.submit}>
            <div className="row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  onChange={e => this.setState({ name: e.target.value })}
                  style={{
                    border: hasSubmited && name.trim() === "" ? "1px solid red" : "1px solid #eee"
                  }}
                  maxLength={200}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Compnay Email"
                  onChange={e => this.setState({ email: e.target.value })}
                  style={{
                    border: hasSubmited && !this.validateEmail(email) ? "1px solid red" : "1px solid #eee"
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  onChange={e => this.setState({ tel: e.target.value })}
                  style={{
                    border: hasSubmited && !this.validateTel(tel) ? "1px solid red" : "1px solid #eee"
                  }}
                  maxLength={11}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <select
                  defaultValue=""
                  className="form-control"
                  placeholder="Company size"
                  onChange={e => this.setState({ staff: e.target.value })}
                  style={{
                    border: hasSubmited && staff.trim() === "" ? "1px solid red" : "1px solid #eee"
                  }}
                >
                  <option value="">Company size</option>
                  <option value="1">1-9 employees</option>
                  <option value="2">10-24 employees</option>
                  <option value="3">25-49 employees</option>
                  <option value="4">50-100 employees</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What is your role"
                  onChange={e => this.setState({ role: e.target.value })}
                  style={{
                    border: hasSubmited && role.trim() === "" ? "1px solid red" : "1px solid #eee"
                  }}
                  maxLength={200}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Project details"
                  onChange={e => this.setState({ description: e.target.value })}
                  style={{
                    border: hasSubmited && description.trim() === "" ? "1px solid red" : "1px solid #eee"
                  }}
                  maxLength={5000}
                />
              </div>
            </div>
            <div className="row">
              <button className="btn">Send Request</button>
              <ul>
                <li>Our representatives will contact you within 2 working days</li>
                <li>Our analysts & developers team return to you with your project estimation</li>
                <li>By pressing send, you accept the confidentiality and personal information policies</li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
