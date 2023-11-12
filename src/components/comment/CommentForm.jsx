import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../graphql/mutations";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });


  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("تمام فیلد ها را پر کنید", {
        position: "top-center",
      });
    }
  };

  if (data && pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید میباشد", {
      position: "top-center",
    });
    setPressed(false);
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
        <Grid item xs={12} m={2}>
          <TextField
            label="نام کاربری"
            variant="outlined"
            sx={{ width: "100%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="ایمیل"
            variant="outlined"
            sx={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} m={2}>
          <TextField
            label="متن کامنت"
            variant="outlined"
            sx={{ width: "100%" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            minRows={4}
          />
        </Grid>
        <Grid item xs={12} mt={2} mr={2}>
          {loading ? (
            <Button variant="contained" disabled>
              در حال ارسال
            </Button>
          ) : (
            <Button variant="contained" onClick={sendHandler}>
              ارسال
            </Button>
          )}
        </Grid>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
