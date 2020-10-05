export class SimpleNodeParser {
  public static extractNodeValue(content: string, nodeName: string): string {
    const start = this.findWhereContentBegins(content, nodeName);
    const end = this.findWhereContentEnds(content, nodeName);
    
    return content.substring(start, end).trim();
  }
  private static findWhereContentBegins(content: string, nodeName: string): number {
    const nodePosition = content.indexOf(nodeName);
    const nodeLabelLength = nodeName.length;
    return nodePosition + nodeLabelLength;    
  }
  private static findWhereContentEnds(content: string, nodeName: string): number | undefined {
    const nodePosition = content.indexOf(nodeName);
    const nodeLineBreakIndex = content.substring(nodePosition).indexOf("\n");
    if (nodeLineBreakIndex > 0) {
      return nodeLineBreakIndex + nodePosition;
    }
    return undefined;
  }
}