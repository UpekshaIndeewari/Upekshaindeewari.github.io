// Fetch JSON file from the project directory
fetch("https://api.allorigins.win/raw?url=https://raw.githubusercontent.com/UpekshaIndeewari/Skills-Projects/main/skills_diagram/data_skills.json") // Replace with the correct path to your JSON file
  .then((response) => response.json())
  .then((json) => {
    // Extract data from JSON
    const ids = json.data.map((item) => item.ids);
    const labels = json.data.map((item) => item.labels);
    const parents = json.data.map((item) => item.parents);

    // Create Sunburst chart data
    const data = [
      {
        type: "sunburst",
        ids: ids,
        labels: labels,
        parents: parents,
        maxdepth: 4,
        textposition: "inside",
        insidetextorientation: "radial",
        textfont: {
          size: 15, // Font size for other labels
          color: "black", // Font color for other labels
        },
        root: {
          color: "#e763fa", // Background color for the root node
        },
      },
    ];

    // Chart layout configuration
    const layout = {
      margin: { l: 0, r: 0, b: 0, t: 0 },
      sunburstcolorway: [
        "#636efa",
        "#EF553B",
        "#00cc96",
        "#ab63fa",
        "#19d3f3",
        "#e763fa",
        "#FECB52",
        "#FFA15A",
        "#FF6692",
        "#B6E880",
      ],
      extendsunburstcolorway: true,
    };

    // Render Sunburst chart
    Plotly.newPlot("tester", data, layout, { showSendToCloud: true });
  })
  .catch((error) => console.error("Error loading JSON data:", error));


  // Fetch data from the local data_top_skills.json file
fetch("https://api.allorigins.win/raw?url=https://raw.githubusercontent.com/UpekshaIndeewari/Skills-Projects/main/skills_diagram/data_top_skills.json")
.then(response => response.json())
.then(data => {
  // Get the container where the skills will be displayed
  const skillsContainer = document.getElementById('skills-container');

  // Loop through the skills data
  data.forEach(item => {
    // Create a div for each skill with a progress bar
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('mb-3');

      // Corrected progress bar code with stripes
      skillDiv.innerHTML = `
        <label for="${item.skill}" class="form-label">${item.skill}</label>
        <div class="progress">
          <div class="progress-bar progress-bar-striped text-bg-info" role="progressbar" aria-label="Info striped example" aria-valuenow="${item.percentage}" aria-valuemin="0" aria-valuemax="100" style="width: ${item.percentage}%">
            ${item.percentage}%
          </div>
        </div>
      `;

    // Append the skill div to the skills container
    skillsContainer.appendChild(skillDiv);
  });
})
.catch(error => console.error('Error fetching skills data:', error));
