import { colors } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 36,
    },
    form: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      rowGap: 24,
    },
    error: {
      color: colors.red[500],
    },
  })
);
