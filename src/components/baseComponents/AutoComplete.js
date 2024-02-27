import React, { useState } from "react";

import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

export const AutoComplete = () => {
  const apiKey = "2b35b28f8163427c9fc6e124f3abd05f";
  function sendGeocoderRequest(value, geocoder) {
    console.log(value, value); //the search term
    return geocoder.sendGeocoderRequest(value);
  }

  function sendPlaceDetailsRequest(feature, geocoder) {
    console.log(feature); // the result of the search
    return geocoder.sendPlaceDetailsRequest(feature);
  }
  return (
    <GeoapifyContext apiKey={apiKey}>
      <GeoapifyGeocoderAutocomplete
        placeholder="Enter address here"
        sendGeocoderRequestFunc={sendGeocoderRequest}
        sendPlaceDetailsRequestFunc={sendPlaceDetailsRequest}
      />
    </GeoapifyContext>
  );
};
