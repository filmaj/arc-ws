// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!doctype html>
<html>
<body>
<h1>WebSockets</h1>
<main>Loading...</main>
<input id=message type=text placeholder="Enter message" autofocus>
<script>
window.WS_URL = '${process.env.ARC_WSS_URL}'
</script>
<script type=module src=/_static/index.mjs></script>
</body>
</html>`
  }
}
