export async function getDetails(scrip_cd) {
  try {
    const res = await fetch(
      `https://api.bseindia.com/BseIndiaAPI/api/PriceBand/w?scripcode=${scrip_cd}`
    );
    const result = await res?.json();
    if (result.PBpcUC === "5") {
      return "5";
    }
    return result.PBpcUC;
  } catch (error) {
    console.log(error);
  }
}
