import * as React from "react";
import Card from "@mui/material/Card";
import { TextField, CardContent, Button } from "@mui/material";

export default function Register() {
  return (
    <Card
      style={{ background: "white", marginTop: "50%" }}
      sx={{ maxWidth: 300, borderRadius: "10px" }}>
      <CardContent>
        <h2>Create Account</h2>
        <TextField
          sx={{ borderRadius: "10px", width: 250, margin: "10px" }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          sx={{ borderRadius: "10px", width: 250, margin: "10px" }}
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          sx={{ borderRadius: "10px", width: 250, margin: "10px" }}
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button
          sx={{ width: 250, margin: "10px", background: "#1e4d91" }}
          variant="contained">
          Sign Up
        </Button>
      </CardContent>
    </Card>
  );
}
