class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-urk");
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/img/foto-default.jpg";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        
        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");

        style.textContent = `
        .card {
            width: 720px;
            border: 1px solid rgb(168, 168, 168);
            -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.16);
            -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.16);
            box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.16);
            display: flex;
            flex-direction: row;
            margin: 1rem auto;
            border-radius: .5rem;
        }
        
        .card-left {
            padding: 1rem;
        }
        
        .card-left,
        .card-right {
            display: flex;
            flex-direction: column;
            justify-content: center;
        
        }
        
        .card-left span {
            font-weight: 300;
        }
        
        .card-left h1 {
            margin-top: 15px;
            font-size: 25px;
            margin-bottom: .3rem;
        }
        
        .card-left a {
            text-decoration: none;
            color: black;
        }
        
        .card-left p {
            color: #343434;
        }
        
        .card-right img {
            border-top-right-radius: .5rem;
            border-bottom-right-radius: .5rem;
        }
        `;

        return style
    }
}

customElements.define("card-news", CardNews);