import React from "react";
import {
  Card,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../../../helpers/types";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    password1: string;
    password2: string;
  }>();
  const submitHandler: SubmitHandler<{
    email: string;
    password1: string;
    password2: string;
  }> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Card
        component={Paper}
        sx={{ display: "block", mx: "auto", maxWidth: "35%", my: "1rem" }}
      >
        <Typography variant="h2" align="center" sx={{ fontSize: "2rem" }}>
          Register new account
        </Typography>
        <Grid container>
          <form
            onSubmit={handleSubmit(submitHandler)}
            style={{
              margin: "auto",
              marginTop: ".5rem",
              marginBottom: ".5rem",
              display: "block",
            }}
          >
            <TextField
              variant="outlined"
              label="email"
              type="email"
              {...register("email", { required: true })}
              sx={{ display: "block", my: ".3rem" }}
            />
            <TextField
              variant="outlined"
              label="password"
              type="password"
              {...register("password1", { required: true })}
              sx={{ display: "block", my: ".3rem" }}
            />
            <TextField
              variant="outlined"
              label="repeat password"
              type="password"
              {...register("password2", { required: true })}
              sx={{ display: "block", my: ".3rem" }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                display: "block",
                mx: "auto",
                my: ".3rem",
                bgcolor: "#FC766AFF",
              }}
            >
              Register
            </Button>
          </form>
        </Grid>
      </Card>
    </>
  );
};

export default RegisterPage;
