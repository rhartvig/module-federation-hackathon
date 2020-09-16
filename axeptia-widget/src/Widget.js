import React from "react";
import {VERSION} from "lodash";

const InvoiceList = React.lazy(() => import("axeptiaWorkspace/InvoiceList"));

export default function Widget() {
    console.log('Axeptia React', React.version)
  return (
      <>
          <p style={{ marginLeft: '16px' }}>Widget Lodash v{VERSION}</p>
          <React.Suspense fallback="Loading...">
              <InvoiceList/>
          </React.Suspense>
      </>
  );
}
