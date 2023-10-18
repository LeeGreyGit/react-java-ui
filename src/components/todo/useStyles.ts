// import { colors } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 36,
      display: "flex",
      flexDirection: "column",
      rowGap: "8px",
    },
    header: {
      margin: "16px 0",
    },
    memo: {
      backgroundColor: "#F3F6F7",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#CFD8DC",
      },
    },
    title: {
      padding: "8px 16px",
      fontWeight: "bold",
      maxWidth: "100%",
      color: "#37474F",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: `1px solid #C3C3C3`,
    },
    buttonlist: {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      columnGap: "8px",
    },
    fileBody: {
      padding: "16px",
      whiteSpace: "break-spaces",
    },
  })
);
