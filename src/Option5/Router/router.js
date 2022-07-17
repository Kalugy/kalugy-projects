export class Router {
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }
    initRouter() {
        const {
            location: {
                pathname = "/"
            }
        } = window;
        const URI = pathname === "/" ? "home" : pathname.replace("/", "");
        this.load(URI);
    }
    load(page) {
        console.log("page",page)
        console.log(page)
        
        if(page=='kalugy-projects/v5' || page=='home' ){
            return
        }
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const $CONTAINER = document.querySelector("#content");
        console.log("$CONTAINER",$CONTAINER)
        console.log("template",template)
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, "Genial", path);
    }
}