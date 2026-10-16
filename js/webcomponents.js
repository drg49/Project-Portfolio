//PROJECT CARD COMPONENT
class ProjectCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

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
                width: 100%;
                height: auto;
            }
            .boxcard > a > img {
                width: 351px;
                height: 169px;
                object-fit: cover;
                background-color: black;
            }
            p {
             margin: 0;
             height: 168px;
             padding: 10px;
             color: white; 
             text-align: left;
            }
            #dropdown {
                border-top:1px solid;
            }
            .dropdown-content {
                padding-bottom: 5px;
                padding-top: 5px;
            }
            .details-trigger {
              padding: 0;
              border: 0;
              background: transparent;
              color: lightblue;
              cursor: pointer;
              font: inherit;
            }
            .details-trigger:hover {
              color: lightskyblue;
            }
            .details-modal {
              width: min(900px, calc(100vw - 32px));
              max-width: none;
              max-height: 85vh;
              padding: 0;
              overflow: auto;
              border: 1px solid #78909c;
              border-radius: 8px;
              color: #172a36;
              background: white;
              box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
            }
            .details-modal::backdrop {
              background: rgba(0, 0, 0, 0.68);
            }
            .modal-header {
              position: sticky;
              top: 0;
              z-index: 1;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 16px;
              padding: 16px 22px;
              border-bottom: 1px solid #d6e0e4;
              background: white;
            }
            .modal-header h2 {
              margin: 0;
              color: #172a36;
              text-align: left;
            }
            .modal-close {
              flex: 0 0 auto;
              padding: 7px 12px;
              border: 1px solid #49616d;
              border-radius: 4px;
              background: white;
              color: #172a36;
              cursor: pointer;
            }
            .modal-close:hover {
              background: #edf3f5;
            }
            .modal-body {
              padding: 22px;
              overflow-wrap: anywhere;
              text-align: left;
            }
            .modal-body p {
              height: auto;
              margin: 0;
              padding: 0;
              color: inherit;
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
        `;
    this.shadowRoot.innerHTML = `
        ${style}
        <div class="boxcard">

        <a href=${this.getAttribute(
          'liveurl',
        )} target="_blank"><h2>${this.getAttribute('projectName')}</h2></a>
        <a href=${this.getAttribute(
          'liveurl',
        )} target="_blank"><img src=${this.getAttribute(
          'img',
        )} alt="An image of Daniel's website"></a>
        <a href=${this.getAttribute(
          'liveurl',
        )} target="_blank"><p>${this.getAttribute('description')}</p></a>
        <div id="dropdown">
        <div class="dropdown-content">
            <button class="details-trigger" type="button" aria-haspopup="dialog">Open Project Details</button>
        </div>
        </div>
        <dialog class="details-modal" aria-labelledby="details-title">
            <div class="modal-header">
                <h2 id="details-title">${this.getAttribute('projectName')}</h2>
                <button class="modal-close" type="button">Close</button>
            </div>
            <div class="modal-body details-content"></div>
        </dialog>
        </div>
        `;

    const detailsTemplate = document.getElementById(
      this.getAttribute('details-template'),
    );
    const detailsContent = this.shadowRoot.querySelector('.details-content');
    if (detailsTemplate) {
      detailsContent.append(detailsTemplate.content.cloneNode(true));
    } else {
      detailsContent.textContent = 'Project details coming soon.';
    }

    const dialog = this.shadowRoot.querySelector('.details-modal');
    this.shadowRoot
      .querySelector('.details-trigger')
      .addEventListener('click', () => dialog.showModal());
    this.shadowRoot
      .querySelector('.modal-close')
      .addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }
}

customElements.define('project-card', ProjectCard);
