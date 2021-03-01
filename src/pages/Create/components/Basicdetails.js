import React, { useEffect, useRef } from "react";

const BasicDetails = ({ formik }) => {
  /**
   * React refs are used to get the underlying dom element.
   * we create refs by calling useRef and attach it to the react-element's ref prop
   * for which we want the actual dom element.
   * we use refs for focusing,integrating with other libs, checking if user clicked this element or outside.
   */
  const nameIpRef = useRef();

  useEffect(() => {
    nameIpRef && nameIpRef.current.focus();
  }, []);

  return (
    <>
      <h4>Basic details</h4>
      <input
        ref={nameIpRef}
        placeholder="Name"
        id="nameIp"
        type="text"
        name="name"
        className="form-control mt-3"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {formik.errors.name && formik.touched.name ? (
        <div className="validation-error mt-2"> {formik.errors.name} </div>
      ) : null}

      <input
        placeholder="Email"
        id="emailIp"
        type="text"
        name="email"
        className="form-control mt-3"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {formik.errors.email && formik.touched.email ? (
        <div className="validation-error mt-2"> {formik.errors.email} </div>
      ) : null}

      <input
        placeholder="Address"
        id="addressIp"
        type="text"
        name="address"
        className="form-control mt-3"
        value={formik.values.address}
        onChange={formik.handleChange}
      />
      {formik.errors.address && formik.touched.address ? (
        <div className="validation-error mt-2"> {formik.errors.address} </div>
      ) : null}

      <input
        placeholder="Phone"
        id="phoneIp"
        type="text"
        name="phone"
        className="form-control mt-3"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      {formik.errors.phone && formik.touched.phone ? (
        <div className="validation-error mt-2"> {formik.errors.phone} </div>
      ) : null}
    </>
  );
};

export default BasicDetails;
