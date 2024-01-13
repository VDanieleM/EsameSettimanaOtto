import React from "react";
import Avatar from "../assets/avatar.png";

export default function Settings() {
    return (
        <div className="container paddingone text-white mt-5" style={{ width: "50%" }}>
          <h1 className="h1 text-white">Edit Profile</h1>
          <hr />
          <div className="row">
            <div className="col-3 d-block text-end">
              <img src={Avatar} alt="avatar" width="70%" />
            </div>
            <div className="col-9">
              <button className="btn btn-secondary text-white rounded-0 student">Strive Student</button>
              <p className="mt-4 h6">Language:</p>
              <select className="form-select bg-black text-white border-secondary rounded-0 english" aria-label="Default select example">
                <option selected>English</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <hr />
              <p className="mt-4 h6">Maturity Settings:</p>
              <button className="btn bg-dark border-0 text-white rounded-0 mb-3">ALL MATURITY RATINGS</button>
              <p>Show titles of all maturity ratings for this profile.</p>
              <button className="btn border-secondary rounded-0 bgcolor text-secondary px-4 mb-3">EDIT</button>
              <hr />
              <p className="h6">Autoplay controls</p>
              <div className="row">
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input bgcolor border-secondary rounded-0 checko" type="checkbox" value="" id="flexCheckDefault1" />
                    <label className="form-check-label bgcolor border-secondary rounded-0" htmlFor="flexCheckDefault1">
                      <p>Autoplay next episode in a series on all devices.</p>
                    </label>
                  </div>
                </div>
                <div className="col-12 mtp">
                  <div className="form-check">
                    <input className="form-check-input bgcolor border-secondary rounded-0 checko" type="checkbox" value="" id="flexCheckDefault2" />
                    <label className="form-check-label bgcolor border-secondary rounded-0" htmlFor="flexCheckDefault2">
                      <p>Autoplay previews while browsing on all devices.</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex d-md-block justify-content-center align-items-center">
            <a href="index.html"><button className="btn bg-white text-black border-0 rounded-0 px-4 fw-bold space">SAVE</button></a>
            <button className="btn bgcolor rounded-0 text-secondary border-secondary px-4 mx-2 space">CANCEL</button>
            <button className="btn bgcolor rounded-0 text-secondary border-secondary px-6 space">DELETE PROFILE</button>
          </div>
        </div>
      );
    }