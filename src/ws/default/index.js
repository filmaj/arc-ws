// learn more about WebSocket functions here: https://arc.codes/primitives/ws
const arc = require('@architect/functions');
exports.handler = async function ws (req) {
  const connId = req.requestContext.connectionId;
  console.log(connId, JSON.stringify(req, null, 2))
  let data = JSON.parse(req.body);
  let response = {text: "SERVER ANSWERS IN ALL CAP: " + data.text.toUpperCase()};
  await arc.ws.send({id: connId, payload: response});
  return {statusCode: 200}
}
