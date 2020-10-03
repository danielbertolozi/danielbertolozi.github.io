import env from "./env";
import { GithubContentFetcher } from "./Posts/GithubContentFetcher";

(async () => {
  const fetcher = new GithubContentFetcher();
  const response = await fetcher.importFrom(env.contentsFolder);
  alert(JSON.stringify(response));
})();
