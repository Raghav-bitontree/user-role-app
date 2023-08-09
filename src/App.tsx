import { Route, Routes } from "react-router-dom";
import Users from "./pages/users";
import Roles from "./pages/roles";
import { routes } from "./utils/constants";
import Header from "./components/header";
import { Providers } from "./redux/features/provider";
import AddUser from "./pages/users/add";
import EditUser from "./pages/users/edit";
import AddRole from "./pages/roles/add";
import EditRole from "./pages/roles/edit";

function App() {
  return (
    <>
      <Providers>
        <Header />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path={routes.user} element={<Users />} />
          <Route path={routes.role} element={<Roles />} />
          <Route path={routes.addUser} element={<AddUser />} />
          <Route path={routes.editUser + ":id"} element={<EditUser />} />
          <Route path={routes.addRole} element={<AddRole />} />
          <Route path={routes.editRole + ":id"} element={<EditRole />} />
        </Routes>
      </Providers>
    </>
  );
}

export default App;
