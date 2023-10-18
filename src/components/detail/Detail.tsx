import Button from "@mui/material/Button";
import {TextField, Typography} from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";
import { postUpdateApi } from "../../api/callApi";
import { useStyles } from "./useStyles";
import { useNavigate, useLocation } from "react-router-dom";

const DetailScreen = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const { todo, isEdit } = location.state;
  const classes = useStyles();
  const [title, setTitle] = useState(todo.title);
  const [text, setText] = useState(todo.text);
  const handleInputChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleInputChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const response = await postUpdateApi({
          id: todo.id,
          title: title,
          text: text,
        });
    console.log(response);
      navigate("/");
  };
  const handleCancel = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <h2 className={classes.header}> {isEdit ? "更新" : "新規"}</h2>
        <Typography>タイトル</Typography>
        <TextField
          variant="outlined"
          value={title}
          onChange={handleInputChangeTitle}
        />
        <Typography>内容</Typography>
        <TextField
          variant="outlined"
          value={text}
          multiline={true}
          minRows={5}
          onChange={handleInputChangeText}
        />
        <div className={classes.button}>
          <Button size="large" onClick={handleCancel}>
            CANCEL
          </Button>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
