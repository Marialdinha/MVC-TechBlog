async function newCommentHandler(event) {
    event.preventDefault();
    const commentIn = document.querySelector('#note').value;
    let leanComment =  commentIn.trim();
    blogId= 1  // --> need to get correct blog
    
    let response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        comment_contents: leanComment,
        blog_id: blogId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
   
    if (response.ok) {
      window.location.replace('/blogWiew');
    } else {
      alert('Failed to add comment');
    }
  }


const formElement = document.querySelector('#comment-container');
if (formElement) {
document.querySelector('#enter-comment').addEventListener('submit', newCommentHandler);
} 