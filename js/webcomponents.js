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
                transition: all 0.5s;

            }
            #dropdown:hover .dropdown-content{
                display: block;
            }
            .dropdown-content {
                display: none;
                padding-top: 5px;
            }
            .dropdown-content a {
                color: lightblue;
            }
        </style>
        `
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        ${style}
        <div class="boxcard">

        <h2>${this.getAttribute("projectName")}</h2>
        <a href=${this.getAttribute("liveurl")} target="blank"><img src=${this.getAttribute("img")} alt="An image of Daniel's website"></a>
        <p>${this.getAttribute("description")}</p>
        <div id="dropdown">
        <div class="dropdown-content">
            <a href=${this.getAttribute("github")} target="blank">Check it out on Github</a>
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