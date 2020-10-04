import { GithubPostObject } from "./GithubContentFetcher";

export class PostWrapper {
  private metadata: PostMetadata = { Time: "", Title: "", Tags: [] };
  private content: string = "";
  private readonly SEPARATOR = "--/--/--";
  constructor(private rawPost: GithubPostObject) {
    this.parse(rawPost);
  }
  private parse(source: GithubPostObject): void {
    const metadata = Parser.extractMetadata(source.content, this.SEPARATOR);
    console.log(metadata);
    this.content = Parser.extractPostContent(source.content, this.SEPARATOR);
    this.metadata = {
      Time: "",
      Title: Parser.extractTitleFromMetadata(metadata),
      Tags: [],
    };
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

class Parser {
  public static extractMetadata(content: string, separator: string): string {
    const separatorIndex = this.findSeparator(content, separator);
    return content.substring(0, separatorIndex);
  }
  public static extractPostContent(content: string, separator: string): string {
    const separatorIndex = this.findSeparator(content, separator);
    return content.substring(separatorIndex + separator.length);
  }
  private static findSeparator(content: string, separator: string): number {
    return content.indexOf(separator);
  }
  public static extractTitleFromMetadata(metadata: string): string {
    const titleIndex = metadata.indexOf("Title:");
    const titleLineBreakIndex = metadata.substring(titleIndex).indexOf("\n");
    const titleLabelLength = "Title: ".length;
    return metadata.substring(titleIndex + titleLabelLength, titleLineBreakIndex);
  }
}

export interface PostMetadata {
  Time: string;
  Title: string;
  Tags: string[];
}