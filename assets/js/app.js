
/*setInterval(function () {
    spanAnime.innerText = textStrong;
    if(textStrong == 'Developer Fullstack') textStrong = 'ANDRIAMASY Marc Athanase';
    else textStrong = 'Developer Fullstack';
},5000);*/

let strongA = document.querySelector('#home p strong');
typingAnimation(strongA, strongA.innerText);

function typingAnimation(container, text) {
    // Home animation
    container.innerText = '';
    let spansA = [];
    let max = text.length;
    for(let i=0; i<max; i++){
        let span = document.createElement('span');
        span.innerText = text[i];
        if(span.textContent == ' ') {
            span.style.width = '5px';
        }

        spansA[i] = span

    }


    let i = 0;
    setInterval(function () {
        container.appendChild(spansA[i]);
        i++;
        if(spansA[i]==undefined) {
            if(text == 'ANDRIAMASY Athanase Marc') text = 'Developer Fullstack';
            else text = 'ANDRIAMASY Athanase Marc';
            container = document.querySelector('#home p strong');
            setTimeout(() => {
                typingAnimation(container, text);
            }, 1000);
        }
    }, 500)

}
// dynamic navigation
const links = document.querySelectorAll('header ul li a');
links.forEach(link => {
    link.addEventListener('click', function() {
        if(!this.parentNode.classList.contains('active')) {
            // remove class active on active content
            activeElement = document.querySelector('header ul li.active');
            activeElement.classList.remove('active');
            
            // add class active on the new content
            this.parentNode.classList.add('active');
        }
    })
});


// content dynamic project
const contentProject = document.getElementById('contentProject');
const titles = document.querySelectorAll('#projects h2');
let gitHub = document.querySelector('#projects p a i');
gitHub = gitHub.parentElement;
const gitLinksProjects = {
    portfolio: 'https://github.com/athanase25537/new-portfolio',
    fanorona: 'https://github.com/athanase25537/fanorona',
    quizapp: 'https://github.com/athanase25537/quiz'
}

let id = 'portfolio';
gitHub.setAttribute('href', gitLinksProjects[`${id}`]);

const webLinksProjects = {
    portfolio: 'https://portfolio-athanase.netlify.app/',
    fanorona: 'https://fanorona.netlify.app/',
    quizapp: '#'
}
let linkWeb = document.querySelector('#projects p a:last-child');
linkWeb.setAttribute('href', webLinksProjects[`${id}`]);
titles.forEach(h2 => {
    h2.addEventListener('click', function() {
        if(!this.classList.contains('active')) {
            // remove class active on active content
            activeElement = document.querySelector('#projects h2.active');
            activeElement.classList.remove('active');
            
            // add class active on the new content
            this.classList.add('active');
            
            //change content of container
            id = this.textContent;
            content = document.querySelector(`#projects span#${id}`).textContent;
            contentProject.textContent = content;
            
            // change image
            img = document.querySelector('#projects .img .active');
            img.classList.remove('active');
            newImg = document.querySelector(`.${id}`);
            newImg.classList.add('active');

            // change links
            gitHub.setAttribute('href', gitLinksProjects[`${id}`]);
            linkWeb.setAttribute('href', webLinksProjects[`${id}`]);

        }
   }) 
});

// observer
const elements = document.querySelectorAll('section, body > div');
const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);
            if(entry.isIntersecting) observer.unobserve(entry.target);
        })

    }, {
        threshold: .3
    }
);

elements.forEach(
    element => {
        observer.observe(element);
    }
)

// Header animation on scroll
let goUp = document.querySelector('.goUp');
addEventListener('scroll', function () {
    elements.forEach(
        element => {
            let t = element.getBoundingClientRect().top
            let h = element.getBoundingClientRect().height;
            id = element.getAttribute('id');
            
            if(t<=0 && t>=-h/4) {
                if(id!='home') goUp.classList.add('showElem');
                else goUp.classList.remove('showElem');
            }
            if(t<=0 && t>=-h && id!=null) {
                let newActive = this.document.querySelector(`header ul li a[href="#${id}"]`);
                if(newActive!=null) {
                    let lastActive = this.document.querySelector('header ul li.active');
                    lastActive.classList.remove('active');
                    newActive = newActive.parentElement;
                    newActive.classList.add('active');
                }
            }
        }
    )
})

// menu animation
const menu = document.querySelector('#menu');
const header = document.querySelector('header');
menu.addEventListener('click', function(e) {
    this.classList.toggle('showmenu');
    header.classList.toggle('showmenu');
})