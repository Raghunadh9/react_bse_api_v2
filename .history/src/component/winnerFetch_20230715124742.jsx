import useSWR from "swr";
export const winnerFetch = (scrip_cd) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`,
    fetcher
  );
  if (error) return <div className="">failed to load</div>;
  if (isLoading) return <div className="">loading...</div>;
  return data.PBpcUC.toString() === "5" ? "hidden" : data.PBpcUC.toString();
};
