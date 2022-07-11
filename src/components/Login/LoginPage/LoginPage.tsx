import React from "react";
import {
  Paper,
  Card,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import {SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../../../helpers/types";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Card
      component={Paper}
      sx={{ display: "block", mx: "auto", maxWidth: "35%", my: "1rem" }}
    >
      <Typography variant="h2" sx={{ fontSize: "2rem" }} align="center">
        Log in to use our site
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
            {...register("password", { required: true })}
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
            Log in
          </Button>
        </form>
      </Grid>
      <Typography
        variant="h3"
        sx={{ fontSize: "1rem", mt: ".5rem", mb: ".2rem" }}
        align="center"
      >
        No account yet? Register for free now!
      </Typography>
      <Button
        variant="contained"
        sx={{ display: "block", mx: "auto", mb: ".3rem", bgcolor: "#FC766AFF" }}
      >
        Register
      </Button>
    </Card>
  );
};

export default LoginPage;