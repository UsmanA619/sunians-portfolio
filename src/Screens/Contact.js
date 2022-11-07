import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const contactform = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2codyvd", // service id
        "template_nrllo7m", // template id
        contactform.current,
        "BF22YShsi7iTh0GpB" // public key
      )
      .then(
        () => {
          window.location.reload(false);
        },
        (err) => {
          console.log(err);
          setLoading(false);
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="contactPage_Container">
      <h1 className="contactMe_heading">CONTACT ME</h1>
      <p className="contactMe_subheading">PLEASE COMPLETE THE FORM BELOW</p>

      <section className="contactPage_Section">
        <section>
          <form
            ref={contactform}
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div style={{ width: "50%" }}>
                <label htmlFor="fName" className="contactPage_Section_inpTile">
                  Name *
                </label>
                <input
                  className="contactPage_Section_inp"
                  type="text"
                  name="fName"
                  id="fName"
                />
                <label
                  htmlFor="fName"
                  className="contactPage_Section_inpTile_small"
                >
                  First Name
                </label>
              </div>

              <div style={{ width: "50%" }}>
                <label
                  htmlFor="fName"
                  className="contactPage_Section_inpTile"
                  style={{ visibility: "hidden" }}
                >
                  Name *
                </label>
                <input
                  className="contactPage_Section_inp"
                  type="text"
                  name="lName"
                  id="lName"
                />
                <label
                  htmlFor="lName"
                  className="contactPage_Section_inpTile_small"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div style={{ width: "100%", marginBottom: "30px" }}>
              <label htmlFor="email" className="contactPage_Section_inpTile">
                Email *
              </label>
              <input
                id="email"
                className="contactPage_Section_inp"
                type="email"
                name="email"
              />
            </div>

            <div style={{ width: "100%", marginBottom: "30px" }}>
              <label htmlFor="subject" className="contactPage_Section_inpTile">
                Subject *
              </label>
              <input
                className="contactPage_Section_inp"
                type="text"
                name="subject"
                id="subject"
              />
            </div>

            <div style={{ width: "100%", marginBottom: "30px" }}>
              <label htmlFor="message" className="contactPage_Section_inpTile">
                Message *
              </label>
              <textarea
                style={{ minHeight: "100px", transition: "none" }}
                className="contactPage_Section_inp"
                type="text"
                name="message"
                id="message"
              />
            </div>

            <button disabled={loading} className="contactPage_Section_sbmtBtn">
              {loading ? "Submit..." : "Submit"}
            </button>
          </form>
        </section>
        <div className="contactpage_logo_div">
          <img src="assets/Logo.png" alt="logo" />
        </div>
      </section>
    </div>
  );
}
