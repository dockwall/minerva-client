import React from "react";
import { Routes, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";

import Layout from "./layout/Layout";

// react-router v6 nested routes have a good option - relative pathes
// For parent route we write root path
// Then, if we have nested routes with the same path - we use "index" prop
// For all the rest routes we use path without "/..."

const App = () => {
    return (
        <div className="ui container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<StreamList />} />
                    <Route path="new" element={<StreamCreate />} />
                    <Route path="delete" element={<StreamDelete />} />
                    <Route path="show" element={<StreamShow />} />
                    <Route path="edit" element={<StreamEdit />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
