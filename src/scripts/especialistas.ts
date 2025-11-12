document.addEventListener('DOMContentLoaded', () => {
  const dropdownButton = document.getElementById('dropdown-button');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const dropdownIcon = document.getElementById('dropdown-icon');
  const selectedAreaText = document.getElementById('selected-area');
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const specialistCards = document.querySelectorAll('.specialist-card');

  // Function to apply filter
  const applyFilter = (filter: string) => {
    // Find the corresponding dropdown item and get its text
    const targetItem = Array.from(dropdownItems).find(item =>
      item.getAttribute('data-filter') === filter
    );

    const itemText = targetItem?.textContent?.trim() || 'Seleccionar Área';

    // Update selected text
    if (selectedAreaText) {
      selectedAreaText.textContent = itemText;
    }

    // Filter cards
    specialistCards.forEach(card => {
      const areas = card.getAttribute('data-areas');

      if (filter === 'all' || (areas && filter && areas.includes(filter))) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  };

  // Check for filter parameter in URL
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');

  if (filterParam) {
    // Apply the filter from URL parameter
    applyFilter(filterParam);
  }

  // Toggle dropdown
  dropdownButton?.addEventListener('click', () => {
    const isHidden = dropdownMenu?.classList.contains('hidden');

    if (isHidden) {
      dropdownMenu?.classList.remove('hidden');
      if (dropdownIcon) {
        (dropdownIcon as HTMLElement).style.transform = 'rotate(180deg)';
      }
    } else {
      dropdownMenu?.classList.add('hidden');
      if (dropdownIcon) {
        (dropdownIcon as HTMLElement).style.transform = 'rotate(0deg)';
      }
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!dropdownButton?.contains(target) && !dropdownMenu?.contains(target)) {
      dropdownMenu?.classList.add('hidden');
      if (dropdownIcon) {
        (dropdownIcon as HTMLElement).style.transform = 'rotate(0deg)';
      }
    }
  });

  // Handle filter selection
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const filter = item.getAttribute('data-filter');

      if (filter) {
        applyFilter(filter);
      }

      // Close dropdown
      dropdownMenu?.classList.add('hidden');
      if (dropdownIcon) {
        (dropdownIcon as HTMLElement).style.transform = 'rotate(0deg)';
      }
    });
  });
});