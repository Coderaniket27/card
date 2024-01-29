import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  // input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  // sub,it
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // validation logic

    if (!formData.firstname.trim()) {
      validationErrors.firstname = "First name is required";
    }

    if (!formData.lastname.trim()) {
      validationErrors.lastname = "Last name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      validationErrors.phone = "Phone number is not valid";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="contact-area  bg-overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="contact-form-container ">
                  <div className="contact-title">
                    <h1 className="contact-title mt-3">Request A Quote</h1>
                    <p className="contact-para">
                      We will be happy to answer your questions.
                    </p>
                  </div>
                  <div className="row d-flex">
                    <div className="col-md-6">
                      <form className="contact-form-input">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="firstname"
                          onChange={handleChange}
                        />
                        {errors.firstname && <span>{errors.firstname}</span>}
                      </form>
                    </div>
                    <div className="col-md-6">
                      <form className="contact-form-input">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="lastname"
                          onChange={handleChange}
                        />
                        {errors.lastname && <span>{errors.lastname}</span>}
                      </form>
                    </div>{" "}
                    <div className="col-md-6">
                      <form className="contact-form-input">
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                        />
                        {errors.email && <span>{errors.email}</span>}
                      </form>
                    </div>{" "}
                    <div className="col-md-6">
                      <div className="contact-form-input">
                        <input
                          type="tel"
                          placeholder="Phone"
                          name="phone"
                          maxLength={10}
                          onChange={handleChange}
                        />
                        {errors.phone && <span>{errors.phone}</span>}
                      </div>
                    </div>
                    <div className="col-12">
                      <form className="contact-form-input ">
                        <textarea
                          placeholder="Your Message "
                          className="p-2"
                          rows={4}
                        />
                      </form>
                    </div>
                    <div className="col-sm-6 align-self-center">
                      <div class="bottom-form style-checkbox">
                        <input type="checkbox" />
                        Also subscribe us
                      </div>
                    </div>
                    <div className="col-sm-6 text-sm-right">
                      <button className="btn btn-secondary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 pt-20 align-self-end">
                <div class="mt-5 mt-lg-0">
                  <ul class="right-list-wrap">
                    <li class="right-list-inner style-white style-check-box-grid-2">
                      <div class="media-contact  d-flex flex-start">
                        <div class="media-contact-left">
                          <img src="contact1.png" alt="img" />
                        </div>
                        <div class="contact-media-body align-self-center">
                          <h5 className="contact-head">Our Address</h5>
                          <p className="contact-para">PSD Building, 2 AlBahr</p>
                          <p className="contact-para">St, Loskia sripur</p>
                        </div>
                      </div>
                    </li>
                    <li class="right-list-innerr style-white style-check-box-grid-2">
                      <div class="media-contact  d-flex ">
                        <div class="media-contact-left">
                          <img src="17.png" alt="img" />
                        </div>
                        <div class="contact-media-body mb-20 align-self-center">
                          <h5 className="contact-head">Our Phone</h5>
                          <p className="contact-para">+0029129102320</p>
                          <p className="contact-para">+000 2324 39493</p>
                        </div>
                      </div>
                    </li>
                    <li class="right-list-inner style-white style-check-box-grid-2">
                      <div class="media-contact  d-flex ">
                        <div class="media-contact-left">
                          <img src="/18.png" alt="img" />
                        </div>
                        <div class="contact-media-body mb-20 align-self-center">
                          <h5 className="contact-head">Our Email</h5>
                          <p className="contact-para">name@website.com</p>
                          <p className="contact-para">info@orex.com</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
