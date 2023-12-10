import { memo } from "react";
import { Repository } from "../../interfaces/repository";
import { useAppSelector } from "../../store/store";
import List from "../List";
import Loading from "../Loading";
import Repositories from "../Repositories";

const Users = memo(() => {
  const users = useAppSelector((state) => state.user.users);
  const userId = useAppSelector((state) => state.user.userId);
  const repositories = useAppSelector((state) => state.user.repositories);
  const loading = useAppSelector((state) => state.user.isLoading);
  
  return (
   loading ? <Loading /> :
    <div className="border-t border-gray-200 px-4 py-6">
      {users.length ? (
        users?.map((user) => (
          <>
            <div className="shadow-xl shadow-gray-500 ml-0 mr-0 sm:ml-64 sm:mr-64">
              <List item={user} userId={userId} />
            </div>
            <div className="max-h-96 overflow-auto ml-0 mr-0 sm:ml-64 sm:mr-64">
              {user.id === userId && repositories.length
                ? repositories.map((repository: Repository) => (
                    <Repositories repository={repository} />
                  ))
                : null}
            </div>
          </>
        ))
      ) : (
        <h1 className="font-semibold text-2xl">No User Found</h1>
      )}
    </div>
  );
});

export default Users;
