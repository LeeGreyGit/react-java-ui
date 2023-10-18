import { colors } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 36,
    },
    header: {
      margin: "16px 0",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      rowGap: 16,
    },
    error: {
      color: colors.red[500],
    },
    button: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      columnGap: "24px",
      justifyContent: "center",
    },
  })
);
