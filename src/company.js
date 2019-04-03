const client = require("./client");

exports.create = async function() {
  return await client.post(client.TICKETBUDDY_BACKEND, "/company", {});
};
