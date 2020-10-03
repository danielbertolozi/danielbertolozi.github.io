import env from "./env";
import { Fetcher } from "./Posts/Fetcher";

(async () => {
  const fetcher = new Fetcher();
  const response = await fetcher.importFrom(env.contentsFolder);
  alert(JSON.stringify(response));
})();
