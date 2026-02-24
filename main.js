const currency = "USD";
const date_from = "20220707";
const date_to = "20220719";

const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange");

nbuUrl.searchParams.append("valcode", currency);
nbuUrl.searchParams.append("start", date_from);
nbuUrl.searchParams.append("finish", date_to);
nbuUrl.searchParams.append("json", "");

console.log(nbuUrl.toString());