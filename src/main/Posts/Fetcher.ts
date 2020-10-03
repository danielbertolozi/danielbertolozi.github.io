export class Fetcher {
  public async importFrom(path: string) {
    // TODO: set base URL based on .env. 
    // For deploy should use fetch('https://api.github.com/repos/danielbertolozi/danielbertolozi.github.io/contents/content');
    // Deploy's URL should be at a .env
    // For local, I should create a server that mocks that, using content's content 
    const request = new XMLHttpRequest();
    const baseUrl = "http://localhost:9080";
    path = "https://api.github.com/repos/danielbertolozi/danielbertolozi.github.io/contents/content";
    request.open("GET", path);
    request.onreadystatechange = () => alert(request.response);
    request.send();
    // TODO: Return promise
  }
}