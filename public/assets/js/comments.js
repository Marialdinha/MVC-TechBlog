async function newNoteHandler(event) {
    event.preventDefault();
    const noteIn = document.querySelector('#note1').value;
    let leanNote =  noteIn.trim();
    let blogId=event.target.dataset.blog_id

    let response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
      comment_contents: leanNote,
      blog_id: blogId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
   
    if (response.ok) {
      window.location.replace('/');
    } else {
      alert('Failed to add Note');
    }
  }

 
  // document.getElementById('btn-primary').addEventListener('click', newNoteHandler);
  // const formElement2 = document.querySelector('#enter-note');
  // if (formElement1) {
  // document.querySelector('.new-post-form').addEventListener('submit', newBlogHandler);
  // } 

