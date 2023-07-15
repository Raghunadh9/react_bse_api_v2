export default async function maxuc(scrip_cd) {
  const res = await fetch(
    `https://bse-api-server.vercel.app/getDetails?scripcode=${scrip_cd}`
  );
  if (!res.ok) return new Error("Error fetching maxuc");
  return res.json();
}
