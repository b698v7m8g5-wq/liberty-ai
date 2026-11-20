export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({
        app: "LIBERTY AI",
        status: "Servidor preparado"
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
