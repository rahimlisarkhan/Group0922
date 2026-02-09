
// Default image for blogs without an image
const defaultImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400";

// DOM Elements
const blogContainer = document.getElementById('blogContainer');
const emptyState = document.getElementById('emptyState');
const blogForm = document.getElementById('blogForm');

const createBlogBtn = document.getElementById('createBlogBtn');
const saveBtn = document.getElementById('saveBtn');

const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

const modalContentDetail = document.getElementById('blogModal')
const blogModal = new bootstrap.Modal(modalContentDetail);

const modalContentDelete = document.getElementById('deleteModal')
const deleteModal = new bootstrap.Modal(modalContentDelete);

const blogModalLabel = document.getElementById('blogModalLabel');


// Form fields
const titleEl = document.getElementById('blogTitle');
const bodyEl = document.getElementById('blogBody');
const imageEl = document.getElementById('blogImage');


let currentBlogId = null;
let isEdit = false;

// Render all blog cards
async function renderBlogs() {

     blogContainer.innerHTML = 'Loading blogs...';

    try{
        

        const url = "https://blog-api-t6u0.onrender.com/posts"

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const response = await fetch(url, options)

        const data = await response.json()


        const content = data.reverse().map(blog => {
            return `
             <div class="col-md-6 col-lg-4">
                <div class="card blog-card h-100 shadow-sm">
                    <img src="${blog?.url || defaultImage}" 
                        class="card-img-top blog-img">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title blog-title">${blog.title}</h5>
                        <p class="card-text blog-body flex-grow-1">${blog.body}</p>
                        <div class="d-flex gap-2 mt-3">
                            <button class="btn btn-outline-primary btn-sm flex-grow-1" onclick="openEditModal(${blog.id})">
                                ✏️ Edit
                            </button>
                            <button class="btn btn-outline-danger btn-sm flex-grow-1" onclick="openDeleteModal(${blog.id})">
                                🗑️ Remove
                            </button>
                        </div>
                    </div>
                </div>
          </div>
            `
        }).join("")

        blogContainer.innerHTML = content;
        

    }catch(error){
        blogContainer.innerHTML = 'Failed to load blogs. Please try again later.';
    }
}


// Open modal for creating a new blog
function openCreateModal() {
    blogModalLabel.textContent = 'Create New Blog';
    blogModal.show()
    isEdit = false;
}

// Open modal for editing an existing blog
async function openEditModal(id) {

        try{
            isEdit = true;
            currentBlogId = id;
            blogModalLabel.textContent = 'Edit Blog';


            blogModal.show();

            const url = `https://blog-api-t6u0.onrender.com/posts/${id}`

            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const response = await fetch(url, options)

            const data = await response.json()

            console.log("data",data);

            titleEl.value = data.title;
            bodyEl.value = data.body;
            imageEl.value = data.url || '';

        }catch(error){
            alert('Failed to load blog details. Please try again later.');
        }

}

// Save blog (create or update)
async function saveBlog() {

    try{
    
        const title = titleEl.value.trim();
        const body = bodyEl.value.trim();
        const url = imageEl.value.trim();
    
    // Validation
    if (!title || !body) { // edge case: title or body is empty
        alert('Please fill in both title and body!');
        return;
    }
        // Create new blog
        const payload = {
            title,
            body,
            url
        };

        console.log("payload",payload);


        if(isEdit){
            const url = `https://blog-api-t6u0.onrender.com/posts/${currentBlogId}`

            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }

            await fetch(url, options)

        }else{ // Create new blog

            const url = `https://blog-api-t6u0.onrender.com/posts`

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }

            await fetch(url, options)

        }

       titleEl.value = '';
       bodyEl.value = '';
       imageEl.value = '';

        blogModal.hide();
        renderBlogs();

       }catch(error){
        alert('Failed to save blog. Please try again later.');
    }
}

// Open delete confirmation modal
function openDeleteModal(id) {

    currentBlogId = id;
    deleteModal.show();
    
}

// Delete a blog
async function deleteBlog() {
    try {

        const url = `https://blog-api-t6u0.onrender.com/posts/${currentBlogId}`

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        await fetch(url, options)

        renderBlogs();
        deleteModal.hide();

    }catch(error){
        alert('Failed to delete blog. Please try again later.');
        // window.location.href = '/404.html';
    }
}

// Event listener for delete confirmation
confirmDeleteBtn.addEventListener('click', deleteBlog);
createBlogBtn.addEventListener('click', openCreateModal);
saveBtn.addEventListener('click', saveBlog);

renderBlogs()



// async function getDatas(){

// try{
//     const posts = fetch('https://jsonplaceholder.typicode.com/posts')
//     const users = fetch('https://jsonplaceholder.typicode.com/users')
//     const albums = fetch('https://jsonplaceholder.typicode.com/albums')

//     const [postResult, userResult, albumResult] = await Promise.allSettled([
//         posts, users, albums])
    
//     const [postData, userData, albumData] = await Promise.allSettled([
//         postResult.value.json(),
//         userResult.value.json(),
//         albumResult.value.json()
//     ])

//     console.log("postData",postData);
//     console.log("userData",userData);
//     console.log("albumData",albumData);
    

//     }catch(error){


//     }

// }

// getDatas()

