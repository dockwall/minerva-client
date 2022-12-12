import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

// There are 3 Router types:
// 1 - BrowserRouter. Uses string after top-level domain (TLD) as path (123.com/path1)
// Good for configured and dev servers, but there are a troubles with classic deployment

// 2 - HashRouter. Injects "/#/" in URL after TLD and sees string after it as current path (123.com/#/path1)
// Good for GitHub pages

// 3 - MemoryRouter. Doesn't use URL as path (no update, no read)

root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
