import Add from "../../../assets/icons/add.svg";
import { FieldArray, FormikProvider, Field } from "formik";

const Education = ({ formik }) => {
  return (
    <>
      <FormikProvider value={formik}>
        <h4>Education</h4>

        <FieldArray
          name="educationDetails"
          render={(arrayHelpers) => (
            <div>
              {formik.values.educationDetails.map((edu, index) => (
                <div key={index}>
                  <div className="edu-container mt-3">
                    <Field
                      placeholder="Institute"
                      name={`educationDetails.${index}.institute`}
                      className="form-control mr-2"
                    />
                    <Field
                      name={`educationDetails.${index}.degree`}
                      placeholder="Degree"
                      className="form-control mr-2"
                    />
                    <Field
                      name={`educationDetails.${index}.year`}
                      placeholder="Year"
                      className="form-control mr-2"
                    />

                    <img
                      src={Add}
                      alt="add new row"
                      className="add-ico"
                      onClick={() =>
                        arrayHelpers.push({
                          institute: "",
                          degree: "",
                          year: "",
                        })
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        />
      </FormikProvider>
    </>
  );
};

export default Education;
