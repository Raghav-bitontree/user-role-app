import * as Yup from "yup";
const userRoute = "/user";
const roleRoute = "/role";

export const routes = {
  user: userRoute,
  addUser: userRoute + "/add",
  editUser: userRoute + "/edit/",
  role: roleRoute,
  addRole: roleRoute + "/add",
  editRole: roleRoute + "/edit/",
};

export const options: any = {
  filterType: "checkbox",
  search: true,
  download: false,
  print: false,
  viewColumns: false,
  filter: false,
  selectableRows: "none",
};

export const userColumns = [
  "Name",
  "Username",
  "Email",
  "Mobile",
  "Role",
  "Action",
];

export const roleColumns = ["Key", "Role", "Action"];

export const userValues = {
  name: "",
  email: "",
  username: "",
  mobile: "",
  roleKey: "",
  password: "",
};

export const roleValues = {
  roleLabel: "",
};

const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegExp = /^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchemaTemplate = {
  name: Yup.string()
    .trim()
    .matches(nameRegExp, "Invalid name")
    .required("Name is Required!"),
  username: Yup.string().required("Username is Required"),
  email: Yup.string()
    .required("Email is Required!")
    .email()
    .matches(emailregex, "Invalid Email!"),
  mobile: Yup.string()
    .trim()
    .required("Mobile is Required")
    .matches(phoneRegExp, "Mobile is not valid")
    .min(10, "Phone number is short")
    .max(10, "Phone number is long"),
};

export const UserSchema = Yup.object().shape({
  ...userSchemaTemplate,
  password: Yup.string().trim().required("Password is Required!"),
});

export const RoleSchema = Yup.object().shape({
  roleLabel: Yup.string().required("Role is Required"),
});
