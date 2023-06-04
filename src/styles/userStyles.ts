import { colors } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: 36,
    },
    table: {
      "& > thead > tr > th": {
        borderRight: `1px solid rgba(224, 224, 224, 1)`,
        "&:not(:first-child)": {
          minWidth: 120,
        },
        "&:first-child": {
          borderLeft: `1px solid rgba(224, 224, 224, 1)`,
        },
      },
      "& > tbody > tr > td": {
        borderRight: `1px solid rgba(224, 224, 224, 1)`,
        "&:not(:first-child)": {
          minWidth: 120,
        },
        "&:first-child": {
          borderLeft: `1px solid rgba(224, 224, 224, 1)`,
        },
      },
    },
    header: {
      background: colors.blueGrey[50],
    },
    myData: {
      background: colors.pink[50],
    },
    otherUser: {
      background: colors.lightGreen[50],
    },
  })
);
