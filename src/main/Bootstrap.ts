import env from "./env";
import { GithubContentFetcher } from "./Posts/GithubContentFetcher";
import { PostToPageAdapter } from "./Posts/PostToPageAdapter";

(async () => {
  const fetcher = new GithubContentFetcher();
  const posts = await fetcher.importFrom(env.contentsFolder);
  const adapter = new PostToPageAdapter();
  posts.forEach((p) => adapter.addToPage(p, env.postsDivId));
})();
