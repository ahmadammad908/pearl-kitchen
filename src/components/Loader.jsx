import React from "react";

export default function Loader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="loader"></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading</h1>
      </div>
    </>
  );
}

// const body = new FormData();

// const values = {
//   outlet_id: 39,
//   requested_from: "Single",
//   company_id: 8,
//   user_id: 0,
//   user_location_data:
//     '{"Lat":28.4122064,"Long":70.3316261,"Address":"C86J+RQM, Rahim Yar Khan, Punjab, Pakistan","Area":"","City":"Rahim Yar Khan","Country":"Pakistan","Flatflor":"","Default":true,"Type":"Home"}',
//   device: "Android",
//   Deviceid: null,
// };

// Object.entries(values).forEach(([key, value]) => body.append(key, value));

// console.log(
//   fetch("https://digishop.binofapp.com/outlet-categories-product", {
//     body,
//     method: "POST",
//   })
// );

// var myHeaders = new Headers();
// myHeaders.append(
//   "Cookie",
//   "ci_session=a%3A4%3A%7Bs%3A2%3A%22id%22%3Bs%3A32%3A%22adfdbca8eb8c2889c93d6aec4a743f57%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A13%3A%22103.163.49.78%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A21%3A%22PostmanRuntime%2F7.29.0%22%3Bs%3A9%3A%22timestamp%22%3Bi%3A1678363525%3B%7Dbfa8d23ae61c0b8704562188d0c63151"
// );

// var formdata = new FormData();
// formdata.append("outlet_id", "39");
// formdata.append("requested_from", "Single");
// formdata.append("company_id", "8");
// formdata.append("user_id", "0");
// formdata.append(
//   "user_location_data",
//   '{\\"Lat\\":28.4122064,\\"Long\\":70.3316261,\\"Address\\":\\"C86J+RQM, Rahim Yar Khan, Punjab, Pakistan\\",\\"Area\\":\\"\\",\\"City\\":\\"Rahim Yar Khan\\",\\"Country\\":\\"Pakistan\\",\\"Flatflor\\":\\"\\",\\"Default\\":true,\\"Type\\":\\"Home\\"}'
// );
// formdata.append("device", "Android");
// formdata.append("Deviceid", "NULL");

// var requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: formdata,
//   redirect: "follow",
// };
