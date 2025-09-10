document.addEventListener('DOMContentLoaded', () => {
    // Blog Collapse
    document.querySelectorAll('.blog-post').forEach(post => {
        post.addEventListener('click', () => {
            const content = post.querySelector('.blog-post-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Project Modal
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.modal-content');

    document.querySelectorAll('.project-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalContent.innerHTML = `<h2>${icon.dataset.title}</h2><p>Project content goes here. You can include images, graphs, or LaTeX here.</p>`;
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});
