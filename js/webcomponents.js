// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////
//PROJECT CARD COMPONENT

class ProjectCard extends HTMLElement {
    constructor(){
        super()
        
        this.attachShadow({mode: "open"})
        
        const style = `
        <style>
            .boxcard {
                width: 350px;
                text-align: center;
                border: 1px solid;
                border-radius: 9px;
                margin-top: 14px;
                margin-bottom: 28px;
                background-color: #c150ff;
            }
            .boxcard:hover {
                box-shadow: 0 0 10px #ccc;
            }
            img {
                width: 350px;
            }
            p {
             margin: 0;
             padding: 10px;
             color: white; 
             text-align: center;
            }
            #dropdown {
                border-top:1px solid;
                transition: all 0.5s;
            }
            #dropdown:hover .dropdown-content{
                display: block;
            }
            .dropdown-content {
                display: none;
                padding-top: 5px;
            }
        </style>
        `
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        ${style}
        <div class="boxcard">

        <h2>${this.getAttribute("projectName")}</h2>
        <img src=${this.getAttribute("img")}>
        <p>${this.getAttribute("description")}</p>
        <div id="dropdown">
        <div class="dropdown-content">
            <a>Check it out on Github</a>
        </div>
        <i class="fas fa-chevron-down"></i>
        </div>

        </div>
        `
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

customElements.define("project-card", ProjectCard)