import React from "react";
import { FaCheck } from "react-icons/fa";

const Products = () =>
  //         <div className="product-content p-5">
  //           <div className="prod-head text-center">
  //             <h2>THE GROWING NEED FOR ONSITE CLINICS</h2>
  //             <p className="text-left ">
  //               As we watch, the switch in the working condition is being changed
  //               to reflect the current situation.We are offering healthcare
  //               solutions to corporate employees and students to give them a
  //               healthy healthcare environment. Onsite clinics are a long term
  //               solution to maintain employees' and students' health, improve
  //               cost-effectiveness in terms of absenteeism, and also provide a
  //               stress free work environment and timely and easy access to primary
  //               and acute care.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  {
    return (
      <>
        <div className="navbar-area">
          <div className="container-fluid">
            <div className="product-page">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="prod-head">
                    <h1>Products</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-area ">
              <div className="container pricing-container">
                <div className="pricing-content">
                  <div className="pricing-heading text-center">
                    <h2 className="text-white mb-22">
                      THE GROWING NEED FOR ONSITE CLINICS
                    </h2>
                    <div className="para-pricing ">
                      <p>
                        As we watch, the switch in the working condition is
                        being changed to reflect the current situation.We are
                        offering healthcare solutions to corporate employees and
                        students to give them a healthy healthcare environment.
                        Onsite clinics are a long term solution to maintain
                        employees' and students' health, improve
                        cost-effectiveness in terms of absenteeism, and also
                        provide a stress free work environment and timely and
                        easy access to primary and acute care.
                      </p>
                    </div>
                    <div className="row rg-30">
                      <div className="col-md-6 col-sm-12">
                        <div className="pricing-card ">
                          <div className="pricing-card-content ">
                            <h5 className="plan-title pb-2">BASIC PLAN</h5>
                            <h6 className="plan-sub-title pb-3">
                              Basic-Package
                            </h6>
                            <span className="price">$179</span>
                            <span>/Month</span>

                            <ul className="pricing-list-content pt-20">
                              <li className="list-items-pricing ">
                                <FaCheck className="check-icon mr-2" />{" "}
                                <span className="pl-12">
                                  Qualified Nurse Deputation.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon" />{" "}
                                <span className="pl-12">
                                  {" "}
                                  Online and Offline Doctor Consultation as and
                                  when required.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                  Emergency Ambulance Services
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">OTC medicines.</span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                  Medical furniture and Fixtures.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                  Medical Consumable and Disposable.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                  Assistance in Hospital admission and at home
                                  Lab Services.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                  Accidental Cover of Rs.100000 per person.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                  Mental Wellness Sessions
                                  (Yoga,Meditation,Counselling Session)
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                  Physical Wellness Session
                                  (Physiotherapy,Diet,Zumba etc).
                                </span>
                              </li>
                            </ul>
                            {/* <div className="button-pricing">
                              <button className=" btn btn-primary">
                                Get started
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="pricing-card ">
                          <div className="pricing-card-content ">
                            <h5 className="plan-title pb-2">BASIC PLAN</h5>
                            <h6 className="plan-sub-title pb-3">
                              Premium-Package
                            </h6>
                            <span className="price">$179</span>
                            <span>/Month</span>

                            <ul className="pricing-list-content pt-20">
                              <li className="list-items-pricing ">
                                <FaCheck className="check-icon mr-2" />{" "}
                                <span className="pl-12">
                                  Student/ Employee Health Records
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon" />{" "}
                                <span className="pl-12">
                                  Qualified Nurse Deputation.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">Online and Offline Doctor Consultation as and when required.
</span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                Emergency Ambulance Services
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                Medical furniture and Fixtures.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                Medical Consumable and Disposable.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                OTC medicines.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                Assistance in Hospital admission and at home Lab Services.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                Accidental Cover of Rs.300000 per person.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                Annual Complete Health Checkup Camp including.
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                Mental Wellness Sessions (Yoga,Meditation,Counselling Session)
                                </span>
                              </li>
                              <li className="list-items-pricing ">
                                {" "}
                                <FaCheck className="check-icon " />
                                <span className="pl-12">
                                Physical Wellness Session (Physiotherapy,Diet,Zumba etc).
                                </span>
                              </li>
                            </ul>
                            {/* <div className="button-pricing">
                              <button className=" btn btn-primary">
                                Get started
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Products;
