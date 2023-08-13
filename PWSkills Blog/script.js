const addBlogIcon = document.querySelector('#addBlogIcon')
const blogCards = document.querySelector('.blogCards')
const card = document.querySelector('.card')
const addBlogModel = document.querySelector('.addBlogModel')
const closeModelIcon = document.querySelector('#closeModelIcon')
const addBlogBtn = document.querySelector('#addBlogBtn')
const blogForm = document.querySelector('#blogForm')

addBlogIcon.addEventListener('click', ()=>{
    addBlogModel.style.display = 'block'
})

closeModelIcon.addEventListener('click', hideAddBlogModel)

function hideAddBlogModel(){
    addBlogModel.style.display = 'none'
}

// adding blog on the home page 

blogForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const blogTitle = document.querySelector('#blogTitle')
    // const blogUrl = document.querySelector('#blogUrl')
    const blogImageUrl = document.querySelector('#blogImageUrl')
    const blogDesc = document.querySelector('#blogDesc')

    const blogForm = document.createElement('form')  
    blogForm.classList.add('card')

    const img = document.createElement('img') 
    img.classList.add('cardImage')
    img.src = blogImageUrl.value 

    const h2 = document.createElement('h2')  
    h2.classList.add('blogTitle')
    h2.textContent = blogTitle.value

    const p = document.createElement('p')  
    p.classList.add('blogDesc')
    p.textContent = blogDesc.value

    const button = document.createElement('button')
    button.classList.add('blogReadBtn')
    button.textContent = "Read"

    blogForm.append(img)
    blogForm.append(h2)
    blogForm.append(p)
    blogForm.append(button)
    blogCards.append(blogForm)

    hideAddBlogModel()
})


