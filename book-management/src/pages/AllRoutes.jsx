import React from "react";
import {Routes,Route} from "react-router-dom"
import { RequireAuth } from "../components/RequireAuth";
import { RequireAdmin } from "../components/RequiredAdmin";
import Books from "./Books";
import EditBook from "./EditBook";
import Login from "./Login";
import SingleBook from "./SingleBook";
function AllRoutes(){
    return(
        <Routes>
           <Route path="/Book-management" element={<Books />} />
  <Route path="/books/:id" element={<RequireAuth><SingleBook /></RequireAuth>} />
  <Route path="/books/:id/edit" element={
  <RequireAdmin><EditBook /></RequireAdmin>} />
  <Route path="/login" element={<Login />} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}

export {AllRoutes}