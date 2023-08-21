async function newBlogHandler(event) {
  event.preventDefault();
  const tileIn = document.querySelector('#destination').value;
  const contentIn = document.querySelector('#note').value;
  let leancontent =  contentIn.trim();
  
  // Send post request to add a new tavel information
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

const formElement = document.querySelector('.new-post-form');
if (formElement) {
document.querySelector('.new-post-form').addEventListener('submit', newBlogHandler);
} 

