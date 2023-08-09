import { Formik } from "formik";
import FormContainer from "../common/form/form-container";
import {
  UserEditSchema,
  UserSchema,
  routes,
  userValues,
} from "../../utils/constants";
import { Button, MenuItem, TextField } from "@mui/material";
import { formikError, innerFormContainer } from "../../styles/style";
import {
  arrowBackCss,
  primaryButton,
  textFieldCss,
} from "../../styles/material-styles";
import { ArrowBackIos } from "@mui/icons-material";
import {
  createUser,
  updateUserById,
} from "../../redux/features/users/users-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRoles } from "../../redux/features/roles/roles-slice";
import { getRolesForSelect } from "../../utils/helper";

const UsersForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [roleValue, setRoleValue] = useState();
  const [userFormValue, setUserFormValue] = useState(userValues);
  const roles = useSelector((state: any) => state.roles.roles);
  const users = useSelector((state: any) => state.users.users);

  const user = users?.find(
    (item: any) => item?.values?.id === Number(params?.id)
  );

  const handleSubmit = (values: any) => {
    if (params?.id) {
      dispatch(
        updateUserById({
          id: params?.id,
          name: values.name,
          username: values?.username,
          password: values?.password
            ? values?.password
            : user?.values?.password,
          email: values?.email,
          mobile: values?.mobile,
          roleKey: roleValue ? roleValue : user?.values?.roleKey,
        }) as any
      );
    } else {
      values.roleKey = roleValue;
      dispatch(createUser({ values }) as any);
    }
    navigate(routes.user);
  };

  useEffect(() => {
    if (params?.id)
      setUserFormValue({
        name: user?.values.name,
        username: user?.values?.username,
        email: user?.values?.email,
        mobile: user?.values?.mobile,
        password: "",
        roleKey: user?.values?.roleKey,
      });
    else setUserFormValue(userValues);
  }, []);

  useEffect(() => {
    dispatch(fetchRoles() as any);
  }, [dispatch]);

  return (
    <>
      <ArrowBackIos sx={arrowBackCss} onClick={() => navigate(routes.user)} />
      <FormContainer heading={params?.id ? "Edit User Form" : "Add User Form"}>
        <Formik
          enableReinitialize
          initialValues={!params?.id ? userValues : userFormValue}
          validationSchema={!params?.id ? UserSchema : UserEditSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className={innerFormContainer} onSubmit={handleSubmit}>
              <TextField
                sx={textFieldCss}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />

              {errors.name && touched.name && errors.name ? (
                <span className={formikError}> {errors.name as any}</span>
              ) : null}

              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && touched.email && errors.email ? (
                <span className={formikError}> {errors.email as any}</span>
              ) : null}

              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              {errors.password && touched.password && errors.password ? (
                <span className={formikError}> {errors.password as any}</span>
              ) : null}

              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && errors.username ? (
                <span className={formikError}> {errors.username as any}</span>
              ) : null}

              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                type="number"
                name="mobile"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
              />
              {errors.mobile && touched.mobile && errors.mobile ? (
                <span className={formikError}> {errors.mobile as any}</span>
              ) : null}

              <TextField select name={"roleKey"} label="Select Role">
                {getRolesForSelect(roles).map((option: any) => (
                  <MenuItem
                    key={option.value}
                    onClick={() => setRoleValue(option.label)}
                    value={option.label}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Button type="submit" sx={primaryButton} disabled={isSubmitting}>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default UsersForm;
