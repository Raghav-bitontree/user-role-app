import { Box, Button, Modal, Typography } from "@mui/material";
import {
  modalStyle,
  primaryButton,
  secondaryButton,
} from "../../../styles/material-styles";
import { useDispatch } from "react-redux";

const MUIModal = ({
  deleteModal,
  setDeleteModal,
  deleteData,
  deleteById,
  id,
}: any) => {
  const dispatch = useDispatch();
  return (
    <Modal
      open={deleteModal}
      onClose={() => setDeleteModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete ?
        </Typography>
        <div style={{ margin: "20px auto", display: "flex", gap: "20px" }}>
          <Button
            sx={primaryButton}
            onClick={() => {
              dispatch(deleteData(id));
              dispatch(deleteById(id) as any);
              setDeleteModal(false);
            }}
          >
            Yes
          </Button>
          <Button sx={secondaryButton} onClick={() => setDeleteModal(false)}>
            No
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default MUIModal;
