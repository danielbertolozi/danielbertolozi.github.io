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

    const fileName = document.createElement('span');
    fileName.innerHTML = post.getFileName();

    const time = document.createElement("span");
    time.innerHTML = post.getMetadata().Time;

    const upperPart = document.createElement("div");
    upperPart.className = "post-filename-and-time";

    upperPart.appendChild(fileName);
    upperPart.appendChild(time);

    const title = document.createElement('h2');
    title.innerHTML = post.getMetadata().Title;

    const postCorpus = document.createElement("p");
    postCorpus.innerHTML = post.getContent();
    postCorpus.className = "post-corpus";

    const tags = document.createElement("span");
    tags.innerHTML = post.getMetadata().Tags.join(" | ");
    tags.className = "tags";

    postContainer.appendChild(upperPart);
    postContainer.appendChild(title);
    postContainer.appendChild(postCorpus);
    postContainer.appendChild(tags);
    return postContainer;
  }
}