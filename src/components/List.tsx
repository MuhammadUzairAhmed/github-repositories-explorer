import { useAppDispatch } from "../store/store";
import {
  fetchRepositories,
  fetchingData,
  handleDetailClose,
} from "../store/github/userSlice";
import { User } from "../interfaces/user";
import { useErrorBoundary } from "react-error-boundary";

interface List {
  item: User;
  userId: number;
}
const List = ({ item, userId }: List) => {
   const { showBoundary } = useErrorBoundary();
 const dispatch = useAppDispatch();

  const handleDetail = (name: string) => {
    if (userId != item.id) {
      dispatch(fetchingData())
      dispatch(fetchRepositories(name)).catch(err=> showBoundary(err.message));
    } else {
      dispatch(handleDetailClose());
    }
  };
  return (
    <>
      <h3 className="-mx-2 -my-3 flow-root mt-1 mb-1" key={item.id}>
        <button
          type="button"
          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400"
          aria-controls="filter-section-mobile-0"
          aria-expanded="false"
          onClick={() => handleDetail(item.login)}
        >
          <span className="font-medium text-gray-900">{item.login}</span>
          <span className="ml-6 flex items-center">
            {userId != item.id ? (
              <svg
                fill="#000000"
                height="14px"
                width="14px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <path
                  id="XMLID_224_"
                  d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                />
              </svg>
            ) : (
              <svg
                fill="#000000"
                height="14px"
                width="14px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            )}
          </span>
        </button>
      </h3>
    </>
  );
};

export default List;
