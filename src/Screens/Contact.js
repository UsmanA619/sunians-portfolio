import React from "react";

export default function Contact() {
  return (
    <div className="contactPage_Container">
      <h1 className="contactMe_heading">CONTACT ME</h1>
      <p className="contactMe_subheading">PLEASE COMPLETE THE FORM BELOW</p>

      <section className="contactPage_Section">
        <section>
          <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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
                <label htmlFor="fName" className="contactPage_Section_inpTile">Name *</label>
                <input
                  className="contactPage_Section_inp"
                  type="text"
                  name=""
                  id="fName"
                />
                <label htmlFor="fName" className="contactPage_Section_inpTile_small">First Name</label>
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
                  name=""
                  id="lName"
                />
                <label htmlFor="lName" className="contactPage_Section_inpTile_small">Last Name</label>
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
                name=""
              />
            </div>

            <div style={{ width: "100%", marginBottom: "30px" }}>
              <label htmlFor="subject" className="contactPage_Section_inpTile">
                Subject *
              </label>
              <input
                className="contactPage_Section_inp"
                type="text"
                name=""
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
                name=""
                id="message"
              />
            </div>

            <button className="contactPage_Section_sbmtBtn">Submit</button>
          </form>
        </section>
        <div className="contactpage_logo_div">
          <img src="assets/Logo.png" alt="logo" />
        </div>
      </section>
    </div>
  );
}
