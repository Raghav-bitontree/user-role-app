const primaryButton = {
  color: "white",
  background: "#456EE8",
  padding: "10px 20px",
  textTransform: "none",
  "&:hover": {
    background: "#4a61a5",
  },
};

const secondaryButton = {
  color: "#456EE8",
  border: "1px solid #456EE8",
  padding: "10px 20px",
  textTransform: "none",
};

const textFieldCss = {
  width: "400px",
};

const iconCss = {
  cursor: "pointer",
  color: "blue",
};

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

const arrowBackCss = {
  cursor: "pointer",
  margin: "20px 80px",
  position: "absolute",
  top: "65px",
  left: 0,
};

export {
  primaryButton,
  secondaryButton,
  textFieldCss,
  iconCss,
  modalStyle,
  arrowBackCss,
};
