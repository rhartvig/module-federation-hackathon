import React from "react";
import { VERSION } from "lodash";
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

export default function InvoiceList({ children }) {
    return (
        <List>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText>
                    InvoiceList Lodash v{VERSION}
                </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Account statement" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Account statement" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary="Cash Flow Forec" />
            </ListItem>
            <Divider />
            {children}
        </List>
    );
}
