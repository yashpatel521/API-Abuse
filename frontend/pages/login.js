import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function login() {
  const [emailOne, setEmailOne] = useState("yash@gmail.com");
  const [passwordOne, setPasswordOne] = useState("Yash1234$");

  const submitHandlerOne = (e) => {
    e.preventDefault();
    if (!emailOne || !passwordOne) return;

    console.log(emailOne + " " + passwordOne);
  };

  const [emailTwo, setEmailTwo] = useState("yash@gmail.com");
  const [passwordTwo, setPasswordTwo] = useState("Yash1234$");

  const submitHandlerTwo = (e) => {
    e.preventDefault();
    if (!emailTwo || !passwordTwo) return;

    console.log(emailTwo + " " + passwordTwo);
  };

  const [emailThree, setEmailThree] = useState("abc@gmail.com");
  const [passwordThree, setPasswordThree] = useState("986523");

  const submitHandlerThree = (e) => {
    e.preventDefault();
    if (!emailThree || !passwordThree) return;

    console.log(emailThree + " " + passwordThree);
  };

  return (
    <>
      <div
        className={styles.slImgBg}
        style={{
          backgroundImage: 'url("/images/api2.png")',
          opacity: 0.9,
          filter: "blur(7px)",
        }}
      ></div>

      <div
        className={`position-absolute text-white container-fluid p-5 text-center`}
      >
        <div>
          <h1>API Abuse Example</h1>
          <h3>Attack Example</h3>
          <Link href="/" className="btn btn-primary mb-3">
            Back to home
          </Link>
        </div>

        <div className="container mb-5 ">
          <div className="container mt-5 border p-2 bg-secondary">
            <h1 className="ul">Simple Login API</h1>
            <hr />
            <div className="row">
              <div className="col-sm-5">
                <form
                  id="loginFormOne"
                  method="POST"
                  onSubmit={submitHandlerOne}
                >
                  <div className="mb-3 row">
                    <label
                      htmlFor="staticEmail"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="emailOne"
                        name="email"
                        defaultValue="yash@gmail.com"
                        onChange={(e) => setEmailOne(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-2 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="passwordOne"
                        name="password"
                        defaultValue="Yash1234$"
                        onChange={(e) => setPasswordOne(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <input
                      type="submit"
                      className="btn btn-primary mb-3"
                      defaultValue="Submit"
                    />
                  </div>
                </form>
              </div>
              <div className="col-sm-7">
                <h3>Output of API Call</h3>
                <div className="border p-2">
                  <pre id="messageOne"></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 border p-2 bg-secondary">
          <h1 className="ul">SQL Injection</h1>
          <hr />
          <div className="row">
            <div className="col-sm-5">
              <form id="loginFormTwo" onSubmit={submitHandlerTwo}>
                <div className="mb-3 row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="emailTwo"
                      name="email"
                      defaultValue="yash@gmail.com"
                      onChange={(e) => setEmailTwo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="passwordTwo"
                      name="password"
                      defaultValue="'or'1=1"
                      onChange={(e) => setPasswordTwo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <input
                    type="submit"
                    className="btn btn-primary mb-3"
                    defaultValue="Submit"
                  />
                </div>
              </form>
            </div>
            <div className="col-sm-7">
              <h3>Output of API Call</h3>
              <div className="border p-2">
                <pre id="messageTwo"></pre>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5 border p-2 bg-secondary">
          <h1 className="ul">Brute Force Attack</h1>
          <hr />
          <div className="row">
            <div className="col-sm-5">
              <form id="loginFormThree" onSubmit={submitHandlerThree}>
                <div className="mb-3 row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="emailThree"
                      name="email"
                      defaultValue="abc@gmail.com"
                      onChange={(e) => setEmailThree(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="passwordThree"
                      name="password"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <input
                    type="submit"
                    className="btn btn-primary mb-3"
                    defaultValue="Submit"
                  />
                </div>
                <p id="passwordCount"></p>
              </form>
            </div>
            <div className="col-sm-7">
              <h3>Output of API Call</h3>
              <div className="border p-2">
                <pre id="messageThree"></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
