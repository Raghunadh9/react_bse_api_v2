import axios from "axios";

export default async function getDetails(scrip_cd) {
  axios
    .get(
      `https://api.bseindia.com/BseIndiaAPI/api/PriceBand/w?scripcode=${scrip_cd}`
    )
    .then((res) => <span>{res.data.PBpcUC}</span>)
    .catch((err) => console.log(err));
}
