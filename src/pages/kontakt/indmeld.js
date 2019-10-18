import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Indmelding</h1>
              <p>
                Undertegnede indmelder sig herved i HGI (Høje Gladsaxe Idrætsforening), idet jeg sammtidig bekræfter, at jeg ikke spiller på repræsentative hold for andre foreninger under DBU (Dansk Boldspil Union) eller DHF (Dansk Håndbold Forbund).
              </p>
              <form
                name="join"
                method="post"
                action="/kontakt/tak/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="subject" id="subject" value="Ny indmelding i HGI" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Navn
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'address'}>
                    Adresse
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'address'}
                      onChange={this.handleChange}
                      id={'address'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'zip-code'}>
                    Post nummer og by
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'zip-code'}
                      onChange={this.handleChange}
                      id={'zip-code'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'phone'}>
                    Telefon nummer
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'number'}
                      name={'phome'}
                      onChange={this.handleChange}
                      id={'phone'}
                      required={true}
                    />
                  </div>
                </div>
                <p>
                Jeg ønsker at spille
                </p>
                <div className="field">
                  <div className="control">
                    <label className="label" htmlFor={'football'}>
                    <input
                        type={'radio'}
                        name={'sport'}
                        onChange={this.handleChange}
                        id={'football'}
                        value={'fodbold'}
                        required={true}
                      /> Fodbold
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label" htmlFor={'handball'}>
                    <input
                        type={'radio'}
                        name={'sport'}
                        onChange={this.handleChange}
                        id={'handball'}
                        value={'håndbold'}
                        required={true}
                      /> Håndbold
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="label" htmlFor={'passive'}>
                    <input
                        type={'radio'}
                        name={'sport'}
                        onChange={this.handleChange}
                        id={'passive'}
                        required={true}
                        value={'passiv'}
                      /> Passiv
                    </label>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Hvis du tidligere har spillet i en anden klub så skriv det her
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={false}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
