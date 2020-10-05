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
    return this.extractWholeLineThatBeginsWith(metadata, "Title: ");
  }
  public static extractTimeFromMetadata(metadata: string): string {
    return this.extractWholeLineThatBeginsWith(metadata, "Time: ");
  }
  public static extractTagsFromMetadata(metadata: string): string[] {
    return this.extractSequenceEntries(metadata, "Tags:");
  }
  private static extractWholeLineThatBeginsWith(content: string, nodeName: string): string {
    const nodeIndex = content.indexOf(nodeName);
    const nodeLineBreakIndex = content.substring(nodeIndex).indexOf("\n");
    const nodeLabelLength = nodeName.length;

    const start = nodeIndex + nodeLabelLength;
    const end = nodeLineBreakIndex + nodeIndex;
    return content.substring(start, end);
  }
  private static extractSequenceEntries(content: string, nodeName: string): string[] {
    const nodeIndex = content.indexOf(nodeName);
    const labelLineBreakIndex = content.substring(nodeIndex).indexOf("\n") + nodeIndex + 2; // 2 is the length of \n
    const sequenceEnd = /\n[A-Z]/.exec(content.substring(labelLineBreakIndex))?.index;
    return content.substring(labelLineBreakIndex, sequenceEnd).split("\n").map((entry) => entry.trim().substring(2)).filter((entry) => !!entry);
  }
}