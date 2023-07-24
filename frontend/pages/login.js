import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function login() {
  return (
    <>
      {/* <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2> */}
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
        </div>

        <div className="container mb-5 ">
          <div className="container mt-5 border p-2 bg-secondary">
            <h1 className="ul">Simple Login API</h1>
            <hr />
            <div className="row">
              <div className="col-sm-5">
                <form id="loginFormOne">
                  <div className="mb-3 row">
                    <label
                      for="staticEmail"
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
                        value="yash@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      for="inputPassword"
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
                        value="Yash1234$"
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <input
                      type="submit"
                      className="btn btn-primary mb-3"
                      value="Submit"
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
          <div className="container mt-5 border p-2 bg-secondary">
            <h1 className="ul">SQL Injection</h1>
            <hr />
            <div className="row">
              <div className="col-sm-5">
                <form id="loginFormTwo">
                  <div className="mb-3 row">
                    <label
                      for="staticEmail"
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
                        value="yash@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      for="inputPassword"
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
                        value="'or'1=1"
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <input
                      type="submit"
                      className="btn btn-primary mb-3"
                      value="Submit"
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
                <form id="loginFormThree">
                  <div className="mb-3 row">
                    <label
                      for="staticEmail"
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
                        value="abc@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      for="inputPassword"
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
                        readonly
                      />
                    </div>
                  </div>
                  <div className="col-auto">
                    <input
                      type="submit"
                      className="btn btn-primary mb-3"
                      value="Submit"
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
      </div>
    </>
  );
}
