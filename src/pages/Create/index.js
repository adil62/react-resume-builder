import React, { useRef } from "react";
import Navbar from "../../components/shared/Navbar";
import styled from "styled-components";
import * as yup from "yup";
import { useFormik } from "formik";
import Select from "react-select";
import { useReactToPrint } from "react-to-print";
import { useSelector, useDispatch } from "react-redux";

import BasicDetails from "./components/Basicdetails";
import Education from "./components/Education";
import Experience from "./components/Experience";

import ResumeTemplate1 from "./components/ResumeTemplate1";

const Styles = styled.div`
  .header h2 {
    color: ${(props) => props.theme.colors.primary};
  }
  .btn-build {
    background-color: ${(props) => props.theme.colors.dark};
    color: white;
    border: none;
    border-radius: 4px;
    display: block;
    margin-bottom: 40px;
  }
  .btn-print {
    background-color: ${(props) => props.theme.colors.green};
    color: white;
    border: none;
    border-radius: 4px;
    display: block;
    margin-bottom: 40px;
  }
  .section {
    & h4 {
      color: ${(props) => props.theme.colors.dark};
      font-weight: 300;
    }
    & form {
      width: 86%;
    }
    & {
      justify-content: center;
    }
    input {
      width: 75%;
    }
  }
  .add-ico {
    &:hover {
      transform: scale(1.1);
    }
    cursor: pointer;
    width: 25px;
  }
  .edu-container {
    display: flex;
    justify-content: space-between;
  }
  .validation-error {
    color: red;
    text-transform: capitalize;
  }
`;

const CreateResumeForm = () => {
  const createResumeState = useSelector((state) => state.createResume);
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required"),
    address: yup.string().required("address is required"),
    phone: yup.string().required("phone is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      educationDetails: [{ institute: "", degree: "", year: "" }],
      experienceDetails: [{ company: "", designation: "", year: "" }],
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      dispatch({ type: "CREATE_RESUME.SET_FORM", payload: values });
    },
  });

  const skills = [
    { value: "react", label: "React" },
    { value: "laravel", label: "Laravel" },
    { value: "js", label: "Js" },
    { value: "node.js", label: "Node.js" },
    { value: "svelte", label: "Svelte" },
    { value: "vue", label: "Vue" },
    { value: "react-native", label: "React-native" },
    { value: "php", label: "Php" },
    { value: "mysql", label: "Mysql" },
    { value: "mongodb", label: "Mongodb" },
    { value: "java", label: "Java" },
  ];

  // print
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onPrintClick = () => {
    handlePrint();

    dispatch({ type: "CREATE_RESUME.PRINT_CLICKED" });
  };

  return (
    <Styles>
      <Navbar />
      <div className="container">
        <div>
          <form className="row" onSubmit={formik.handleSubmit}>
            <div className="col-md-12 header">
              <h2>Create Resume </h2>
            </div>

            <div className="section basic-details col-md-6 mt-4">
              <BasicDetails formik={formik} />
            </div>

            {/* education  */}
            <div className="section education col-md-6 mt-4">
              <Education formik={formik} />
            </div>

            {/* experience  */}
            <div className="section experience col-md-6 mt-4">
              <Experience formik={formik} />
            </div>

            {/* skills */}
            <div className="section skills col-md-6  mt-4">
              <h4>Skills</h4>
              <Select
                defaultValue={[]}
                isMulti
                name="skills"
                options={skills}
                className="basic-multi-select"
                classNamePrefix="select"
                maxMenuHeight={150}
                onChange={(option) =>
                  formik.setFieldValue("skills", [...option, option.value])
                }
              />
            </div>

            <div className="col-md-12 d-flex justify-content-center">
              {createResumeState?.isResumeCreated ? (
                <button
                  type="button"
                  className="btn-print py-2 px-4 mt-5 ml-3"
                  onClick={onPrintClick}
                >
                  Download
                </button>
              ) : (
                <button type="submit" className="btn-build py-2 px-4 mt-5">
                  Build
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="d-none">
        <div ref={componentRef}>
          <ResumeTemplate1 />
        </div>
      </div>
    </Styles>
  );
};

export default CreateResumeForm;
