export class PostToPageAdapter {
  public addToPage(post: string, divId: string): void {
    const elementToAdd = this.buildPost(post);
    document.getElementById(divId)?.appendChild(elementToAdd);
  }
  private buildPost(post: string): Node {
    // TODO: Markdown formatting here. Should check first character to determine element type, or look for **/__/~~
    const div = document.createElement("div");
    div.className = "post";
    const paragraph = document.createElement("p");
    paragraph.innerHTML = post;
    div.appendChild(paragraph);
    return div;
  }
}