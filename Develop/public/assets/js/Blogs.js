async function newBlogHandler(event) {
  event.preventDefault();
  const tileIn = document.querySelector('#destination').value;
  const contentIn = document.querySelector('#blog').value;
  let leancontent =  contentIn.trim();
  
  // Send post request to add a new Blog information
  let response = await fetch(`/api/Blogs`, {
    method: 'POST',
    body: JSON.stringify({
      title: tileIn,
      content: leancontent,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if blog is added, the 'all' template will be rerendered
  if (response.ok) {
    window.location.replace('/');
  } else {
    alert('Failed to add blog');
  }
}

async function newCommentHandler(event) {
  event.preventDefault();
  let blog_id=event.target.dataset.blog_id
  window.location.replace(`/comment/${blog_id}`);
 
}

const formElement1 = document.querySelector('.new-post-form');
if (formElement1) {
document.querySelector('.new-post-form').addEventListener('submit', newBlogHandler);
} 

