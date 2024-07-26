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