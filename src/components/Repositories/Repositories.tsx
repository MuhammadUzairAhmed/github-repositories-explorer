import { memo } from "react";
import { Repository } from "../../interfaces/repository";

interface Repositories {
  repository: Repository;
}
const Repositories = memo(({ repository }: Repositories) => {
  const utcDateString = repository.updated_at.toString();
  const date = new Date(utcDateString);
  const localDateString = date.toLocaleString();
  return (
    <div id="filter-section-mobile-0" key={repository.id}>
      <ul role="list" className="divide-y divide-gray-100 mx-auto p-8">
        <li className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src={repository.owner.avatar_url}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {repository.owner.login}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {repository?.description?.slice(0, 30) || "No Description"}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">
              <>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-git-fork"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="18" r="2" />
                    <circle cx="7" cy="6" r="2" />
                    <circle cx="17" cy="6" r="2" />
                    <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
                    <line x1="12" y1="12" x2="12" y2="16" />
                  </svg>
                  <p className="pl-2">Forks: {repository.forks_count}</p>
                </span>
              </>
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
              {localDateString}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
});

export default Repositories;
