import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../interfaces/user";
import { Repository } from "../../interfaces/repository";
import { fetchRepositories, fetchUsers } from "../../utils/api";

// Initial state
const initialState: UserState = {
  users: [],
  isLoading: false,
  userId: -1,
  repositories: [],
};

// Slice creation
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action creators for updating the state directly
    fetchingData: (state) => {
      state.isLoading = true;
    },
    handleDetailClose: (state) => {
      state.repositories = [];
      state.userId = -1;
    },
  },
  // Reducer logic for handling actions dispatched by createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        if (action.payload?.length) {
          // Extracting necessary data from the fetched users and updating state
          state.users = action.payload.map(({ id, login }: User) => ({
            id,
            login,
          }));
        } else {
          state.users = [];
        }
        state.isLoading = false;
      }
    );
    builder.addCase(
      fetchRepositories.fulfilled,
      (state, action: PayloadAction<Repository[]>) => {
        if (action.payload.length) {
          // Extracting necessary data from fetched repositories and updating state
          state.userId = action.payload[0].owner.id;
          state.repositories = action.payload.map(
            ({
              id,
              updated_at,
              description,
              forks_count,
              owner,
            }: Repository) => ({
              id,
              updated_at,
              description,
              forks_count,
              owner: {
                id: owner.id,
                login: owner.login,
                avatar_url: owner.avatar_url,
              },
            })
          );
        } else {
          state.userId = -1;

          state.repositories = [];
        }
        state.isLoading = false;
      }
    );
  },
});

// Exporting reducer and actions
export default UserSlice.reducer;
export const { handleDetailClose, fetchingData } = UserSlice.actions;
