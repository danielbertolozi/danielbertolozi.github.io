const FindNextNonSequenceLineRegExp = /\n[A-Z]/;

export class SequenceParser {
  public static extractEntries(content: string, nodeName: string): string[] {
    const start = this.findWhereSequenceItemsBegins(content, nodeName);
    const end = SequenceParser.findWhereSequenceItemsEnds(content, nodeName);

    const entries = content
      .substring(start, end)
      .split("\n");

    const cleanEntries = this.trimAndRemoveBulletPoints(entries);
    return this.removeEmptyValues(cleanEntries);
  }
  private static findWhereSequenceItemsBegins(content: string, nodeName: string): number {
    const nodePosition = content.indexOf(nodeName);
    const labelLineBreakIndex = content.substring(nodePosition).indexOf("\n");
    return labelLineBreakIndex + nodePosition + "\n".length;
  }
  private static findWhereSequenceItemsEnds(content: string, nodeName: string) {
    const nodePosition = content.indexOf(nodeName);
    const labelLineBreakIndex = content.substring(nodePosition).indexOf("\n");
    const sequenceEnd = FindNextNonSequenceLineRegExp.exec(content.substring(labelLineBreakIndex))?.index;
    if (sequenceEnd) {
      return sequenceEnd + labelLineBreakIndex;
    }
    return undefined;
  }
  private static removeEmptyValues(array: string[]): string[] {
    return array.filter(e => !!e);
  }
  private static trimAndRemoveBulletPoints(array: string[]) {
    return array.map(e => e.trim().substring(2));
  }
}