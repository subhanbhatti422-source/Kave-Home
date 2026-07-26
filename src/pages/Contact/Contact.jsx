import Navbar from "../../componentes/Navbar/Navbar"
import Footer from "../../componentes/Footer/Footer"
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <Navbar />

      <main className="contact-page">
       

        <div className="contact-container">
          <aside className="contact-sidebar">
           
          </aside>

          <div className="contact-main">
            <h1 className="contact-title">
             
              Contact
            </h1>

            <p className="contact-text">
              Got a question about your project, a new enquiry, or need a quote? Reach us via
              . Our team replies as quickly as possible — we're here to help you grow.
            </p>

            <p className="contact-text">
              Already working with us? Check the status of your project directly
             . You'll only need the email address used to submit your brief and your project reference.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-head"> <h3>Telephone contact</h3></div>
                <p>Call us at <strong>+92 3XX XXX XXXX</strong></p>
              </div>
              <div className="contact-card">
                <div className="card-head"> <h3>Email us</h3></div>
                <p>Write to <strong>hello@growthstrategy.site</strong></p>
              </div>
            </div>

            <div className="contact-hours">
              <div className="card-head"> <h3>Opening hours</h3></div>
              <p>Monday to Friday: 09:00 – 18:00</p>
              <span>Karachi (PKT, GMT+5)</span>
            </div>

            <hr />

            <div className="contact-feedback">
              <p>Was this article helpful?</p>
              <div className="feedback-buttons">
                <button className="btn-yes">Yes</button>
                <button className="btn-no">No</button>
              </div>
            </div>

           
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Contact