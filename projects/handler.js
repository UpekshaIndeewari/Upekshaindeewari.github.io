fetch("data_projects.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    const container = document.getElementById("card-container");
    const categoryContainer = document.getElementById("category-buttons");

    // Extract unique categories
    const categories = ["All", ...new Set(data.map((item) => item.category))];

    // Generate category buttons
    categories.forEach((category) => {
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-outline-primary", "me-2", "mb-2");
      btn.textContent = category;
      btn.setAttribute("data-category", category);
      btn.onclick = () => filterCards(category);
      categoryContainer.appendChild(btn);
    });

    // Function to render projects
    function renderProjects(filteredData) {
      container.innerHTML = ""; // Clear previous cards
      filteredData.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col", "project-card");
        cardDiv.setAttribute("data-category", item.category);

        const imageUrl = item.imageurl ? item.imageurl : "default-image.jpg";
        const skillsBadges = item.skills
          .map(
            (skill) => `<span class="badge text-bg-dark me-1">${skill}</span>`
          )
          .join(" ");

        cardDiv.innerHTML = `
          <a href="${item.link}" target="_blank" class="text-decoration-none text-dark">
            <div class="card h-100">
              <img src="${imageUrl}" class="card-img-top" alt="${item.title}">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text mb-1 mt-3">Skills</p>
                ${skillsBadges}
              </div>
            </div>
          </a>
        `;

        container.appendChild(cardDiv);
      });
    }

    // Function to filter cards based on category
    function filterCards(category) {
      if (category === "All") {
        renderProjects(data);
      } else {
        const filteredData = data.filter((item) => item.category === category);
        renderProjects(filteredData);
      }
    }

    // Load all projects initially
    renderProjects(data);
  })
  .catch((error) => console.error("Error fetching data:", error));

//"https://api.allorigins.win/raw?url=https://raw.githubusercontent.com/UpekshaIndeewari/Skills-Projects/main/projects/data_projects.json"
