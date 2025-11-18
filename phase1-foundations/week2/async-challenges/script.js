import { orderCoffee } from './modules/coffee.js';
import { fetchUser } from './modules/user.js';
import { loadPostsSequentially, loadPostsParallel } from './modules/posts.js';

export async function runAllChallenges() {
    console.clear();
    console.log('%c=== ASYNC CHALLENGES STARTED ===', 'color: #3498db; font-size: 16px; font-weight: bold');

    await orderCoffee("Express");

    await fetchUser(1);
    await fetchUser(999).catch(() => {});

    await loadPostsSequentially();
    await loadPostsParallel();

    console.log('%c=== ALL CHALLENGES COMPLETED! ===', 'color: #27ae60; font-size: 16px; font-weight: bold');
}

window.runAllChallenges = runAllChallenges;

runAllChallenges();

document.getElementById('run-btn').addEventListener('click', runAllChallenges);