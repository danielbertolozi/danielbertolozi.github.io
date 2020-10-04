import { GithubPostObject } from "./GithubContentFetcher";

export class PostWrapper {
  constructor(private source: GithubPostObject) {}
  public getRawPost(): string {
    return this.source.content;
  }
  public getFileName(): string {
    return this.source.fileName;
  }
  public getFileUrl(): string {
    return this.source.downloadUrl;
  }
}