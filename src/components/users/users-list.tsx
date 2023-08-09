import MUIDataTable from "mui-datatables";
import { options, routes, userColumns } from "../../utils/constants";
import {
  buttonContainer,
  tableContainer,
  titleContainer,
} from "../../styles/style";
import { Button } from "@mui/material";
import { primaryButton } from "../../styles/material-styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  deleteUser,
  deleteUserById,
  fetchUsers,
} from "../../redux/features/users/users-slice";
import { useDispatch, useSelector } from "react-redux";
import useUsers from "./users-hook";
import MUIModal from "../common/modal";

const UsersList = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const users = useSelector((state: any) => state.users.users);
  const { getTableData, deleteData, deleteModal, setDeleteModal } = useUsers();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className={tableContainer}>
        <div className={titleContainer}>
          <h2> Users List </h2>
          <div className={buttonContainer}>
            <Button onClick={() => navigate(routes.addUser)} sx={primaryButton}>
              Add User
            </Button>
          </div>
        </div>
        <MUIDataTable
          title={"Users"}
          data={getTableData(users)}
          columns={userColumns}
          options={options}
        />
        <MUIModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          deleteData={deleteUser}
          deleteById={deleteUserById}
          id={deleteData?.id}
        />
      </div>
    </>
  );
};

export default UsersList;
