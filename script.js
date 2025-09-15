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
        icon.addEventListener('click', (e) => {
            // Prevent clicking the download button from opening modal
            if (e.target.classList.contains('download-corner')) return;

            modal.style.display = 'flex';

            const title = icon.dataset.title;
            const description = icon.dataset.description || "No details available yet.";

            modalContent.innerHTML = `
                <h2>${title}</h2>
                <p>${description}</p>
            `;
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

