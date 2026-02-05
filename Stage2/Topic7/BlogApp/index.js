
// Default image for blogs without an image
const defaultImage = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400";

// DOM Elements
const blogContainer = document.getElementById('blogContainer');
const emptyState = document.getElementById('emptyState');
const blogForm = document.getElementById('blogForm');
const blogModal = new bootstrap.Modal(document.getElementById('blogModal'));
const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));


let currentBlogId = null;

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
                    <img src="${defaultImage}" 
                        class="card-img-top blog-img" 
                        alt="${blog.title}"
                        onerror="this.src='${defaultImage}'">
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
    document.getElementById('blogModalLabel').textContent = 'Create New Blog';
    document.getElementById('blogId').value = '';
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogBody').value = '';
    document.getElementById('blogImage').value = '';
}

// Open modal for editing an existing blog
function openEditModal(id) {
    const blog = blogs.find(b => b.id === id);
    if (!blog) return;
    
    document.getElementById('blogModalLabel').textContent = 'Edit Blog';
    document.getElementById('blogId').value = blog.id;
    document.getElementById('blogTitle').value = blog.title;
    document.getElementById('blogBody').value = blog.body;
    document.getElementById('blogImage').value = blog.image || '';
    
    blogModal.show();
}

// Save blog (create or update)
function saveBlog() {
    const id = document.getElementById('blogId').value;
    const title = document.getElementById('blogTitle').value.trim();
    const body = document.getElementById('blogBody').value.trim();
    const image = document.getElementById('blogImage').value.trim();
    
    // Validation
    if (!title || !body) {
        alert('Please fill in both title and body!');
        return;
    }
    
    if (id) {
        // Update existing blog
        const blogIndex = blogs.findIndex(b => b.id === parseInt(id));
        if (blogIndex !== -1) {
            blogs[blogIndex] = {
                ...blogs[blogIndex],
                title,
                body,
                image: image || defaultImage
            };
        }
    } else {
        // Create new blog
        const newBlog = {
            id: Date.now(), // Use timestamp as unique ID
            title,
            body,
            image: image || defaultImage
        };
        blogs.unshift(newBlog); // Add to beginning of array
    }
    
    blogModal.hide();
    renderBlogs();
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

        deleteModal.hide();
        renderBlogs();

    }catch(error){
        alert('Failed to delete blog. Please try again later.');
    }
}

// Event listener for delete confirmation
document.getElementById('confirmDeleteBtn').addEventListener('click', deleteBlog);

renderBlogs()





