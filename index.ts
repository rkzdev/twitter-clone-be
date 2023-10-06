import { app, port } from "./src/server";

const PORT = Bun.env.PORT;

async function main() {
  app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
