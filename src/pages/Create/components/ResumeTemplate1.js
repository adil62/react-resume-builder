import { useSelector } from "react-redux";
import styled from "styled-components";

const Styles = styled.div`
  padding: 3rem;
  .education,
  .experience {
    display: flex;
    flex-direction: column;
    .entry {
      span {
        width: 20%;
        margin-right: 1rem;
      }
    }
  }
  .user-meta {
    display: flex;
    span {
      font-weight: 300;
      margin-right: 1rem;
    }
  }
`;

const ResumeTemplate1 = () => {
  const { form: formState } = useSelector((state) => state.createResume);

  return (
    <Styles>
      <h1>Adil Ismail k </h1>
      <div className="user-meta">
        <span className=" ">{formState?.name}</span>
        <span>{formState?.email}</span>
        <span>{formState?.phone}</span>
      </div>
      <hr />
      <div className="skills">
        <h3>Skills</h3>
        {formState?.skills &&
          formState?.skills.map((skill) => (
            <span className="mr-2">{skill?.label}</span>
          ))}
      </div>
      <hr />

      <div className="education mt-3">
        <h3>Education </h3>
        {formState?.educationDetails &&
          formState?.educationDetails.map((edu) => (
            <div className="entry d-flex">
              <span className="w-25">{edu?.institute}</span>
              <span>{edu?.degree}</span>
              <span>{edu?.year}</span>
            </div>
          ))}
      </div>
      <hr />
      <div className="experience">
        <h3>Work experience</h3>
        {formState?.experienceDetails &&
          formState?.experienceDetails.map((exp) => (
            <div className="entry d-flex">
              <span className="w-25">{exp?.company}</span>
              <span>{exp?.designation}</span>
              <span>{exp?.year}</span>
            </div>
          ))}
      </div>
    </Styles>
  );
};

export default ResumeTemplate1;
