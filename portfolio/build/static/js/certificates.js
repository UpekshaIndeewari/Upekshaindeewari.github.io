document.addEventListener("DOMContentLoaded", function () {
   const certificates = [
      {
         id: 1,
         title: "UAS Remote Pilot A1/A3 Competency Certification",
         description:
            "This certification validates competency in operating drones under EU regulations for the Open Category (A1/A3), issued by EASA - European Union Aviation Safety Agency",
         logo: "static/images/certificates/l1.png",
         link: "https://learningzone.eurocontrol.int/ilp/customs/Reports/DACUASComp/Certificate/Validation/14917010/?key=8eef8686aec17def221b0104ab24718cd07f7cf8fd279f85eaf88b97f4265675",
      },
      {
         id: 2,
         title: "IBM Data Science Professional Certificate",
         description:
            "This certificate validates expertise in Python, SQL, machine learning, and data visualization, issued by IBM",
         logo: "static/images/certificates/l2.png",
         link: "https://www.coursera.org/account/accomplishments/specialization/BHYL9G81UTUA",
      },
      {
         id: 3,
         title: "Machine Learning with Python",
         description:
            "This certificate validates in practical skills in Python-based machine learning using scikit-learn, issued by IBM",
         logo: "static/images/certificates/l2.png",
         link: "https://www.coursera.org/account/accomplishments/verify/CGSHRY65YLTP",
      },
      {
         id: 4,
         title: "Databases and SQL for Data Science with Python",
         description:
            "This certificate validates expertise in SQL database management and Python integration for analytics, issued by IBM",
         logo: "static/images/certificates/l2.png",
         link: "https://www.coursera.org/account/accomplishments/verify/3CNXTGESF2NC",
      },
      {
         id: 5,
         title: "Python for Data Science, AI & Development",
         description:
            "This certification validates expertise in Python programming specifically tailored for data science, artificial intelligence, and software development, issued by IBM",
         logo: "static/images/certificates/l2.png",
         link: "https://www.coursera.org/account/accomplishments/verify/UXMNM2EZ89WG",
      },

      {
         id: 6,
         title: "Python Programming",
         description:
            "This course provides a strong foundation in Python, emphasizing both theoretical concepts and practical applications in computing, issud by University of Moratuwa, (verification code:RRWpdSh0uc)",
         logo: "static/images/certificates/l5.png",
         link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
      },
      {
         id: 7,
         title: "Web Design for Beginners",
         description:
            "This course provides a strong foundation in Python, emphasizing both theoretical concepts and practical applications in computing, issud by University of Moratuwa, (verification code:ID kddk5v2u2p)",
         logo: "static/images/certificates/l5.png",
         link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
      },
      {
         id: 8,
         title: "Spatial Data Science: The New Frontier in Analytics",
         description:
            "This certification validates expertise in geospatial AI, spatial statistics, and big data visualization with ArcGIS, issued by Esri",
         logo: "static/images/certificates/l3.jpg",
         link: "https://www.esri.com/training/TrainingRecord/Certificate/uvidanelage_uji/64b911227640e8345a4875b5/-120",
      },
      {
         id: 9,
         title: "Python Scripting for Geoprocessing Workflows",
         description:
            "This certification validates expertise in automate geoprocessing tasks with ArcPy and create custom GIS tools, issued by ESRI",
         logo: "static/images/certificates/l3.jpg",
         link: "https://www.esri.com/training/TrainingRecord/Certificate/uvidanelage_uji/63f683c8c8cc9a0fdf8a19d3/-60",
      },
      {
         id: 10,
         title: "UAVs in Precision Agriculture",
         description:
            "This certification validates expertise in UAV (drone) technology in precision agriculture, leveraging advanced sensors and AI for sustainable crop monitoring, yield optimization, and resource-efficient farming practices, issued by University of Twente",
         logo: "static/images/certificates/l6.png",
         link: "https://www.linkedin.com/in/upeksha-indeewari/details/certifications/1745997938948/single-media-viewer?type=DOCUMENT&profileId=ACoAACufWgoBvrZcrKXCmr9zwdnUDW5JFXOW6x8&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYHbgHwP%2BS7C9pRHoZc3rQQ%3D%3D",
      },
      {
         id: 11,
         title: "OpenStreetMap and Humanitarian Mapping",
         description:
            "Humanitarian mapping with OSM for disaster response and development issued by UN Mappers",
         logo: "static/images/certificates/l4.jpg",
         link: "https://www.linkedin.com/in/upeksha-indeewari/details/certifications/1729190210289/single-media-viewer/?profileId=ACoAACufWgoBvrZcrKXCmr9zwdnUDW5JFXOW6x8",
      },
   ];

   const perPage = 3;
   let currentPage = 1;
   const totalPages = Math.ceil(certificates.length / perPage);

   const container = document.getElementById("certificate-container");
   const pagination = document.getElementById("pagination");

   function renderCertificates(page) {
      container.innerHTML = "";
      const start = (page - 1) * perPage;
      const end = start + perPage;

      certificates.slice(start, end).forEach((cert) => {
         const card = document.createElement("div");
         card.className = "col-md-4 mb-4 certificate-card";
         card.innerHTML = `
              <div class="certcard h-100 shadow-sm">
                <div class="card-body text-center p-4" onclick="window.open('${cert.link}', '_blank')">
                  <div class="certificate-logo mb-3">
                    <img src="${cert.logo}" alt="${cert.title}">
                  </div>
                  <h5 class="card-title">${cert.title}</h5>
                  <p class="card-text">${cert.description}</p>
                </div>
              </div>
            `;
         container.appendChild(card);
      });
   }

   function renderPagination() {
      pagination.innerHTML = "";
      for (let i = 1; i <= totalPages; i++) {
         const li = document.createElement("li");
         li.className = "page-item" + (i === currentPage ? " active" : "");
         li.innerHTML = `<button class="page-link" type="button">${i}</button>`;
         li.addEventListener("click", function () {
            currentPage = i;
            renderCertificates(currentPage);
            renderPagination();
         });
         pagination.appendChild(li);
      }
   }

   // Initial load
   renderCertificates(currentPage);
   renderPagination();
});