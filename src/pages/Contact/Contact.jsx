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
                <div className="card-head"> <h3>Email us</h3></div>
                <p>Write to <strong>info@kavehome.com</strong></p>
              </div>
            </div>

          

            <hr />

          

           
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Contact