import { IconButton } from "@mui/material";
import { useState } from "react";
import { routes } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";
import { iconCss } from "../../styles/material-styles";

export default function useRoles() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteData, setDeleteData]: any = useState();
  const navigate = useNavigate();

  const handleEdit = (item: any) => {
    navigate(routes.editRole + item.id);
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
          dat?.values?.roleKey,
          dat?.values?.roleLabel,
          <div style={{ display: "flex", gap: "2px" }}>
            <IconButton onClick={() => handleEdit(dat?.values)}>
              <Edit sx={iconCss} />
            </IconButton>
            <IconButton onClick={() => handleDelete(dat?.values)}>
              <Delete sx={iconCss} />
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
