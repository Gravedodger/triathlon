import React from 'react';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function AccountCircleIcn(props) {
  return (
    <SvgIcon {...props}>
      <path d="M 12 2 C 6.48 2 2 6.48 2 12 s 4.48 10 10 10 s 10-4.48 10 -10 S
      17.52 2 12 2 Z m 0 3 c 1.66 0 3 1.34 3 3 s -1.34 3 -3
      3 s -3 -1.34 -3 -3 s 1.34 -3 3 -3 Z m 0 14.2 c -2.5 0 -4.71 -1.28 -6
      -3.22 c 0.03 -1.99 4 -3.08 6 -3.08 c 1.99 0 5.97 1.09 6 3.08 c
       -1.29 1.94 -3.5 3.22 -6 3.22 Z" />
    </SvgIcon>
  );
}

export default function SvgIconsSize() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AccountCircleIcn style={{fontSize: 60}} />
    </div>
  );
}
