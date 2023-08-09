import MUIDataTable from "mui-datatables";
import { options, roleColumns, routes } from "../../utils/constants";
import {
  buttonContainer,
  tableContainer,
  titleContainer,
} from "../../styles/style";
import { Button } from "@mui/material";
import { primaryButton } from "../../styles/material-styles";
import { useNavigate } from "react-router-dom";
import {
  deleteRole,
  deleteRolesById,
  fetchRoles,
} from "../../redux/features/roles/roles-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useRoles from "./roles-hook";
import MUIModal from "../common/modal";

const RolesList = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const roles = useSelector((state: any) => state.roles.roles);

  const { getTableData, deleteData, deleteModal, setDeleteModal } = useRoles();
  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);
  return (
    <>
      <div className={tableContainer}>
        <div className={titleContainer}>
          <h2> Roles List </h2>
          <div className={buttonContainer}>
            <Button onClick={() => navigate(routes.addRole)} sx={primaryButton}>
              Add Role
            </Button>
          </div>
        </div>
        <MUIDataTable
          title={"Roles"}
          data={getTableData(roles)}
          columns={roleColumns}
          options={options}
        />
        <MUIModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          deleteData={deleteRole}
          deleteById={deleteRolesById}
          id={deleteData?.id}
        />
      </div>
    </>
  );
};

export default RolesList;
