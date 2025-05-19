document.addEventListener("DOMContentLoaded", function () {
   // Utility function to load JSON with better error handling
   async function loadJSON(path) {
      const response = await fetch(path);
      if (!response.ok) {
         throw new Error(`Failed to load ${path}: ${response.status} ${response.statusText}`);
      }
      return await response.json();
   }

   // Load skill bars
   loadJSON("static/json/data_top_skills.json")
      .then(data => {
         const container = document.getElementById("skills-container");
         data.forEach(item => {
            container.innerHTML += `
                   <div class="mb-4">
                       <label class="form-label">${item.skill}</label>
                       <div class="progress">
                           <div class="progress-bar my-custom-color" 
                                style="width: ${item.percentage}%">
                               ${item.percentage}%
                           </div>
                       </div>
                   </div>
               `;
         });
      })



   // Load sunburst chart
   loadJSON("static/json/data_skills.json")
      .then(json => {
         // Properly use all destructured variables
         const sunburstData = [{
            type: "sunburst",
            ids: json.data.map(item => item.ids),
            labels: json.data.map(item => item.labels),
            parents: json.data.map(item => item.parents),
            maxdepth: 4,
            textposition: "inside",
            insidetextorientation: "radial",
            textfont: { size: 25, color: "black" },
            root: { color: "rgb(240, 226, 226)" },
            branchvalues: "total",
            marker: { line: { width: 2 } },
         }];

         const layout = {
            margin: { l: 0, r: 0, b: 0, t: 0 },
            sunburstcolorway: [
               "rgb(236, 113, 113)", "rgb(245, 205, 72)",
               "rgb(98, 224, 73)", "rgb(235, 117, 39)",
               "rgb(38, 218, 113)", "rgb(101, 236, 225)",
               "rgb(91, 117, 187)", "rgb(190, 109, 236)",
               "rgb(243, 109, 232)", "rgb(73, 54, 179)"
            ],
            extendsunburstcolorway: true,
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: "rgba(0,0,0,0)",
         };

         const config = {
            responsive: true,
            displaylogo: false,        // This removes the Plotly logo
            modeBarButtonsToRemove: ['toImage'],  // This removes the "Download as PNG" button
            displayModeBar: false      // This completely hides the mode bar (including all buttons)
         };

         Plotly.newPlot("sunburst-chart", sunburstData, layout, { responsive: true });
      })

});
