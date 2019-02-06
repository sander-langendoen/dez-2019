import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={"name"} >Uw naam</label>
            <div className="control">
              <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"email"}>E-mailadres</label>
              <div className="control">
                <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
              </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"phone"} >Telefoonnummer</label>
            <div className="control">
              <input className="input" type={"text"} name={"phone"} onChange={this.handleChange} id={"phone"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"reason"} >Kunt u aanvinken waarvoor u een bericht stuurt?</label>

            <div className="control">
                <input type="radio" id="contactChoice1" name="reason" value="Locatie Leidschendam-Voorburg" />
                <label for="contactChoice1" >Locatie Leidschendam-Voorburg</label>

                <input type="radio" id="contactChoice2" name="reason" value="Locatie Dordrecht" />
                <label for="contactChoice2" >Locatie Dordrecht</label>

                <input type="radio" id="contactChoice3" name="reason" value="Online consult" />
                <label for="contactChoice3" >Online consult</label>

                <input type="radio" id="contactChoice4" name="reason" value="Andere vraag aan Eline" />
                <label for="contactChoice4" >Andere vraag aan Eline</label>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"subject"} >Onderwerp</label>
            <div className="control">
              <input className="input" type={"text"} name={"subject"} onChange={this.handleChange} id={"subject"} required={false} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"message"}>Uw bericht</label>
            <div className="control">
              <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"reason"} >Kunt u aanvinken waarvoor u een bericht stuurt?</label>

            <div className="control">
                <input type="radio" name="privacy" value="OK, ik ben akkoord" />
                <label for="contactChoice4" >OK, ik ben akkoord met de verwerking van mijn contactgegevens zoals beschreven in Eline's privacyverklaring</label>
            </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit">Verzenden</button>
          </div>
        </form>
        </div>
        </div>
        </section>
      </Layout>
    );
  }
}