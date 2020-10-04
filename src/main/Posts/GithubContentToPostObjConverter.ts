import { GithubPostObject } from "./GithubContentFetcher";
import { PostWrapper } from "./PostWrapper";

export class GithubContentToPostObjConverter {
  public convert(post: GithubPostObject): PostWrapper {
    return new PostWrapper(post);
  }
}