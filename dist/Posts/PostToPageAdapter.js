export class PostToPageAdapter {
    addToPage(post, divId) {
        var _a;
        const elementToAdd = this.buildPost(post);
        (_a = document.getElementById(divId)) === null || _a === void 0 ? void 0 : _a.appendChild(elementToAdd);
    }
    buildPost(post) {
        // TODO: Markdown formatting here. Should check first character to determine element type, or look for **/__/~~
        const div = document.createElement("div");
        div.className = "post";
        const paragraph = document.createElement("p");
        paragraph.innerHTML = post;
        div.appendChild(paragraph);
        return div;
    }
}
