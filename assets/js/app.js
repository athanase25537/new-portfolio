document.querySelector('body').classList.add('notload');

let div = document.createElement('div');
div.classList.add('animation');

div.innerHTML = '<svg width="230" height="201" viewBox="0 0 230 201" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M97.1372 185.834C97.1372 185.834 90.4536 105.977 97.1372 63.8303C103.821 21.6838 126.736 15.7684 151.56 15.029C176.384 14.2896 201.209 27.5991 210.757 63.8303C220.304 100.062 210.757 185.834 210.757 185.834" stroke="white" stroke-width="29" stroke-linecap="round"/><path d="M17.9705 185.834C17.9705 185.834 11.2869 105.977 17.9705 63.8303C24.6541 21.6838 47.569 15.7684 72.3933 15.029C97.2176 14.2896 122.042 27.5991 131.59 63.8303C141.137 100.062 131.59 185.834 131.59 185.834" stroke="white" stroke-width="29" stroke-linecap="round"/></svg>';

document.querySelector('body').appendChild(div);

// preload animation
let interval = 411;
let svg = document.querySelector('.animation svg');
// svg.style.strokeDashoffset = interval;
svg.style.strokeDasharray = interval;

setInterval(() => {
    svg.style.strokeDashoffset = interval;
    interval--;

    if(interval<0) interval = 411;
}, 5)

// on load animation
addEventListener('load', () => {
    setTimeout(() => {
        let div = document.querySelector('.animation')
        div.classList.add('hide');
        div.addEventListener('transitionend', () => {
            document.body.removeChild(div);
        })
        document.body.classList.remove('notload');
    }, 3000);
});

let strongA = document.querySelector('#home p strong');
const cursorA = document.querySelector('#home p strong');
setInterval(() => {
    cursorA.classList.toggle('showa');
},250)
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
    a = setInterval(function () {
        container.appendChild(spansA[i]);
        i++;
        if(spansA[i]==undefined) {
            clearInterval(a);
            if(text == 'ANDRIAMASY Athanase') text = 'Developer Fullstack';
            else text = 'ANDRIAMASY Athanase';
            container = document.querySelector('#home p strong');
            setTimeout(() => {
                typingAnimation(container, text);
            }, 3000);
        }
    }, 150)

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

