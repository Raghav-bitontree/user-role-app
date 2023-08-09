import { css } from "@emotion/css";

const headerContainer = css`
  background: hsla(225, 78%, 59%, 1);
  height: 60px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  align-items: center;
`;

const headerLink = css`
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const navLink = css`
  text-decoration: none;
  color: white;
  font-size: 18px;
  border-bottom: 1px solid white;
  font-weight: 400;
`;

const tableContainer = css`
  margin: 30px 80px;
`;

const titleContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const buttonContainer = css`
  display: flex;
  gap: 20px;
`;

const formContainer = css`
  width: max-content;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 5px 20px 20px 20px;
`;

const innerFormContainer = css`
  display: flex;
  margin-top: 0px;
  flex-direction: column;
  gap: 20px;
`;

const formikError = css`
  color: red;
  font-size: 12px;
  margin-top: -15px;
`;

const navLinkContainer = css`
  display: flex;
  gap: 40px;
`;

export {
  headerContainer,
  headerLink,
  tableContainer,
  titleContainer,
  buttonContainer,
  formContainer,
  innerFormContainer,
  formikError,
  navLink,
  navLinkContainer,
};
