import React from "react";
import Link from "next/link";
import Head from "../components/head";

const Home = () => (
  <>
    <Head title="Server Locator" />

    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>Server Locator</h1>
          <p>Know where is located the site server you access.</p>
          <form>
            <input className="w-100" type="text" autoFocus />
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Home;
