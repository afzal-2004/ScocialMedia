import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import { CreatePost } from "../Components/CreatePost";
function Routers() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/Createpost" element={<CreatePost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default Routers;
