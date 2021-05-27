const data = require('@begin/data')
const arc = require("@architect/functions");
const {randomInt} = require("crypto")

exports.handler = arc.http.async(async (req) => {
  await data.set({
    table: "data",
    key: "cool",
    stored: {
      n: randomInt(100),
      isCool: Math.random() > 0.5
    }
  })
  const d = await data.get({
    table: "data",
    key: "cool"
  })
  return {
    statusCode: 201,
    json: {
      ok: true,
      ...d
    },
    cors: true,
  };
});
