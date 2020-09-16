import React from "react";
import ReactDOM from "react-dom";
import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/DnsOutlined';
import DateRangeIcon from '@material-ui/icons/DateRangeOutlined';
import Accord from './Accord';

export default function Widget() {
    console.log('Modern React', React.version)
  return (
      <Accord />
  );
}
