export async function fetchUser(id) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);

  console.log(`\n2. Fetching user ID: ${id} (3s timeout)...`);

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { signal: controller.signal }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - User not found`);
    }

    const user = await response.json();
    console.log(`User found: ${user.name} (${user.email})`);
    return { name: user.name, email: user.email };

  } catch (error) {
    if (error.name === 'AbortError') {
      console.log("Timeout! Request took longer than 3 seconds");
    } else {
      console.log(`Error: ${error.message}`);
    }
    throw error;
  }
}