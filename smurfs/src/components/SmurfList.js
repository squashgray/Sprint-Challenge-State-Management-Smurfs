import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SmurfCard from "./SmurfCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100
  },
  control: {
    padding: theme.spacing(100)
  }
}));

const SmurfList = props => {
  console.log(props.data);
  const [spacing] = React.useState(0);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {props.data.map(items => (
            <Grid key={items.id} spacing={spacing}>
              <SmurfCard items={items} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SmurfList;
