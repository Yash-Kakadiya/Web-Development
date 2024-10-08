import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import AddListing from "./pages/AddListing";
import DetailListing from "./pages/DetailListing";
import EditListing from "./pages/EditListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/staybee' element={<Home />} />
          <Route path='/staybee/listings' element={<Listings />} />
          <Route path='/staybee/listings/:id' element={<DetailListing />} />
          <Route path='/staybee/listings/add' element={<AddListing />} />
          <Route path='/staybee/listings/edit/:id' element={<EditListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
