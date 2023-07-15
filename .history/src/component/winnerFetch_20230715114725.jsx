import useSWR from "swr";
export const winnerFetch = (scrip_cd) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`,
    fetcher
  );
  if (error) return "failed to load";
  if (isLoading) return "loading...";
  return data.PBpcUC.toString();
};
