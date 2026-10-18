const button=document.querySelector('.nav-toggle');const nav=document.querySelector('#nav');if(button){button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',open);});}

const publicationFilters = document.querySelectorAll(
  ".publication-filter"
);

const publications = document.querySelectorAll(
  ".publication"
);

const publicationStatus = document.querySelector(
  "#publication-status"
);

function updatePublicationStatus(filter, count) {
  if (!publicationStatus) {
    return;
  }

  if (filter === "all") {
    publicationStatus.textContent =
      `${count} selected publications shown`;
  } else {
    publicationStatus.textContent =
      `${count} publications in this theme`;
  }
}

function filterPublications(filter) {
  let visibleCount = 0;

  publications.forEach((publication) => {
    const publicationThemes =
      (publication.dataset.themes || "")
        .split(" ")
        .filter(Boolean);

    const shouldShow =
      filter === "all" ||
      publicationThemes.includes(filter);

    publication.classList.toggle(
      "is-hidden",
      !shouldShow
    );

    if (shouldShow) {
      visibleCount += 1;
    }
  });

  updatePublicationStatus(filter, visibleCount);
}

publicationFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    publicationFilters.forEach((filterButton) => {
      const isActive = filterButton === button;

      filterButton.classList.toggle(
        "active",
        isActive
      );

      filterButton.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });

    filterPublications(selectedFilter);
  });
});

if (publications.length > 0) {
  filterPublications("all");
}
