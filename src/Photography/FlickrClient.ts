import { Axios } from "axios";

export class FlickrClient {
  private api: Axios;
  private readonly apiKey: string | undefined;
  constructor() {
    this.api = new Axios({
      baseURL: "https://www.flickr.com/services/rest/",
    });
    this.apiKey = process.env.REACT_APP_FLICKR_KEY;
  }

  public getPhotos() {
    return this.api.get("", {
      params: {
        method: "flickr.people.getPublicPhotos",
        api_key: this.apiKey,
        user_id: "100767911@N03",
        format: "json",
        nojsoncallback: "1"
      }
    });
  }
}
