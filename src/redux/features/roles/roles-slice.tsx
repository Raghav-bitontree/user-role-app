import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [] as any,
};

export const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    getRole: (state, { payload }) => {
      state.roles.find((item: any) => item.id === payload);
    },
    getRoles: (state, { payload }) => {
      state.roles = payload;
    },
    getRolesById: (state, { payload }) => {
      state.roles.find((item: any) => item.id === payload);
    },
    updateRole: (state, { payload }) => {
      const findRole = state.roles.find((role: any) => role.id === payload.id);
      if (findRole) {
        findRole.roleKey = payload.roleKey;
        findRole.roleLabel = payload.roleLabel;
      }
    },
    deleteRole: (state, { payload }) => {
      return {
        ...state,
        roles: [...state.roles].filter((item) => item?.id !== payload),
      };
    },
  },
});

export function fetchRoles() {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("roles") as string);

      dispatch(getRoles(response));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteRolesById(roleId: string) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("roles") as string);
      const res = response.filter(
        ({ values }: { values: { id: string } }) => values?.id !== roleId
      );
      localStorage.setItem("roles", JSON.stringify(res));
      dispatch(getRoles(res));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateRoleById(payload: any) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("roles") as string);

      const findRole = response.find(
        (role: any) => role.values.id === Number(payload.id)
      );
      if (findRole) {
        findRole.values.roleKey = payload.roleKey;
        findRole.values.roleLabel = payload.roleLabel;
      }
      const res = response.filter(
        ({ values }: { values: { id: number } }) =>
          values?.id !== Number(payload.id)
      );
      localStorage.setItem("roles", JSON.stringify([...res, findRole]));

      dispatch(getRoles([...res, findRole]));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchRoleById(rolesId: string) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("roles") as string);
      const fineRole = response.find((role: any) => {
        return Number(role.values.id) === Number(rolesId);
      });
      dispatch(getRoles(fineRole));
    } catch (error) {
      console.log(error);
    }
  };
}

export function createRole(payload: any) {
  return (dispatch: (arg: any) => void) => {
    try {
      const savedRoles = localStorage.getItem("roles")
        ? JSON.parse(localStorage.getItem("roles") as string)
        : [];
      payload.values.id = Date.now();
      payload.values.roleKey = payload?.values?.roleLabel?.toLowerCase().trim();
      localStorage.setItem("roles", JSON.stringify([payload, ...savedRoles]));
      dispatch(getRoles([payload, ...savedRoles]));
    } catch (err) {
      console.log(err);
    }
  };
}

export const { getRole, getRoles, deleteRole, getRolesById, updateRole } =
  rolesSlice.actions;

export default rolesSlice.reducer;
