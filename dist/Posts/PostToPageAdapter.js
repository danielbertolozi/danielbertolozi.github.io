export class PostToPageAdapter {
    addToPage(post, divId) {
        var _a;
        const elementToAdd = this.buildPost(post);
        (_a = document.getElementById(divId)) === null || _a === void 0 ? void 0 : _a.appendChild(elementToAdd);
    }
    buildPost(post) {
        // TODO: Markdown formatting here. Should check first character to determine element type, or look for **/__/~~
        const postContainer = document.createElement("div");
        postContainer.className = "post";
        const fileName = document.createElement('h5');
        fileName.innerHTML = post.fileName;
        const postCorpus = document.createElement("p");
        postCorpus.innerHTML = post.content;
        postContainer.appendChild(fileName);
        postContainer.appendChild(postCorpus);
        return postContainer;
    }
}
