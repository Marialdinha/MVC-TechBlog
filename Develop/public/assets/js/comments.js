async function newCommentHandler(event) {
    event.preventDefault();
   
    // if (response.ok) {
    //   window.location.replace('/blogWiew');
    // } else {
    //   alert('Failed to add comment');
    // }
  }


const formElement = document.querySelector('#Blog-comment');
if (formElement) {
document.querySelector('#Blog-comment').addEventListener('submit', newCommentHandler);
} 