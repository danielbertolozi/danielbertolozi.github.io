import { GithubPostObject } from "./GithubContentFetcher";
import { PostParser } from "./Parser/PostParser";

export interface PostMetadata {
  Time: string;
  Title: string;
  Tags: string[];
}

export class PostWrapper {
  private metadata: PostMetadata = { Time: "", Title: "", Tags: [] };
  private content: string = "";
  private readonly SEPARATOR = "--/--/--";
  constructor(private rawPost: GithubPostObject) {
    this.parse(rawPost);
  }
  private parse(source: GithubPostObject): void {
    const metadata = PostParser.extractMetadata(source.content, this.SEPARATOR);
    this.content = PostParser.extractPostContent(source.content, this.SEPARATOR);
    if (metadata) {
      this.metadata = {
        Time: PostParser.extractTimeFromMetadata(metadata),
        Title: PostParser.extractTitleFromMetadata(metadata),
        Tags: PostParser.extractTagsFromMetadata(metadata),
      };
    }
  }
  public getRawFile(): string {
    return this.rawPost.content;
  }
  public getFileName(): string {
    return this.rawPost.fileName;
  }
  public getFileUrl(): string {
    return this.rawPost.downloadUrl;
  }
  public getMetadata(): PostMetadata {
    return this.metadata;
  }
  public getContent(): string {
    return this.content;
  }
}
