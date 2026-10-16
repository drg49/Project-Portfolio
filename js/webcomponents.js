//PROJECT CARD COMPONENT
class ProjectCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const style = `
        <style>
            .boxcard {
              width: min(350px, calc(100vw - 40px));
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
              width: 100%;
              height: auto;
              aspect-ratio: 351 / 169;
                object-fit: cover;
                background-color: black;
            }
            p {
             margin: 0;
             height: 130px;
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
              min-width: 0;
              margin: 0;
              color: #172a36;
              text-align: left;
            }
            .modal-actions {
              display: flex;
              flex: 0 0 auto;
              gap: 14px;
            }
            .view-link,
            .repository-link,
            .modal-close {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              flex: 0 0 auto;
              min-height: 36px;
              padding: 7px 12px;
              border: 1px solid #49616d;
              border-radius: 4px;
              background: white;
              color: #172a36;
              font: inherit;
              cursor: pointer;
            }
            .view-link {
              border-color: #0969da;
              background: #0969da;
              color: white;
              font-weight: 600;
              text-decoration: none;
            }
            .view-link:hover {
              border-color: #0550ae;
              background: #0550ae;
              color: white;
            }
            .repository-link {
              gap: 8px;
              border-color: #57606a;
              background: #24292f;
              color: white;
              font-weight: 600;
              text-decoration: none;
            }
            .repository-link:hover {
              border-color: #57606a;
              background: #32383f;
              color: white;
            }
            .modal-close {
              border-color: #c9363e;
              background: #c9363e;
              color: white;
            }
            .modal-close:hover {
              border-color: #a40e26;
              background: #a40e26;
              color: white;
            }
            .view-link:focus-visible,
            .repository-link:focus-visible,
            .modal-close:focus-visible {
              outline: 2px solid #167d8d;
              outline-offset: 2px;
            }
            @media (max-width: 600px) {
              .modal-header {
                flex-wrap: wrap;
                padding: 14px;
              }
              .modal-header h2 {
                flex-basis: 100%;
              }
              .modal-actions {
                width: 100%;
                flex-wrap: wrap;
                gap: 12px;
              }
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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
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
              <div class="modal-actions">
                <a class="view-link" href="${this.getAttribute('liveurl')}" target="_blank" rel="noopener noreferrer">Demo</a>
                <a class="repository-link" href="${this.getAttribute('github')}" target="_blank" rel="noopener noreferrer"><i class="fa fa-github" aria-hidden="true"></i><span>GitHub Repository</span></a>
                <button class="modal-close" type="button">Close</button>
              </div>
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
