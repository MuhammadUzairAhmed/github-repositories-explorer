interface Owner {
  id: number;
  login: string;
  avatar_url: string;
}

export interface Repository {
  id: number;
  updated_at: string;
  description: string | null;
  forks_count: number;
  owner: Owner;
}
