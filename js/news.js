// Contentful Configuration
const spaceId = "ntd5rlaw3714"; // Replace with your Space ID
const accessToken = "zasj-MMuxDKU8-zAK5SMkgq5D3JMaLGO3JKWwolUksI"; // Replace with your API token
const contentType = "newsPost"; // Replace with your Content Type ID

// Contentful API Endpoint
const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${contentType}`;
const assetUrl = (assetId) =>
  `https://cdn.contentful.com/spaces/${spaceId}/assets/${assetId}?access_token=${accessToken}`;

// Fetch and Render Content
async function fetchContent() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    const assets = await fetchAssets(data.includes?.Asset || []);
    renderContent(data.items, assets);
  } catch (error) {
    console.error("Error fetching content:", error);
    document.getElementById("news-list").innerHTML =
      "<p>Error loading content.</p>";
  }
}

// Fetch Asset URLs
async function fetchAssets(assets) {
  const assetMap = {};
  for (const asset of assets) {
    assetMap[asset.sys.id] = asset.fields.file.url;
  }
  return assetMap;
}

// Render Content Items (without title)
function renderContent(items, assets) {
  const contentContainer = document.getElementById("news-list");
  contentContainer.innerHTML = items
    .map((item) => {
      const fields = item.fields;
      const imageUrl = assets[fields.newsImage.sys.id];
      const description = fields.description || "No description available.";

      return `
        <div class="news-post">
          <img src="${imageUrl}" alt="News Image" />
          <div class="news-post-content">
            <div class="news-description">${description}</div>
          </div>
        </div>
      `;
    })
    .join("");
}

// Load Content on Page Load
window.addEventListener("DOMContentLoaded", fetchContent);
