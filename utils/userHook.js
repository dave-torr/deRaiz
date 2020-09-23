import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

//All relevant user stuff is made to pass through userProfile API, using POST for signup, GET for login, DELETE, for Logout, and PATCH to update.
export function useUser() {
  const { data, mutate } = useSWR('/api/userProfiles', fetcher);
  const user = data && data.user;
  return [user, { mutate }];
}