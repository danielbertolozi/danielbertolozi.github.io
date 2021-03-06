import Axios from "axios";
import env from "../env";
import { PostWrapper } from "./PostWrapper";

export class GithubContentFetcher {
  public async importFrom(path: string): Promise<PostWrapper[]> {
    const listOfFiles = await this.fetchDownloadLinksFromAPI(path);
    return this.downloadMultiplePosts(listOfFiles);
  }

  private async fetchDownloadLinksFromAPI(path: string): Promise<CleanedResponse[]> {
    const contentInformation = await Axios.get(env.baseUrl + path);
    const parsed = contentInformation.data;
    return parsed.map((entry: GHResponse) => ({name: entry.name, downloadUrl: entry.download_url, htmlUrl: entry.html_url}));
  }

  private async downloadMultiplePosts(listOfPostsMeta: CleanedResponse[]) {
    return Promise.all(listOfPostsMeta.map((post) => {
      return new Promise<PostWrapper>(async (resolve) => {
        const content = await Axios.get<string>(post.downloadUrl);
        resolve(new PostWrapper({
          fileName: post.name,
          content: content.data,
          downloadUrl: post.downloadUrl,
          htmlUrl: post.htmlUrl
        }));
      });
    }));
  }
}

export interface GithubPostObject {
  fileName: string;
  content: string;
  downloadUrl: string;
  htmlUrl: string;
}

interface GHResponse {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
}

interface CleanedResponse {
  name: string;
  downloadUrl: string;
  htmlUrl: string;
}
