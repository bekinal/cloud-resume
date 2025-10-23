async function updateCounter() {
    try {
        const response = await fetch("https://aql7k3hcy3sb2aatwyrhtenpse0lnctk.lambda-url.us-east-1.on.aws/");
        const data = await response.json();

        // If Lambda returns { body: "..." }, parse it; otherwise use data directly
        const body = typeof data.body === "string" ? JSON.parse(data.body) : data;

        const counter = document.getElementById('counter');
        counter.textContent = `This page has ${body.new_views} views!`;
    } catch (err) {
        console.error("Failed to update counter:", err);
        const counter = document.getElementById('counter');
        counter.textContent = "Unable to load view count.";
    }
}

updateCounter();

