import { formContainer } from "../../../styles/style";

const FormContainer = ({ children, heading }: any) => {
  return (
    <div className={formContainer}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};

export default FormContainer;
