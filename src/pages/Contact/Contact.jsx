import React, { useEffect, useState, useRef } from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';
import Success from './Success/Success';

const Contact = () => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [subject, setSubject] = useState(false);
  const [message, setMessage] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [submittable, setSubmittable] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [refNum, setRefNum] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (email === true) setValidEmail(true);
    else
      /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+/.test(email)
        ? setValidEmail(true)
        : setValidEmail(false);
  }, [email]);

  useEffect(() => {
    inputRefs.current[refNum].focus();
  }, [refNum]);

  useEffect(() => {
    if (name && email && subject && message && validEmail) setSubmittable(true);
    else setSubmittable(false);
  }, [name, email, subject, message, validEmail]);

  useEffect(() => {
    emailjs.init('user_tLujmeoZ8OZzQdCSgZBiu');
  });
  const addToRefs = (el) => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };

  const sendEmail = () => {
    if (submittable) {
      setSubmitted(true);
    } else {
      if (name && email && subject && message && !validEmail) {
        alert('Enter a valid email');
      } else {
        alert('All textfield must be field!');
      }
    }
  };
  return (
    <div className="Contact" id="contact">
      <div className="q3 fake-cta">Get In Touch</div>
      <div className="container">
        <div className="contact-wrapper">
          <div className="content-container">
            {submitted ? (
              <Success />
            ) : (
              <>
                <div className="desc">
                  <p className="text-large">Let's talk!</p>
                  <p className="text-large">
                    I’m always available on{' '}
                    <a
                      className="q3"
                      target="blank"
                      href="https://www.linkedin.com/in/george-litos-215b2918a/"
                    >
                      linkedIn
                    </a>{' '}
                    and by{' '}
                    <a className="q3" href="mailto:georgioslytos@gmail.com">
                      email
                    </a>
                    , but you can fill out this fancy form!
                  </p>
                </div>
                <div action="" className="forms-wrapper">
                  <div className="row">
                    <div className="form-control">
                      <div className="h5">name</div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="John Doe"
                        className="input"
                        ref={addToRefs}
                        style={
                          name !== ''
                            ? { borderBottom: '1px solid #00ffec' }
                            : { borderBottom: '1px solid #ff0000' }
                        }
                        onChange={(e) => setName(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') setRefNum(refNum + 1);
                        }}
                        onFocus={(e) => {
                          setRefNum(0);
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <div className="h5">email</div>
                      <input
                        type="emai"
                        name="name"
                        id="name"
                        placeholder="johndoe@nowhere.com"
                        className="input"
                        ref={addToRefs}
                        style={
                          email === false
                            ? { borderBottom: '1px solid #00ffec' }
                            : validEmail
                            ? { borderBottom: '1px solid #00ffec' }
                            : { borderBottom: '1px solid #ff0000' }
                        }
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') setRefNum(refNum + 1);
                        }}
                        onFocus={(e) => {
                          setRefNum(1);
                        }}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <div className="h5">subject</div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Let me tell you something..."
                      className="input"
                      style={
                        subject !== ''
                          ? { borderBottom: '1px solid #00ffec' }
                          : { borderBottom: '1px solid #ff0000' }
                      }
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') setRefNum(refNum + 1);
                      }}
                      onFocus={(e) => {
                        setRefNum(2);
                      }}
                      onChange={(e) => setSubject(e.target.value)}
                      ref={addToRefs}
                    />
                  </div>
                  <div className="form-control">
                    <div className="h5">message</div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="You are literally the worst... Like... Really!"
                      className="input"
                      style={
                        message !== ''
                          ? { borderBottom: '1px solid #00ffec' }
                          : { borderBottom: '1px solid #ff0000' }
                      }
                      onFocus={(e) => {
                        setRefNum(3);
                      }}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') sendEmail();
                      }}
                      ref={addToRefs}
                    />
                  </div>
                  <a
                    className={`q3 cta ${submittable ? '' : 'forbidden'}`}
                    onClick={() => sendEmail()}
                  >
                    Send
                  </a>
                </div>
              </>
            )}
            <div className="text-center footer">
              <div className="text-small">designed & developed by</div>
              <div className="text-small">George Litos</div>
            </div>
          </div>
          <div className="links-wrapper">
            <a href="mailto:georgioslytos@gmail.com" className="mail">
              georgioslytos@gmail.com
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/george-litos-215b2918a/"
            >
              <svg
                width="28"
                className="icon"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26 0C26.5417 0 27 0.208333 27.375 0.625C27.7917 1 28 1.45833 28 2V26C28 26.5417 27.7917 27 27.375 27.375C27 27.7917 26.5417 28 26 28H2C1.45833 28 0.979167 27.7917 0.5625 27.375C0.1875 27 0 26.5417 0 26V2C0 1.45833 0.1875 1 0.5625 0.625C0.979167 0.208333 1.45833 0 2 0H26ZM8.4375 24H8.5V10.625H4.3125V24H8.4375ZM4.6875 8.125C5.14583 8.58333 5.70833 8.8125 6.375 8.8125C7.04167 8.8125 7.60417 8.58333 8.0625 8.125C8.5625 7.625 8.8125 7.0625 8.8125 6.4375C8.8125 5.77083 8.5625 5.20833 8.0625 4.75C7.60417 4.25 7.04167 4 6.375 4C5.70833 4 5.14583 4.25 4.6875 4.75C4.22917 5.20833 4 5.77083 4 6.4375C4 7.0625 4.22917 7.625 4.6875 8.125ZM24 24V16.6875C24 15.6875 23.9375 14.8333 23.8125 14.125C23.6875 13.4167 23.4583 12.7708 23.125 12.1875C22.7917 11.5625 22.2708 11.1042 21.5625 10.8125C20.8958 10.4792 20.0625 10.3125 19.0625 10.3125C18.1042 10.3125 17.2708 10.5208 16.5625 10.9375C15.8958 11.3542 15.4167 11.8542 15.125 12.4375H15.0625V10.625H11.0625V24H15.25V17.375C15.25 16.3333 15.4167 15.5 15.75 14.875C16.0833 14.25 16.7292 13.9375 17.6875 13.9375C18.1875 13.9375 18.6042 14.0417 18.9375 14.25C19.2708 14.4583 19.4792 14.7708 19.5625 15.1875C19.6875 15.6042 19.7708 15.9792 19.8125 16.3125C19.8542 16.6042 19.875 17 19.875 17.5V24H24Z"
                  fill="#C5C6C7"
                />
              </svg>
            </a>
            <a href="https://github.com/giorgoslytos" target="blank">
              <svg
                width="31"
                className="icon"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.375 24.8125C10.375 24.9792 10.2708 25.0625 10.0625 25.0625C9.8125 25.1042 9.6875 25.0208 9.6875 24.8125C9.6875 24.6875 9.79167 24.625 10 24.625C10.25 24.5833 10.375 24.6458 10.375 24.8125ZM8.6875 24.875C8.4375 24.8333 8.33333 24.7292 8.375 24.5625C8.45833 24.3958 8.60417 24.3542 8.8125 24.4375C9.02083 24.4792 9.10417 24.5833 9.0625 24.75C9.02083 24.9167 8.89583 24.9583 8.6875 24.875ZM11.1875 24.4375C11.3958 24.4375 11.5 24.5 11.5 24.625C11.5417 24.75 11.4583 24.8542 11.25 24.9375C11.0417 24.9792 10.9167 24.9167 10.875 24.75C10.875 24.5833 10.9792 24.4792 11.1875 24.4375ZM15.3125 0.5C18.1458 0.5 20.7708 1.16667 23.1875 2.5C25.6042 3.83333 27.5 5.66667 28.875 8C30.2917 10.3333 31 12.9167 31 15.75C31 19.2083 30.0208 22.3125 28.0625 25.0625C26.1458 27.7708 23.625 29.6458 20.5 30.6875C20.1667 30.7708 19.8958 30.7292 19.6875 30.5625C19.5208 30.3958 19.4375 30.1875 19.4375 29.9375C19.4375 29.8958 19.4375 29.2292 19.4375 27.9375C19.4375 26.6042 19.4375 25.5208 19.4375 24.6875C19.4375 23.3542 19.0833 22.3958 18.375 21.8125C19.2917 21.6875 20 21.5833 20.5 21.5C21 21.4167 21.625 21.2292 22.375 20.9375C23.125 20.6458 23.6875 20.2708 24.0625 19.8125C24.4792 19.3542 24.8333 18.7083 25.125 17.875C25.4167 17.0417 25.5625 16.0417 25.5625 14.875C25.5625 14.0833 25.4375 13.4375 25.1875 12.9375C24.9375 12.4375 24.5208 11.875 23.9375 11.25C24.4375 9.95833 24.3958 8.54167 23.8125 7C23.3958 6.875 22.8333 6.95833 22.125 7.25C21.4167 7.5 20.7917 7.79167 20.25 8.125L19.5 8.6875C18.2083 8.3125 16.875 8.125 15.5 8.125C14.1667 8.125 12.875 8.3125 11.625 8.6875C11.4167 8.52083 11.125 8.33333 10.75 8.125C10.375 7.875 9.79167 7.60417 9 7.3125C8.25 6.97917 7.6875 6.875 7.3125 7C6.6875 8.54167 6.625 9.95833 7.125 11.25C6.16667 12.2917 5.6875 13.5 5.6875 14.875C5.6875 16.0417 5.83333 17.0417 6.125 17.875C6.41667 18.7083 6.75 19.3542 7.125 19.8125C7.5 20.2708 8.04167 20.6458 8.75 20.9375C9.45833 21.2292 10.0625 21.4375 10.5625 21.5625C11.1042 21.6458 11.8125 21.7292 12.6875 21.8125C12.1458 22.3125 11.8125 23.0208 11.6875 23.9375C11.2708 24.1042 10.8333 24.2292 10.375 24.3125C9.95833 24.3958 9.41667 24.3125 8.75 24.0625C8.08333 23.8125 7.54167 23.3333 7.125 22.625C6.875 22.1667 6.54167 21.8125 6.125 21.5625C5.75 21.2708 5.41667 21.1042 5.125 21.0625L4.75 21C3.83333 21 3.79167 21.3125 4.625 21.9375C4.91667 22.1042 5.20833 22.375 5.5 22.75C5.79167 23.125 6 23.4583 6.125 23.75L6.375 24.25C6.54167 24.75 6.83333 25.1667 7.25 25.5C7.66667 25.8333 8.125 26.0417 8.625 26.125C9.125 26.2083 9.60417 26.25 10.0625 26.25C10.5208 26.25 10.8958 26.2292 11.1875 26.1875L11.625 26.125C11.625 26.625 11.625 27.375 11.625 28.375C11.6667 29.375 11.6875 29.8958 11.6875 29.9375C11.6875 30.1875 11.5833 30.3958 11.375 30.5625C11.2083 30.7292 10.9583 30.7708 10.625 30.6875C7.45833 29.6458 4.89583 27.7708 2.9375 25.0625C0.979167 22.3125 0 19.2083 0 15.75C0 11.4167 1.45833 7.79167 4.375 4.875C7.33333 1.95833 10.9792 0.5 15.3125 0.5ZM6.0625 22.0625C6.14583 21.9792 6.25 22 6.375 22.125C6.5 22.25 6.52083 22.3542 6.4375 22.4375C6.35417 22.5208 6.25 22.5 6.125 22.375C6 22.25 5.97917 22.1458 6.0625 22.0625ZM5.375 21.5625C5.45833 21.4792 5.5625 21.4583 5.6875 21.5C5.8125 21.5833 5.85417 21.6667 5.8125 21.75C5.77083 21.875 5.6875 21.8958 5.5625 21.8125C5.39583 21.7292 5.33333 21.6458 5.375 21.5625ZM7.4375 23.75C7.52083 23.625 7.64583 23.6458 7.8125 23.8125C7.97917 23.9792 8.02083 24.125 7.9375 24.25C7.8125 24.375 7.66667 24.3542 7.5 24.1875C7.33333 24.0208 7.3125 23.875 7.4375 23.75ZM6.6875 22.875C6.8125 22.75 6.9375 22.7917 7.0625 23C7.1875 23.1667 7.1875 23.2917 7.0625 23.375C6.9375 23.4583 6.8125 23.4167 6.6875 23.25C6.60417 23.0417 6.60417 22.9167 6.6875 22.875Z"
                  fill="#C5C6C7"
                />
              </svg>
            </a>
            <div className="vertical-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
