const APIURL = "https://queue-ticketing-application.herokuapp.com/";
// const localhost = "http://127.0.0.1:8000/";
// const APIURL = localhost;
const CORSProxy = "https://shrouded-waters-19257.herokuapp.com/";
// const CORSProxy = "";

async function getReq(url){
    const response = await fetch(CORSProxy + APIURL + url, 
    {
      method: "GET",
    })
    .then((response) => {
      if (response.status === 200 || response.status === 201 || response.status === 202) {
        console.log("Request to " + url + " success");
        return response.json();
      }
      else {
        console.log("Request to " + url + " failed.");
        alert("An error has occured. Please try again later!");
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  return response;
}

async function postCounterReq(url, counterNo){
    const response = await fetch(CORSProxy + APIURL + url + "?counterNo=" + counterNo, 
    {
      method: "POST",
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      // body: JSON.stringify(requestBody)
    })
    .then((response) => {
      if (response.status === 200 || response.status === 201 || response.status === 202) {
        console.log("Request to " + url + " success");
        return response.json();
      }
      else {
        console.log("Request to " + url + " failed.");
        alert("An error has occured. Please try again later!");
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
    })
  return response;
}

export {APIURL, getReq, postCounterReq};