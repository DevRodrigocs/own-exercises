async function fetchPost(id) {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await res.json();
}

export async function loadPostsSequentially() {
    console.log("\n3A. Loading posts SEQUENTIALLY...");
    const ids = [1, 2, 3];

    for(const id of ids) {
        try {
            const post = await fetchPost(id);
            console.log(`Post ${id} loaded: ${post.title.substring(0, 50)}...`);
            await new Promise(r => setTimeout(r, 1000));
        } catch (err) {
            console.log(`Failed to load post ${id}`);
        }
    }
    console.log("All posts loaded sequentially!");
}

export async function loadPostsParallel() {
    console.log("\n3B. Loading posts in PARALLEL...");
    const ids = [1, 2, 3];

    try {
        const posts = await Promise.all(ids.map(id => fetchPost(id)));
        posts.forEach((post, i) => {
            console.log(`Post ${i + 1}: ${post.title.substring(0, 50)}...`);
        });
        console.log("All posts loaded in parallel!");
    } catch (err) {
        console.log("Some posts failes to load");
    }
}