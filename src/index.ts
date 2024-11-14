import APIClient from "./main.js";

const client = new APIClient("http://192.168.96.1:3000/api/v1");

console.log(await client.Faculty().readNonPH())
