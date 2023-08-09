import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [] as any,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.users.find((item: any) => item.id === payload);
    },
    getUsers: (state, { payload }) => {
      state.users = payload;
    },
    getUserById: (state, { payload }) => {
      state.users.find((item: any) => item.id === payload);
    },
    updateUser: (state, { payload }) => {
      const findUser = state.users.find((user: any) => user.id === payload.id);
      if (findUser) {
        findUser.name = payload.name;
        findUser.username = payload.username;
        findUser.email = payload.email;
        findUser.password = payload.password;
        findUser.mobile = payload.mobile;
        findUser.roleKey = payload.roleKey;
      }
    },
    deleteUser: (state, { payload }) => {
      return {
        ...state,
        users: [...state.users].filter((item) => item?.id !== payload),
      };
    },
  },
});

export function fetchUsers() {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("users") as string);

      dispatch(getUsers(response));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteUserById(userId: string) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("users") as string);
      const res = response.filter(
        ({ values }: { values: { id: string } }) => values?.id !== userId
      );
      localStorage.setItem("users", JSON.stringify(res));
      dispatch(getUsers(res));
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUserById(payload: any) {
  console.log(payload);
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("users") as string);

      const findUser = response.find(
        (user: any) => user.values.id === Number(payload.id)
      );
      console.log(findUser);
      if (findUser) {
        findUser.values.name = payload.name;
        findUser.values.username = payload.username;
        findUser.values.password = payload.password;
        findUser.values.email = payload.email;
        findUser.values.mobile = payload.mobile;
        findUser.values.roleKey = payload.roleKey;
      }
      const res = response.filter(
        ({ values }: { values: { id: any } }) =>
          values?.id !== Number(payload.id)
      );
      localStorage.setItem("users", JSON.stringify([...res, findUser]));

      dispatch(getUsers([...res, findUser]));
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchUserById(userId: string) {
  return (dispatch: (arg: any) => void) => {
    try {
      const response = JSON.parse(localStorage.getItem("users") as string);
      const findUser = response.find((user: any) => {
        return Number(user.values.id) === Number(userId);
      });
      dispatch(getUsers(findUser));
    } catch (error) {
      console.log(error);
    }
  };
}

export function createUser(payload: any) {
  return (dispatch: (arg: any) => void) => {
    try {
      const savedUsers = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users") as string)
        : [];
      payload.values.id = Date.now();
      localStorage.setItem("users", JSON.stringify([payload, ...savedUsers]));
      dispatch(getUsers([payload, ...savedUsers]));
    } catch (err) {
      console.log(err);
    }
  };
}

export const { getUser, getUsers, getUserById, deleteUser, updateUser } =
  usersSlice.actions;

export default usersSlice.reducer;
