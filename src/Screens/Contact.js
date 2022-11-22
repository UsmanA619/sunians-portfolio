import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import WarningBox from "../Components/WarningBox";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isError, setIsError] = useState(false);
  const [contactpayload, setContactpayload] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [contactpayloaderrors, setContactpayloaderrors] = useState({
    fname: false,
    lname: false,
    email: false,
    subject: false,
    message: false,
  });

  const contactform = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    const { fname, lname, email, subject, message } = contactpayload;

    if (
      fname.trim() === "" &&
      lname.trim() === "" &&
      email.trim() === "" &&
      subject.trim() === "" &&
      message.trim() === ""
    ) {
      setIsError(true);
      setLoading(false);
      setContactpayloaderrors({
        fname: true,
        lname: true,
        email: true,
        subject: true,
        message: true,
      });
      return;
    } else if (fname.trim() === "") {
      setIsError(true);
      setLoading(false);
      setContactpayloaderrors({
        ...contactpayloaderrors,
        fname: true,
      });
      return;
    } else if (lname.trim() === "") {
      setIsError(true);
      setLoading(false);
      setContactpayloaderrors({
        ...contactpayloaderrors,
        lname: true,
        fname: false,
      });
      return;
    } else if (email.trim() === "") {
      setIsError(true);
      setLoading(false);
      setContactpayloaderrors({
        ...contactpayloaderrors,
        email: true,
        lname: false,
        fname: false,
      });
      return;
    } else if (subject.trim() === "") {
      setIsError(true);
      setLoading(false);
      setContactpayloaderrors({
        ...contactpayloaderrors,
        subject: true,
        email: false,
        lname: false,
        fname: false,
      });
      return;
    } else if (message.trim() === "") {
      setIsError(true);
      setLoading(false);
      setContactpayloaderrors({
        ...contactpayloaderrors,
        message: true,
        subject: false,
        email: false,
        lname: false,
        fname: false,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_sy3rd9t", // service id
        "template_6jah26m", // template id
        contactform.current,
        "U6rpApK-92RTIM9tG" // public key
      )
      .then(
        () => {
          setIsSubmited(true);
        },
        (err) => {
          console.log(err);
          setLoading(false);
          setIsError(true);
          // alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="contactPage_Container">
      <h1 className="contactMe_heading">CONTACT ME</h1>
      <p className="contactMe_subheading">PLEASE COMPLETE THE FORM BELOW</p>

      <section className="contactPage_Section">
        <section>
          {isSubmited ? (
            <p style={{ fontSize: "18px", fontWeight: "300", height: "45vh" }}>
              Thank you!
            </p>
          ) : (
            <form
              ref={contactform}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {isError ? (
                <WarningBox
                  message="Your form has encountered a problem. Please scroll down to review."
                  mLeft="-8px"
                />
              ) : null}
              {contactpayloaderrors.fname || contactpayloaderrors.lname ? (
                <WarningBox message="Name is required." mTop="10px" />
              ) : null}
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
                  <label
                    htmlFor="fName"
                    className="contactPage_Section_inpTile"
                    style={{
                      color:
                        contactpayloaderrors.fname || contactpayloaderrors.lname
                          ? "#cc3b3b"
                          : "black",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    style={{
                      borderColor: contactpayloaderrors.fname
                        ? "#cc3b3b"
                        : "#cccccc",
                    }}
                    value={contactpayload.fname}
                    onChange={(e) =>
                      setContactpayload({
                        ...contactpayload,
                        fname: e.target.value,
                      })
                    }
                    className="contactPage_Section_inp"
                    type="text"
                    name="fName"
                    id="fName"
                  />
                  <label
                    htmlFor="fName"
                    className="contactPage_Section_inpTile_small"
                    style={{
                      color: contactpayloaderrors.fname ? "#cc3b3b" : "black",
                    }}
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
                    style={{
                      borderColor: contactpayloaderrors.lname
                        ? "#cc3b3b"
                        : "#cccccc",
                    }}
                    value={contactpayload.lname}
                    onChange={(e) =>
                      setContactpayload({
                        ...contactpayload,
                        lname: e.target.value,
                      })
                    }
                    className="contactPage_Section_inp"
                    type="text"
                    name="lName"
                    id="lName"
                  />
                  <label
                    htmlFor="lName"
                    className="contactPage_Section_inpTile_small"
                    style={{
                      color: contactpayloaderrors.lname ? "#cc3b3b" : "black",
                    }}
                  >
                    Last Name
                  </label>
                </div>
              </div>

              {contactpayloaderrors.email ? (
                <WarningBox message="Email is required." />
              ) : null}

              <div style={{ width: "100%", marginBottom: "30px" }}>
                <label
                  htmlFor="email"
                  className="contactPage_Section_inpTile"
                  style={{
                    color: contactpayloaderrors.email ? "#cc3b3b" : "black",
                  }}
                >
                  Email *
                </label>
                <input
                  style={{
                    borderColor: contactpayloaderrors.email
                      ? "#cc3b3b"
                      : "#cccccc",
                  }}
                  value={contactpayload.email}
                  onChange={(e) =>
                    setContactpayload({
                      ...contactpayload,
                      email: e.target.value,
                    })
                  }
                  id="email"
                  className="contactPage_Section_inp"
                  type="email"
                  name="email"
                />
              </div>

              {contactpayloaderrors.subject ? (
                <WarningBox message="Subject is required." />
              ) : null}

              <div style={{ width: "100%", marginBottom: "30px" }}>
                <label
                  htmlFor="subject"
                  className="contactPage_Section_inpTile"
                  style={{
                    color: contactpayloaderrors.subject ? "#cc3b3b" : "black",
                  }}
                >
                  Subject *
                </label>
                <input
                  value={contactpayload.subject}
                  onChange={(e) =>
                    setContactpayload({
                      ...contactpayload,
                      subject: e.target.value,
                    })
                  }
                  className="contactPage_Section_inp"
                  style={{
                    borderColor: contactpayloaderrors.subject
                      ? "#cc3b3b"
                      : "#cccccc",
                  }}
                  type="text"
                  name="subject"
                  id="subject"
                />
              </div>

              {contactpayloaderrors.message ? (
                <WarningBox message="Message is required." />
              ) : null}

              <div style={{ width: "100%", marginBottom: "30px" }}>
                <label
                  htmlFor="message"
                  className="contactPage_Section_inpTile"
                  style={{
                    color: contactpayloaderrors.message ? "#cc3b3b" : "black",
                  }}
                >
                  Message *
                </label>
                <textarea
                  value={contactpayload.message}
                  onChange={(e) =>
                    setContactpayload({
                      ...contactpayload,
                      message: e.target.value,
                    })
                  }
                  style={{
                    minHeight: "100px",
                    transition: "none",
                    borderColor: contactpayloaderrors.message
                      ? "#cc3b3b"
                      : "#cccccc",
                  }}
                  className="contactPage_Section_inp"
                  type="text"
                  name="message"
                  id="message"
                />
              </div>

              <button
                disabled={loading}
                className="contactPage_Section_sbmtBtn"
              >
                {loading ? "Submit..." : "Submit"}
              </button>
            </form>
          )}
        </section>
        <div className="contactpage_logo_div">
          <img src="assets/Logo.png" alt="logo" />
        </div>
      </section>
    </div>
  );
}
