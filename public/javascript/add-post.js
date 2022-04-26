async function newPostFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim()
    const post_content = document.querySelector('textarea[name="content"]').value.trim()

    if (post_content && title) {
        const response = await fetch(`/api/posts`, {
            method: 'post',
            body: JSON.stringify({
                title,
                post_content
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newPostFormHandler)