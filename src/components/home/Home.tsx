import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLoginApi } from "../../api/callApi";
import { useStyles } from "../../styles/homeStyles";

const HomeScreen = () => {
  let navigate = useNavigate();
  const classes = useStyles();
  const [loginName, setloginName] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setloginName(event.target.value);
  };

  const handleInputChangePass = (event: ChangeEvent<HTMLInputElement>) => {
    setpassword(event.target.value);
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const response = await postLoginApi({
      loginName: loginName,
      password: password,
    });
    console.log(response);
    if (response.message) {
      setError(response.message);
    } else {
      navigate("/user-list", {
        state: {
          userId: response.userId,
          userName: response.userName,
        },
      });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <h1>WELCOME</h1>
        <TextField
          placeholder="Login Name"
          variant="outlined"
          value={loginName}
          onChange={handleInputChangeName}
        />
        <TextField
          placeholder="Password"
          variant="outlined"
          value={password}
          onChange={handleInputChangePass}
        />
        <Button variant="contained" size="large" onClick={handleSubmit}>
          LOGIN
        </Button>
        {error && <div className={classes.error}>{error}</div>}
      </div>
    </div>
  );
};

export default HomeScreen;
