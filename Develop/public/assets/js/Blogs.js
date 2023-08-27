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

async function newCommentHandler(event) {
  event.preventDefault();
  console.log("Iside click buttom for note")

  window.location.replace('/comment');

}

const formElement1 = document.querySelector('.new-post-form');
if (formElement1) {
document.querySelector('.new-post-form').addEventListener('submit', newBlogHandler);
} 

// const formElement2 = document.querySelector('#Blog-comment');
// if (formElement2) {
// document.querySelector('#add-comment').addEventListener('click', newCommentHandler);
// } 
