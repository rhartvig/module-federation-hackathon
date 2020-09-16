// language=JSX Harmony
import React, {useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import Dashboard from './Dashboard/Dashboard'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Widget from "./Dashboard/Widget";
import WidgetSpinner from "./Dashboard/WidgetSpinner";
import Navigation from "./Navigation";
import useDynamicScript from "./hooks/use-dynamic-script";

const ReactAdapter = ({ module, scope }) => {
  const ref = useRef();
  useEffect(() => {
    async function loadModule() {
      const WidgetReact = (await window[scope].get("./React"))();
      const WidgetReactDOM = (await window[scope].get("./ReactDOM"))();
      const factory = await window[scope].get(module);
      const Widget = factory();
      WidgetReactDOM.render(
          WidgetReact.createElement(Widget.default, {}),
          ref.current
      );
    }
    loadModule();
  }, []);
  return <div ref={ref}><WidgetSpinner /></div>
}


function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    const res1 = await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    const res = await container.init(__webpack_share_scopes__.default);

    // Detect required React
    try {
      await container.get("./React");
      return {
        default: () => <ReactAdapter scope={scope} module={module} />
      }
    } catch {
      const factory = await window[scope].get(module);
      const Module = factory();
      return Module;
    }
  };
}

function System(props) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
  });

  if (!props.system || !ready) {
    return <WidgetSpinner />
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(props.system.scope, props.system.module)
  );

  return (
    <React.Suspense fallback={<WidgetSpinner />}>
      <Component />
    </React.Suspense>
  );
}

function App() {
  const [activeApp, setActiveApp] = React.useState('dashboard');

  const [moneyWidget, setMoneyWidget] = React.useState();
  const [axeptiaWidget, setAxeptiaWidget] = React.useState();
  const [modernWidget, setModernWidget] = React.useState();
  const [axeptiaWorkspace, setAxeptiaWorkspace] = React.useState();

  console.log('Core React ', React.version);
  console.log('Core ReactDom ', ReactDOM.version);

  React.useEffect(() => {
    setMoneyWidget({
      url: "http://localhost:3002/moneyWidget.js",
      scope: "moneyWidget",
      module: "./Widget",
    });

    setAxeptiaWidget({
      url: "http://localhost:3003/axeptiaWidget.js",
      scope: "axeptiaWidget",
      module: "./Widget"
    });

    setAxeptiaWorkspace({
      url: "http://localhost:3004/axeptiaWorkspace.js",
      scope: "axeptiaWorkspace",
      module: "./Workspace",
    });

    setModernWidget({
      url: "http://localhost:3005/modernWidget.js",
      scope: "modernWidget",
      module: "./Widget"
    });
  }, []);

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      <ThemeProvider theme={theme}>
        <div style={{display: 'flex'}}>
          <Navigation setActiveApp={setActiveApp} />
          {activeApp === 'dashboard' ? (
            <Dashboard>
              <Widget header="Axeptia incoming" shownOnLoad={false}>
                <System system={moneyWidget} />
              </Widget>
              <Widget header="Axeptia overdue" shownOnLoad={false}>
                <System system={axeptiaWidget} />
              </Widget>
              <Widget header="Modern widget" shownOnLoad={false}>
                <System system={modernWidget} />
              </Widget>
            </Dashboard>
          ) : (
            <System system={axeptiaWorkspace} />
          )}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
