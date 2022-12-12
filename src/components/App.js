import React from "react";
import { Routes, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<StreamList />} />
            <Route path="/new" element={<StreamCreate />} />
            <Route path="/delete" element={<StreamDelete />} />
            <Route path="/show" element={<StreamShow />} />
            <Route path="/edit" element={<StreamEdit />} />
        </Routes>
    );
};

export default App;
