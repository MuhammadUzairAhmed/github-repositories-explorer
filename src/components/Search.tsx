import { useRef } from "react";
import { useAppDispatch } from "../store/store";
import { fetchUsers, fetchingData } from "../store/github/userSlice";
import { useErrorBoundary } from "react-error-boundary";

const Search = () => {
  const { showBoundary } = useErrorBoundary();
  const dispatch = useAppDispatch();
  const name = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    if (name.current instanceof HTMLInputElement) {
      const value = name.current.value;
      dispatch(fetchingData())
      dispatch(fetchUsers(value))
        .catch((err) => showBoundary(err.message));
    }
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="relative w-[500px]">
        <input
          type="search"
          ref={name}
          placeholder="Input here..."
          className="w-full p-4 rounded-full bg-slate-100"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-4 bg-slate-700 rounded-full font-semibold text-gray-200 hover:bg-gray-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Search;
