import { PostWrapper } from "./PostWrapper";

export class PostSorter {
  public static newToOld(posts: PostWrapper[]): void {
    posts.sort(
      (p1, p2) => this.getPostTime(p2) - this.getPostTime(p1)
    );
  }

  private static getPostTime(post: PostWrapper): number {
    return new Date(post.getMetadata().Time).getTime();
  }
}