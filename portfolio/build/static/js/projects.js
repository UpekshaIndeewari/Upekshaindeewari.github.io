document.addEventListener("DOMContentLoaded", function () {
   // Sample project data with tools
   try {
      const allProjects = [
         {
            id: 1,
            title:
               "Application of Google Earth Engine (GEE) for Landuse Classification and Monitoring Change Detection",
            description:
               "Use of Sentinel-2 imagery for land use classification with the use of google earth engine, remote sensing techniques and machine learning algorithms",
            image: "static/images/projects/p1.png",
            link: "https://github.com/UpekshaIndeewari/Application-of-Google-Earth-Engine-for-Landuse-Classification",
            category: ["remote-sensing", "spatial-data-science"],
            tools: ["Google Earth Engine", "JavaScript", "Machine Learning"],
         },
         {
            id: 2,
            title:
               "Machine Learning Approaches for Land Use Land Cover Classification",
            description:
               "Application of machine learning algorithms in identifying and mapping different land cover types using satellite imagery and compares the performance of algorithms",
            image: "static/images/projects/p2.jpg",
            link: "https://github.com/UpekshaIndeewari/Machine-Learning-Approaches-for-Land-Use-Land-Cover-Classification",
            category: ["spatial-data-science", "data-science"],
            tools: ["Python", "Machine Learning"],
         },
         {
            id: 3,
            title: "Master Thesis-EO4GEO BOK Annotation for GI Resources ",
            description:
               "Developed NLP based tools for annotation of resources with body of knowladge in earth observation and geo informatics",
            image: "static/images/projects/p.png",
            link: "https://storymaps.arcgis.com/stories/f83af649b1234a129d70c8a41275c583",
            category: ["data-science"],
            tools: ["Python", "NLP", "Machine Learning"],
         },
         {
            id: 4,
            title:
               "Remote Sensing and GIS Techniques for Monitoring Urban Growth and Land Use Conflicts in Cologne, Germany",
            description:
               "Identification of land use and land cover changes using remote sensing and GIS techniques.",
            image: "static/images/projects/p4.png",
            link: "https://storymaps.arcgis.com/stories/3887209c12694a0fb7653337042998f3",
            category: ["remote-sensing", "gis", "spatial-data-science"],
            tools: ["ArcGIS Pro", "Erdas Imagine"],
         },
         {
            id: 5,
            title:
               "R Package Development for Weather Data Analysis Using OpenWeatherMap API",
            description:
               "Development an R package designed for visualizing weather data, sourced from the OpenWeatherMap API",
            image: "static/images/projects/p5.jpg",
            link: "https://github.com/UpekshaIndeewari/R-Package-Development-for-Comprehensive-Weather-Data-Analysis-Using-OpenWeatherMap-API",
            category: ["data-science", "spatial-data-science"],
            tools: ["R", "OpenWeatherMap API", "API", "ggplot2", "leaflet"],
         },
         {
            id: 6,
            title:
               "Spatial and Temporal Variations of Climate on Drought Hazard in Sri Lanka",
            description:
               "Analyze the trend and spatial distribution of annual air temperature patterns in Hambantota District, Sri Lanka over the last 40 years using GIS techniques",
            image: "static/images/projects/p6.jpg",
            link: "https://storymaps.arcgis.com/stories/13c72d91a21849c4861fd5d9523ea9b4",
            category: ["gis", "data-science", "spatial-data-science"],
            tools: ["ArcGIS Pro", "Data Science"],
         },
         {
            id: 7,
            title:
               "Analysis of Land Use Dynamics in Hambantota, Sri Lanka Using GIS and Remote Sensing Approach",
            description:
               "Multi-temporal analysis of land use changes using satellite imagery",
            image: "static/images/projects/p7.jpg",
            link: "https://uji.maps.arcgis.com/apps/dashboards/98aa536123f24f49b1e8a53ee3135382",
            category: ["remote-sensing", "gis", "spatial-data-science"], // Now an array
            tools: [
               "ArcGIS Pro",
               "ArcGIS Online",
               "Remote Sensing",
               "ArcGIS Dashboards",
            ],
         },
         {
            id: 8,
            title:
               "Data Driven Insights on Natural Gas in the EEA area Using ETL Data Visualization",
            description:
               "An end-to-end ETL pipeline and data visualizations for analyzing natural gas trends in the EEA from 1991 to 2020",
            image: "static/images/projects/p8.jpg",
            link: "https://github.com/UpekshaIndeewari/Data-Driven-Insights-on-Natural-Gas-in-the-EEA-area-1991-2020-Using-ETL-Data-Visualization",
            category: ["data-science", "spatial-data-science"], // Now an array
            tools: [
               "Python",
               "Pandas",
               "GeoPandas",
               "FME",
               "ETL",
               "Matplotlib",
               "Seaborn",
               "Leaflet",
            ],
         },
         {
            id: 9,
            title:
               "Comparison of Machine Learning Algorithms for Water Quality Prediction",
            description:
               "Identify the most accurate and reliable machine learning algorithm for predicting water quality by comparing various ML models",
            image: "static/images/projects/p9.png",
            link: "https://github.com/UpekshaIndeewari/Comparison-of-Machine-Learning-Algorithms-for-Water-Quality-Prediction",
            category: ["data-science"],
            tools: ["Python", "Orange", "Exploratory Data Analysis"],
         },
         {
            id: 10,
            title:
               "Assessment of Surrounding Locations with respect to the Blasting locations of Proposed Highway Construction Project Using PostGIS",
            description:
               "A project based on the data base management system to assess the surrounding location with respect to the blasting locations of proposed highway construction project using PostGIS, PostgreSQL and ArcGIS Pro",
            image: "static/images/projects/p10.png",
            link: "https://storymaps.arcgis.com/stories/296d3dc378fb4131b3830041748e2a87",
            category: ["data-science", "spatial-data-science"], // Now an array
            tools: ["PostGIS", "PostgreSQL", "SQL", "ArcGIS Pro"],
         },
         {
            id: 11,
            title:
               "Interactive Visualization Using Tableau For Internet Speed Across EU Regions",
            description:
               "Creating an interactive visualization of internet speed variations across different regions in the european union using Tableau.",
            image: "static/images/projects/p11.png",
            link: "https://storymaps.arcgis.com/stories/0ccc6c1c90e544ff9d57179d9aa2a4f6",
            category: ["data-science", "spatial-data-science"],
            tools: ["Tableau"],
         },
         {
            id: 12,
            title:
               "Developing a GIS-Enhanced Web Application for Promoting Tourism in Castellón, Spain",
            description:
               "A Web based application for finding camping sites, travel agencies, accommodations and activities for explore to Castellon",
            image: "static/images/projects/p12.jpg",
            link: "https://storymaps.arcgis.com/stories/822fd16133324ef1b0d11f877f8fcd8e",
            category: ["spatial-data-science"],
            tools: [
               "Arc GIS Online",
               "Web feature layer",
               "Web feature services",
               "Arc GIS Pro",
               "ArcGIS Web App Builder",
            ],
         },

         {
            id: 13,
            title: "Arc GIS Hub Site for Covid-19 World Distribution",
            description:
               "Arc GIS Hub for explore, analysis, visualization of Covid data globally",
            image: "static/images/projects/p13.jpg",
            link: "https://covid-19-world-distribution-uji.hub.arcgis.com/",
            category: ["spatial-data-science"],
            tools: ["Arc GIS Online", "Arc GIS Pro", "ArcGIS Hub"],
         },
      ];

      // Configuration
      const projectsPerPage = 6;
      let currentPage = 1;
      let currentFilter = "all";

      // DOM elements
      const projectContainer = document.querySelector(".project-container");
      const paginationControls = document.getElementById(
         "pagination-controls"
      );
      const filterBtns = document.querySelectorAll(".filter-btn");

      // Initialize
      displayProjects();
      setupPagination();

      // Filter button event listeners
      filterBtns.forEach((btn) => {
         btn.addEventListener("click", function () {
            filterBtns.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            currentFilter = this.getAttribute("data-filter");
            currentPage = 1;
            displayProjects();
            setupPagination();
         });
      });

      // Display projects for current page and filter
      function displayProjects() {
         projectContainer.innerHTML = "";

         const filteredProjects =
            currentFilter === "all"
               ? allProjects
               : allProjects.filter((project) => {
                  // Handle both array and string categories
                  if (Array.isArray(project.category)) {
                     return project.category.includes(currentFilter);
                  } else {
                     return project.category === currentFilter;
                  }
               });

         const startIndex = (currentPage - 1) * projectsPerPage;
         const endIndex = startIndex + projectsPerPage;
         const paginatedProjects = filteredProjects.slice(
            startIndex,
            endIndex
         );

         paginatedProjects.forEach((project) => {
            const projectElement = document.createElement("div");
            projectElement.className = `col-lg-4 col-md-4 mb-4 project-item`;

            // Get categories as space-separated string for CSS classes
            const categoryClasses = Array.isArray(project.category)
               ? project.category.join(" ")
               : project.category;

            projectElement.innerHTML = `
                  <div class="project-card card">
                    <a href="${project.link
               }" class="text-decoration-none text-dark" target="_blank">
                      <img src="${project.image}" class="card-img-top" alt="${project.title
               }>
                      <div class="card-body">
                        <div class="title p-2"><h5 class="card-title">${project.title}</h5></div>
                        <div class="text p-2"><p class="card-text">${project.description}</p></div>
                        <div class="project-tools p-2">
                          ${project.tools
                  .map(
                     (tool) =>
                        `<span class="tool-badge">${tool}</span>`
                  )
                  .join("")}
                        </div>
                      </div>
                    </a>
                  </div>
                `;
            projectContainer.appendChild(projectElement);
         });
      }

      // Setup pagination controls
      function setupPagination() {
         paginationControls.innerHTML = "";

         const filteredProjects =
            currentFilter === "all"
               ? allProjects
               : allProjects.filter((project) => {
                  if (Array.isArray(project.category)) {
                     return project.category.includes(currentFilter);
                  } else {
                     return project.category === currentFilter;
                  }
               });

         const pageCount = Math.ceil(
            filteredProjects.length / projectsPerPage
         );

         // Previous button
         if (pageCount > 1) {
            const prevLi = document.createElement("li");
            prevLi.className = `page-item ${currentPage === 1 ? "disabled" : ""
               }`;
            prevLi.innerHTML = `<a class="page-link" href="#" aria-label="Previous" data-page="${currentPage - 1
               }">
                  <span aria-hidden="true">&laquo;</span>
                </a>`;
            paginationControls.appendChild(prevLi);
         }

         // Page buttons
         for (let i = 1; i <= pageCount; i++) {
            const pageLi = document.createElement("li");
            pageLi.className = `page-item ${currentPage === i ? "active" : ""}`;
            pageLi.innerHTML = `<a class="page-link" href="#" data-page="${i}">${i}</a>`;
            paginationControls.appendChild(pageLi);
         }

         // Next button
         if (pageCount > 1) {
            const nextLi = document.createElement("li");
            nextLi.className = `page-item ${currentPage === pageCount ? "disabled" : ""
               }`;
            nextLi.innerHTML = `<a class="page-link" href="#" aria-label="Next" data-page="${currentPage + 1
               }">
                  <span aria-hidden="true">&raquo;</span>
                </a>`;
            paginationControls.appendChild(nextLi);
         }

         // Add event listeners to pagination buttons
         document.querySelectorAll(".page-link").forEach((link) => {
            link.addEventListener("click", function (e) {
               e.preventDefault();
               const page = parseInt(this.getAttribute("data-page"));
               if (!isNaN(page) && page !== currentPage) {
                  currentPage = page;
                  displayProjects();
                  setupPagination();
                  // Smooth scroll to projects section instead of jumping to top
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                     window.scrollTo({
                        top: projectsSection.offsetTop - 20,
                        behavior: "smooth",
                     });
                  }
               }
            });
         });
      }
   } catch (error) {
      console.error("Error in DOMContentLoaded:", error);
   }
});