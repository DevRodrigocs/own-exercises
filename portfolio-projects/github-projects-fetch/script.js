const usernameInput = document.getElementById('username');
const loadBtn = document.getElementById('load');
const loading = document.getElementById('loading');
const errorEl = document.getElementById('error');
const projectsGrid = document.getElementById('projects');

async function loadProjects() {
    const username = usernameInput.value.trim();
    if (!username) return showError('Enter a GitHub username');

    clearAll();
    showLoading();

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
        
        if (!response.ok) {
            if (response.status === 404) throw new Error('User not found');
            if (response.status === 403) throw new Error('Rate limit exceeded - wait 1 minute');
            throw new Error(`Error ${response.status}`);
        }

        const repos = await response.json();

        if (repos.length === 0) {
            showError('This user has no public repositories');
            return;
        }

        displayProjects(repos);
    } catch (err) {
        showError(err.message);
    }
}

function displayProjects(repos) {
    loading.style.display = 'none';
    projectsGrid.innerHTML = '';

    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description'}</p>
            <div class="stats">
                <span>Language: ${repo.language || '???'}</span>
                <span>Stars: ${repo.stargazers_count}</span>
                <span>Forks: ${repo.forks_count}</span>
            </div>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        projectsGrid.appendChild(card);
    });
}

function showError(msg) {
    loading.style.display = 'none';
    errorEl.textContent = msg;
}

function showLoading() {
    errorEl.textContent = '';
    loading.style.display = 'block';
}

function clearAll() {
    errorEl.textContent = '';
    loading.style.display = 'block';
    projectsGrid.innerHTML = '';
}

loadBtn.addEventListener('click', loadProjects);
usernameInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') loadProjects();
});

loadProjects();
