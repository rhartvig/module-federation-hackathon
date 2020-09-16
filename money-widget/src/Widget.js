import React from "react";
import { VERSION } from "lodash";

const InvoiceList = React.lazy(() => import("axeptiaWorkspace/InvoiceList"));

export default function Widget() {
    return (
        <>
            <p style={{ marginLeft: '16px' }}>Widget Lodash v{VERSION}</p>
            <InvoiceList />
        </>
    );
}
