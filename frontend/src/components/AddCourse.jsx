import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { BASE_URL } from "../config.js";
function AddCourse() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [published, setPublished] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        justifyContent: "center",
        flexDirection: "column",
      }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          varint={"outlined"}
          style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}>
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            fullWidth={true}
            label="Image link"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            fullWidth={true}
            label="Price"
            variant="outlined"
          />
          <Select
            style={{ marginBottom: 10 }}
            value={published}
            label="Published"
            variant="outlined"
            onChange={(e) => {
              setPublished(e.target.value);
            }}
            fullWidth={true}
            inputProps={{ "aria-label": "Without label" }}>
            <MenuItem value={true}>True</MenuItem>
            <MenuItem value={false}>False</MenuItem>
          </Select>

          <Button
            size={"large"}
            variant="contained"
            onClick={async () => {
              await axios.post(
                `${BASE_URL}/admin/courses`,
                {
                  title: title,
                  description: description,
                  imageLink: image,
                  price,
                  published,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              alert("Added course!");
              navigate("/courses");
            }}>
            Add course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
