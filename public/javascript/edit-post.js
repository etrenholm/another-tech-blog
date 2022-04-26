async function editFormHandler(event) {
    console.log('edit function clicked')
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('textarea[name="content"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
 
      if (post_content && title) {
          const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            title,
            post_content
          }),
          headers: { 'Content-Type': 'application/json' }
        });
      
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert(response.statusText);
        }
    }
}
document.querySelector('.save-post-btn').addEventListener('click', editFormHandler);