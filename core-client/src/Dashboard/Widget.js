import {Card, CardContent, CardHeader, Link} from "@material-ui/core";
import React, {useState} from "react";
import {createStyles, lighten, withStyles} from "@material-ui/core/styles";

const styles = theme => {
    return createStyles({
        card: {
            display: 'inline-block',
            verticalAlign: 'top',
            marginRight: theme.spacing(1),
            marginTop: theme.spacing(1)
        },
        cardContent: {
            padding: theme.spacing(0),
            display: 'flex',
            flexDirection: 'column'
        },
        cardAction: {
            marginTop: 0,
            fontSize: theme.typography.body1.fontSize
        }
    });
};

const Widget = ({ classes, children, header, shownOnLoad = true }) => {
    const [shown, setShown] = useState(shownOnLoad);
    return <Card className={classes.card} onClick={() => !shown && setShown(true)}>
        <CardHeader
            classes={{ action: classes.cardAction }}
            style={{ paddingBottom: 5 }}
            title={
                <>
                    <span>{header}</span>
                </>
            }
            titleTypographyProps={{ variant: 'h6' }}
        />
        <CardContent className={classes.cardContent} style={{ width: 420, height: 300 }}>
            {shown && children}
            {!shown && <a style={{padding: '48px 0', textAlign: 'center'}}>Click to load</a>}
        </CardContent>
    </Card>
}

export default withStyles(styles)(Widget);
