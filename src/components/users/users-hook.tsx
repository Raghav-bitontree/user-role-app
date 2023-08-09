import { IconButton } from "@mui/material";
import { useState } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { iconCss } from "../../styles/material-styles";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/constants";

export default function useUsers() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteData, setDeleteData]: any = useState();
  const navigate = useNavigate();

  const handleEdit = (item: any) => {
    navigate(routes.editUser + item.id);
  };

  const handleDelete = (item: any) => {
    setDeleteModal(true);
    setDeleteData(item);
  };

  const getTableData: any = (data: any) => {
    const list: any = [];
    data?.length > 0 &&
      data?.forEach((dat: any) => {
        let eachData = [
          dat?.values?.name,
          dat?.values?.username,
          dat?.values?.email,
          dat?.values?.mobile,
          dat?.values?.roleKey,
          <div style={{ display: "flex", gap: "2px" }}>
            <IconButton>
              <Edit sx={iconCss} onClick={() => handleEdit(dat?.values)} />
            </IconButton>
            <IconButton>
              <Delete sx={iconCss} onClick={() => handleDelete(dat?.values)} />
            </IconButton>
          </div>,
        ];
        list.push(eachData);
      });

    return list;
  };

  return {
    getTableData,
    deleteModal,
    setDeleteModal,
    deleteData,
    setDeleteData,
  };
}
