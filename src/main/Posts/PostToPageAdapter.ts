import { PostWrapper } from "./PostWrapper";

export class PostToPageAdapter {
  public addToPage(post: PostWrapper, divId: string): void {
    const elementToAdd = this.buildPost(post);
    document.getElementById(divId)?.appendChild(elementToAdd);
  }
  private buildPost(post: PostWrapper): Node {
    // TODO: Markdown formatting here. Should check first character to determine element type, or look for **/__/~~
    const postContainer = document.createElement("div");
    postContainer.className = "post";

    const fileName = document.createElement('h5');
    fileName.innerHTML = post.getFileName();

    const postCorpus = document.createElement("p");
    postCorpus.innerHTML = post.getContent();;
    postContainer.appendChild(fileName);
    postContainer.appendChild(postCorpus);
    return postContainer;
  }
}