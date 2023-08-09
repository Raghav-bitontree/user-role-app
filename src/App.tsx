import { Route, Routes } from "react-router-dom";
import Users from "./pages/users";
import Roles from "./pages/roles";
import { routes } from "./utils/constants";
import Header from "./components/header";
import { Providers } from "./redux/features/provider";
import AddEditRole from "./pages/roles/add-edit";
import AddEditUser from "./pages/users/add-edit";

function App() {
  return (
    <>
      <Providers>
        <Header />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path={routes.user} element={<Users />} />
          <Route path={routes.role} element={<Roles />} />
          <Route path={routes.addUser} element={<AddEditUser />} />
          <Route path={routes.editUser + ":id"} element={<AddEditUser />} />
          <Route path={routes.addRole} element={<AddEditRole />} />
          <Route path={routes.editRole + ":id"} element={<AddEditRole />} />
        </Routes>
      </Providers>
    </>
  );
}

export default App;
