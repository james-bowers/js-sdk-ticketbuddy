const fetch = require("isomorphic-fetch");

async function post(endpoint, path, body = {}) {
  return await format_response(
    await fetch(endpoint + path, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      }
    })
  );
}

async function format_response(response) {
  const body = await response.json();
  return [response.status == 200, body];
}

const TICKETBUDDY_BACKEND =
  process.env["ticketbuddy_endpoint"] || "http://localhost:8081";

module.exports = { post, TICKETBUDDY_BACKEND };
