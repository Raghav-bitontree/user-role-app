import { Formik } from "formik";
import FormContainer from "../common/form/form-container";
import { RoleSchema, roleValues, routes } from "../../utils/constants";
import { Button, TextField } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { formikError, innerFormContainer } from "../../styles/style";
import {
  arrowBackCss,
  primaryButton,
  textFieldCss,
} from "../../styles/material-styles";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createRole,
  updateRoleById,
} from "../../redux/features/roles/roles-slice";

const RolesForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [roleFormValue, setRoleFormValue] = useState(roleValues);
  const roles = useSelector((state: any) => state.roles.roles);

  const role = roles?.find(
    (item: any) => item?.values?.id === Number(params?.id)
  );

  const handleSubmit = (values: any) => {
    if (params?.id) {
      dispatch(
        updateRoleById({
          id: params?.id,
          roleKey: values?.roleLabel.toLowerCase().trim(),
          roleLabel: values?.roleLabel,
        }) as any
      );
    } else {
      dispatch(createRole({ values }) as any);
    }
    navigate(routes.role);
  };

  useEffect(() => {
    if (params?.id)
      setRoleFormValue({
        roleLabel: role?.values?.roleLabel,
      });
    else setRoleFormValue(roleValues);
  }, [params?.id, role?.values.roleKey, role?.values?.roleLabel]);

  return (
    <>
      <ArrowBackIos sx={arrowBackCss} onClick={() => navigate(routes.role)} />
      <FormContainer heading={params?.id ? "Edit Role Form" : "Add Role Form"}>
        <Formik
          enableReinitialize
          initialValues={roleFormValue}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={RoleSchema}
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
                id="outlined-basic"
                sx={textFieldCss}
                label="Role"
                variant="outlined"
                type="text"
                name="roleLabel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.roleLabel}
              />

              {errors.roleLabel && touched.roleLabel && errors.roleLabel ? (
                <span className={formikError}> {errors.roleLabel as any}</span>
              ) : null}

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

export default RolesForm;
