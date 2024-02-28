import Autocomplete from "react-google-autocomplete";

<Autocomplete
  apiKey="AIzaSyBkk4pDx-Vz48tU4tJ1iMKMPTcs2_csJt0"
  style={{ width: "90%" }}
  onPlaceSelected={(place) => {
    console.log(place);
  }}
  options={{
    types: ["(regions)"],
    componentRestrictions: { country: "ru" },
  }}
  defaultValue="United States"
/>;
