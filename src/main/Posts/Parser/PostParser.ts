import { SequenceParser } from "./Metadata/SequenceParser";
import { SimpleNodeParser } from "./Metadata/SimpleNodeParser";

export class PostParser {
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
    return SimpleNodeParser.extractNodeValue(metadata, "Title: ");
  }
  public static extractTimeFromMetadata(metadata: string): string {
    return SimpleNodeParser.extractNodeValue(metadata, "Time: ");
  }
  public static extractTagsFromMetadata(metadata: string): string[] {
    return SequenceParser.extractEntries(metadata, "Tags:");
  }
}