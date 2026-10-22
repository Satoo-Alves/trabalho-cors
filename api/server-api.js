const http = require("http");
const PORT = 8080;

const ORIGEM_PERMITIDA = "https://organic-space-computing-machine-rqgvgqq76r4c564w-3000.app.github.dev"; 

http.createServer((req, res) => {

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": ORIGEM_PERMITIDA,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "X-Identificador-Estudante, Content-Type",
      "Access-Control-Max-Age": "60"
    });
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/dados") {
    res.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": ORIGEM_PERMITIDA
    });
    res.end(
      JSON.stringify({
        matricula: "2026108955",
        status: "Davi-Alves"
      })
    );
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ erro: "Nao encontrado" }));

// ATENÇÃO AQUI: Adicionamos "0.0.0.0" no listen para aceitar conexões do Codespaces
}).listen(PORT, "0.0.0.0", () => {
  console.log(`[API] Servidor ativo na porta ${PORT}`);
});