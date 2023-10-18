import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodo, postDeleteApi } from "../../api/callApi";
import { useStyles } from "./useStyles";
import { DataTodo } from "./interface";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Tooltip } from "@mui/material";

const Todo = () => {
  let navigate = useNavigate();
  const [data, setData] = useState<DataTodo[]>([]);
  const classes = useStyles();
  const fetchData = async () => {
    const response = await getTodo();
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

    const initItem: DataTodo = {
      title: "",
      text: ""
    };
  const handleRowClick = (todo: DataTodo, isEdit: boolean) => {
      navigate("/detail", {
        state: {
          todo: todo,
          isEdit: isEdit,
        },
      });
  };
  const handleDelete = async (todo: DataTodo) => {
    if (todo.id) {
    postDeleteApi(todo.id)
      .then(() => fetchData())
      .catch((error) => {
        console.log(error);
      });
  }
  };
  return (
    <div className={classes.root}>
      <h2 className={classes.header}>メモ帳</h2>
      <Tooltip title={"追加"}>
        <AddCircleOutlineIcon
          onClick={(): void => handleRowClick(initItem, false)}
        />
      </Tooltip>
      {data.map((todo, index) => (
        <div key={index} className={classes.memo}>
          <div className={classes.title}>
            {todo.title}
            <div className={classes.buttonlist}>
              <Tooltip title={"編集"}>
                <EditIcon onClick={() => handleRowClick(todo, true)} />
              </Tooltip>
              <Tooltip title={"削除"}>
                <DeleteIcon onClick={() => handleDelete(todo)} />
              </Tooltip>
            </div>
          </div>
          <div className={classes.fileBody}>{todo.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
