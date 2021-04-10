// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////
//PROJECT CARD COMPONENT
class ProjectCard extends HTMLElement {
    constructor(){
        super()

        this.innerHTML = `<h1>Hello World</h1>`
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

customElements.define("project-card", ProjectCard)