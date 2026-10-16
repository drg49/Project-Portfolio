//PROJECT CARD COMPONENT
const projectCardThemes = {
  1: {
    cardStart: '#005d92',
    cardEnd: '#007f72',
    cardBorder: '#087d91',
    cardText: '#ffffff',
    detailsTrigger: '#ffffff',
    detailsDivider: '#1fa1b8',
    modalBackground: '#082b3b',
    modalHeader: '#06445b',
    modalBorder: '#187388',
    modalText: '#d8f5f7',
    modalTitle: '#ffffff',
    accent: '#1fa1b8',
    accentHover: '#167f92',
  },
  2: {
    cardStart: '#3a1b98',
    cardEnd: '#2e02ac',
    cardBorder: '#6848bb',
    cardText: '#ffffff',
    detailsTrigger: '#ffffff',
    detailsDivider: '#8250df',
    modalBackground: '#160d2b',
    modalHeader: '#241546',
    modalBorder: '#4b3274',
    modalText: '#e9ddff',
    modalTitle: '#ffffff',
    accent: '#8250df',
    accentHover: '#6840b5',
  },
  3: {
    cardStart: '#111111',
    cardEnd: '#292600',
    cardBorder: '#8a7900',
    cardText: '#fffbd1',
    detailsTrigger: '#fffbd1',
    detailsDivider: '#b39b00',
    modalBackground: '#111111',
    modalHeader: '#252000',
    modalBorder: '#807600',
    modalText: '#fffbd1',
    modalTitle: '#fff200',
    accent: '#b39b00',
    accentHover: '#8f7b00',
  },
  4: {
    cardStart: '#00966f',
    cardEnd: '#157241',
    cardBorder: '#48a97b',
    cardText: '#ffffff',
    detailsTrigger: '#ffffff',
    detailsDivider: '#2da675',
    modalBackground: '#073b2d',
    modalHeader: '#10553e',
    modalBorder: '#36805f',
    modalText: '#e6fff0',
    modalTitle: '#baffd4',
    accent: '#2da675',
    accentHover: '#23845d',
  },
};

class ProjectCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const style = `
        <style>
            :host {
              --card-start: #005d92;
              --card-end: #007f72;
              --card-border: #087d91;
              --card-text: #ffffff;
              --details-trigger-color: #ffffff;
              --details-divider: #ffffff;
              --modal-background: #082b3b;
              --modal-header: #06445b;
              --modal-border: #187388;
              --modal-text: #d8f5f7;
              --modal-title: #ffffff;
              --theme-accent: #1fa1b8;
              --theme-accent-hover: #167f92;
            }
            .boxcard {
              width: min(350px, calc(100vw - 40px));
                text-align: center;
                border: 1px solid var(--card-border);
                border-radius: 9px;
                margin-top: 14px;
                margin-left: 10px;
                margin-right: 10px;
                margin-bottom: 28px;
                background-color: var(--card-start);
                background-image: linear-gradient(160deg, var(--card-start) 0%, var(--card-end) 100%);
            }
            .boxcard:hover {
              box-shadow: 0 0 10px var(--theme-accent);
            }
            h2 {
              color: var(--card-text);
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
             color: var(--card-text); 
             text-align: left;
            }
            #dropdown {
              border-top: 1px solid var(--details-divider);
            }
            .dropdown-content {
                padding-bottom: 5px;
                padding-top: 5px;
            }
            .details-trigger {
              padding: 0;
              border: 0;
              background: transparent;
              color: var(--details-trigger-color);
              cursor: pointer;
              font: inherit;
            }
            .details-trigger:hover {
              color: var(--details-trigger-color);
              text-decoration: underline;
            }
            .details-modal {
              width: min(900px, calc(100vw - 32px));
              max-width: none;
              max-height: 85vh;
              padding: 0;
              overflow: auto;
              border: 1px solid var(--modal-border);
              border-radius: 8px;
              color: var(--modal-text);
              background: var(--modal-background);
              box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
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
              border-bottom: 1px solid var(--modal-border);
              background: var(--modal-header);
            }
            .modal-header h2 {
              min-width: 0;
              margin: 0;
              color: var(--modal-title);
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
              border-color: var(--theme-accent);
              background: var(--theme-accent);
              color: white;
              font-weight: 600;
              text-decoration: none;
            }
            .view-link:hover {
              border-color: var(--theme-accent-hover);
              background: var(--theme-accent-hover);
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
              border-color: var(--theme-accent);
              background: var(--theme-accent);
              color: white;
            }
            .modal-close:hover {
              border-color: var(--theme-accent-hover);
              background: var(--theme-accent-hover);
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
              color: var(--modal-text);
              text-align: left;
            }
            .modal-body h3 {
              color: var(--modal-title);
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

  setTheme(theme) {
    const palette = projectCardThemes[theme] || projectCardThemes['1'];
    const properties = {
      '--card-start': palette.cardStart,
      '--card-end': palette.cardEnd,
      '--card-border': palette.cardBorder,
      '--card-text': palette.cardText,
      '--details-trigger-color': palette.detailsTrigger,
      '--details-divider': palette.detailsDivider,
      '--modal-background': palette.modalBackground,
      '--modal-header': palette.modalHeader,
      '--modal-border': palette.modalBorder,
      '--modal-text': palette.modalText,
      '--modal-title': palette.modalTitle,
      '--theme-accent': palette.accent,
      '--theme-accent-hover': palette.accentHover,
    };

    Object.entries(properties).forEach(([property, value]) => {
      this.style.setProperty(property, value);
    });
  }
}

customElements.define('project-card', ProjectCard);
