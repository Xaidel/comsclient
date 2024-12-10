import APIClient from "./main.js";
import fs from "fs"

const client = new APIClient("http://192.168.1.11:3000/api/v1");

const path = "../../sample.csv"
const fileBuffer = fs.readFileSync(path)
const file = new File([fileBuffer], 'sample.csv', { type: 'text/csv' })
console.log(await client.Course().batchProcess(file))
