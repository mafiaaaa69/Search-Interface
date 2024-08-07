document.addEventListener('DOMContentLoaded', function() {
    const dropbtn = document.getElementById('dropbtn');
    const dropdownContent = document.getElementById('dropdown-content');
    const searchInput = document.getElementById('searchInput');
    
    dropbtn.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    const dropdownItems = dropdownContent.querySelectorAll('a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedValue = this.getAttribute('data-value');
            dropbtn.innerHTML = `${selectedValue} <i class="fa fa-caret-down"></i>`;
            searchInput.placeholder = `Search in ${selectedValue}`;
            dropdownContent.style.display = 'none';
        });
    });

    window.addEventListener('click', function() {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    });

    searchInput.addEventListener('input', function() {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    });
});
