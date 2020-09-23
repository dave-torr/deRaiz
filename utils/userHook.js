import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useUser() {
  const { data, mutate } = useSWR('/api/userProfiles', fetcher);
  const user = data && data.user;
  return [user, { mutate }];
}