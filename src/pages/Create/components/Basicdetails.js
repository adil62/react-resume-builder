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
        error={formik.touched.name && Boolean(formik.errors.name)}
      />
      <div className="validation-error mt-2"> {formik.errors?.name} </div>

      <input
        placeholder="Email"
        id="emailIp"
        type="text"
        name="email"
        className="form-control mt-3"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <div className="validation-error mt-2"> {formik.errors?.email} </div>

      <input
        placeholder="Address"
        id="addressIp"
        type="text"
        name="address"
        className="form-control mt-3"
        value={formik.values.address}
        onChange={formik.handleChange}
        error={formik.touched.address && Boolean(formik.errors.address)}
      />
      <div className="validation-error mt-2"> {formik.errors?.address} </div>

      <input
        placeholder="Phone"
        id="phoneIp"
        type="text"
        name="phone"
        className="form-control mt-3"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
      />
      <div className="validation-error mt-2"> {formik.errors?.phone} </div>
    </>
  );
};

export default BasicDetails;
