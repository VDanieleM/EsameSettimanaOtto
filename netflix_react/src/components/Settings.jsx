import React from "react";
import Avatar from "../assets/avatar.png";

export default function Profile() {
    return (
        <div className="container text-white">
        <h1 className="h1 mt-5">Account</h1>
        <hr />
  
        <div className="row">
          <div className="col">
            <p className="h5 text-white opacity-50">MEMBERSHIP & BILLING</p>
            <button className="btn bg-secondary-subtle text-black rounded-0 border-secondary-subtle border-1 border-start-0 border-end-0 border-top-0 py-2 px-4">Cancel Membership</button>
          </div>
  
          <div className="col">
            <p className="hey">student@strive.school</p>
            <p className="opacity-50 hey">Password: ********</p>
            <p className="opacity-50 hey">Phone: 321 044 1279</p>
          </div>
  
          <div className="col end">
            <p className="text-info hey">Change account email</p>
            <p className="text-info hey">Change password</p>
            <p className="text-info hey">Change phone number</p>
          </div>
        </div>
  
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8"><hr /></div>
        </div>
  
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 d-flex align-items-start">
            <p className="hey fw-bold fst-italic ppl pe-2">PayPal</p>
            <p className="hey">admin@strive.school</p>
          </div>
  
          <div className="col-4 end">
            <p className="text-info hey">Update payment info</p>
            <p className="text-info hey">Billing details</p>
          </div>
        </div>
  
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8"><hr /></div>
        </div>
  
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4 end">
            <p className="text-info hey">Redeem gift card or promo code</p>
            <p className="text-info hey">Where to buy gift cards</p>
          </div>
        </div>
  
        <hr />
  
        <div className="row">
          <div className="col">
            <p className="h5 text-white opacity-50">PLAN DETAILS</p>
          </div>
  
          <div className="col d-flex">
            <p className="hey fw-bold pe-2">Premium</p>
            <button className="d-flex border-1 border-black bg-white rounded-1 px-1 m-0">
              <p className="me-1 bottone">ULTRA</p>
              <p className="fw-bold bottone">HD</p>
            </button>
          </div>
  
          <div className="col end">
            <p className="text-info hey">Change plan</p>
          </div>
        </div>
  
        <hr className="mt-3" />
  
        <div className="row">
          <div className="col">
            <p className="h5 text-white opacity-50">SETTINGS</p>
          </div>
  
          <div className="col">
            <p className="text-info hey">Parental controls</p>
            <p className="text-info hey">Test participation</p>
            <p className="text-info hey">Manage download devices</p>
            <p className="text-info hey">Activate a device</p>
            <p className="text-info hey">Recent device streaming activity</p>
            <p className="text-info hey">Sign out of all devices</p>
          </div>
  
          <div className="col"></div>
        </div>
  
        <hr className="mt-3" />
  
        <div className="row mb-5 pb-2">
          <div className="col">
            <p className="h5 text-white opacity-50">MY PROFILE</p>
          </div>
  
          <div className="col d-flex">
            <a href="profilo.html"><img src={Avatar} alt="logo" width="23px" className="me-2" /></a>
            <p className="hey fw-bold">Strive Student</p>
          </div>
  
          <div className="col"></div>
  
          <div className="col end">
            <p className="text-info hey">Manage profiles</p>
            <p className="text-info hey">Add profile email</p>
          </div>
  
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <p className="text-info hey">Language</p>
              <p className="text-info hey">Playback settings</p>
              <p className="text-info hey">Subtitle appearance</p>
            </div>
            <div className="col">
              <p className="text-info hey">Viewing activity</p>
              <p className="text-info hey">Ratings</p>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
}