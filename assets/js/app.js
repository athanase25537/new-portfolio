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

        }
   }) 
});

// observer
const elements = document.querySelectorAll('section, body > div');
console.log(elements);
const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting);
        })
    }, {
        threshold: .5
    }
);

elements.forEach(
    element => {
        observer.observe(element);
    }
)
