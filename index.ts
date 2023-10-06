import { app, port } from "./src/server";

const main = async () => {
  app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
  });
};

main();
