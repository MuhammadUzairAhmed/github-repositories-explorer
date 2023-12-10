import { createAsyncThunk } from "@reduxjs/toolkit";
import queryString from "query-string";
import { API_URL } from "../constants";

// Async thunk for fetching users from GitHub API
export const fetchUsers = createAsyncThunk(
  "user/fetch",
  async (name: string) => {
    const query = {
      q: name,
      per_page: 5,
    };
    try {
      const params = queryString.stringify(query);
      const response = await fetch(
        `${API_URL}search/users?${params}`
      );

      const data = await response.json();
      return data.items;
    } catch (err) {
      return (err as Error).message;
    }
  }
);

// Async thunk for fetching repositories of a user from GitHub API
export const fetchRepositories = createAsyncThunk(
  "repository/fetch",
  async (name: string) => {
    try {
      const response = await fetch(
        `${API_URL}users/${name}/repos`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return (err as Error).message;
    }
  }
);