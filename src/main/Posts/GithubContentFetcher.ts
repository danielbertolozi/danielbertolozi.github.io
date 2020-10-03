import Axios from "axios";
import env from "../env";

export class GithubContentFetcher {
  public async importFrom(path: string) {
    const listOfFiles = await this.fetchDownloadLinksFromAPI(path);
    const posts = await this.downloadMultiplePosts(listOfFiles);
    return posts.map(p => p.data);
  }

  private async fetchDownloadLinksFromAPI(path: string): Promise<string[]> {
    const contentInformation = await Axios.get(env.baseUrl + path);
    const parsed = contentInformation.data;
    return parsed.map((entry: GHResponse) => entry.download_url);
  }

  private async downloadMultiplePosts(listOfUrls: string[]) {
    return Promise.all(listOfUrls.map((url) => Axios.get(url)));
  }
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
