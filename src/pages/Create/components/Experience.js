import Add from "../../../assets/icons/add.svg";
import { FieldArray, FormikProvider, Field } from "formik";

const Experience = ({ formik }) => {
  return (
    <>
      <FormikProvider value={formik}>
        <h4>Experience</h4>
        <FieldArray
          name="experienceDetails"
          render={(arrayHelpers) => (
            <div>
              {formik.values.experienceDetails.map((edu, index) => (
                <div key={index}>
                  <div className="edu-container mt-3">
                    <Field
                      placeholder="company"
                      type="text"
                      name={`experienceDetails.${index}.company`}
                      className="form-control mr-2"
                    />
                    <Field
                      placeholder="designation"
                      type="text"
                      name={`experienceDetails.${index}.designation`}
                      className="form-control mr-2"
                    />
                    <Field
                      placeholder="Year"
                      type="text"
                      name={`experienceDetails.${index}.year`}
                      className="form-control mr-2"
                    />
                    <img
                      src={Add}
                      alt="add new row"
                      className="add-ico"
                      onClick={() =>
                        arrayHelpers.push({
                          company: "",
                          designation: "",
                          year: "",
                        })
                      }
                    />
                  </div>
                </div>
              ))}
              {/* <span class="form-text">Required.</span> */}
            </div>
          )}
        />
      </FormikProvider>
    </>
  );
};

export default Experience;
