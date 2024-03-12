import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: " 80%",
  bgcolor: "background.paper",
  borderRadius: "3px",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

const AppoinmentModal = ({ open, handleClose }) => {
  const [age, setAge] = useState(categories[0]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid sx={style}>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="filled-basic"
                label="First Name"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Last Name"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
            
              <Select
                variant="filled"
                fullWidth
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                {
                  categories.map((c) => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))
                }
                
                
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

const categories = ["Fever" , "Pain" , "Could"]

export default AppoinmentModal;
