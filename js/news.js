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

// Render Content Items
function renderContent(items, assets) {
  const contentContainer = document.getElementById("news-list");
  contentContainer.innerHTML = items
    .map((item) => {
      const fields = item.fields;
      const imageUrl = assets[fields.newsImage?.sys.id]; // Check if newsImage exists
      const fullDescription = fields.newsd1 || "No description available."; // Full description
      const truncatedDescription = fullDescription.length > 150 ? fullDescription.slice(0, 150) + "..." : fullDescription;

      return `
        <div class="news-post">
          <img src="${imageUrl}" alt="News Image" />
          <div class="news-post-content">
            <div id="description-${item.sys.id}" class="news-description">${truncatedDescription}</div>
            <div id="full-description-${item.sys.id}" class="full-description" style="display: none;">
              <p>${fullDescription}</p>
              <a href="#" class="toggle-btn" onclick="toggleDescription(event, '${item.sys.id}', this)">Close</a>
            </div>
            <a href="#" class="toggle-btn" id="read-more-${item.sys.id}" onclick="toggleDescription(event, '${item.sys.id}', this)">Read More</a>
          </div>
        </div>
      `;
    })
    .join("");
}

// Toggle full description and change button text
function toggleDescription(event, id, button) {
  event.preventDefault();
  const descriptionElement = document.getElementById(`description-${id}`);
  const fullDescriptionElement = document.getElementById(`full-description-${id}`);
  const readMoreButton = document.getElementById(`read-more-${id}`);

  // Check if the full description is currently visible
  if (fullDescriptionElement.style.display === "none") {
    // Show full description and hide Read More button
    descriptionElement.style.display = "none";
    fullDescriptionElement.style.display = "block";
    readMoreButton.style.display = "none";
  } else {
    // Hide full description and show Read More button again
    descriptionElement.style.display = "block";
    fullDescriptionElement.style.display = "none";
    readMoreButton.style.display = "inline-block"; // Show "Read More" button again
  }
}

// Load Content on Page Load
window.addEventListener("DOMContentLoaded", fetchContent);
