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
                margin-left: 10px;
                margin-right: 10px;
                margin-bottom: 28px;
                background-color: #005d92;
                background-image: linear-gradient(160deg, #005d92 0%, #007f72 100%);
            }
            .boxcard:hover {
                box-shadow: 0 0 10px #ccc;
            }
            h2 {
                color: white;
            }
            img {
                width: 350px;
                height: 169px;
                object-fit: cover;
                background-color: black;
            }
            p {
             margin: 0;
             height: 168px;
             padding: 10px;
             color: white; 
             text-align: center;
            }
            #dropdown {
                border-top:1px solid;
            }
            .dropdown-content {
                padding-bottom: 5px;
                padding-top: 5px;
            }
            .dropdown-content a {
                text-decoration: none;
                color: lightblue;
            }
            .dropdown-content a:hover {
                color: lightskyblue;
            }

            a {
                text-decoration: none;
            }

        </style>
        `
        this.shadowRoot.innerHTML = `
        ${style}
        <div class="boxcard">

        <a href=${this.getAttribute("liveurl")} target="_blank"><h2>${this.getAttribute("projectName")}</h2></a>
        <a href=${this.getAttribute("liveurl")} target="_blank"><img src=${this.getAttribute("img")} alt="An image of Daniel's website"></a>
        <a href=${this.getAttribute("liveurl")} target="_blank"><p>${this.getAttribute("description")}</p></a>
        <div id="dropdown">
        <div class="dropdown-content">
            <a href=${this.getAttribute("github")} target="blank">Check it out on Github</a>
        </div>
        </div>

        </div>
        `
    }
}

customElements.define("project-card", ProjectCard)