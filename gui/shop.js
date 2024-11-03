// Create the top bar
const bar = document.createElement('div');
Object.assign(bar.style, {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '70%',
    height: '50px',
    backgroundColor: '#333',
    borderRadius: '25px',
    zIndex: '1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5px',
});
document.body.appendChild(bar);

// Create the left and right buttons
const createButton = (color) => {
    const button = document.createElement('div');
    Object.assign(button.style, {
        width: '40px',
        height: '40px',
        backgroundColor: color,
        borderRadius: '50%',
        cursor: 'pointer',
    });
    return button;
};
bar.appendChild(createButton('#888'));
bar.appendChild(createButton('#888'));

// Create the dropdown menu
const dropdownMenu = document.createElement('div');
Object.assign(dropdownMenu.style, {
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '50%',
    height: '0px',
    backgroundColor: 'rgba(85, 85, 85, 0.8)',
    borderRadius: '0 0 15px 15px',
    backdropFilter: 'blur(10px)',
    overflow: 'hidden',
    zIndex: '998',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '70px',
});
document.body.appendChild(dropdownMenu);

// Create the dropdown button
const dropdownButton = document.createElement('div');
Object.assign(dropdownButton.style, {
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '20px',
    backgroundColor: '#555',
    borderRadius: '0 0 10px 10px',
    zIndex: '999',
    cursor: 'pointer',
    top: '70px',
});
document.body.appendChild(dropdownButton);

// Panda colors
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F33A', '#FF33A8', '#33F3FF', '#FF5733', '#33FF57', '#3357FF', '#F0F33A', '#FF33A8', '#33F3FF'];

// Panda container for horizontal scrolling
const pandaContainer = document.createElement('div');
Object.assign(pandaContainer.style, {
    display: 'flex',
    overflow: 'hidden', // Hide scrollbars
    width: '100%',
    padding: '10px',
    gap: '10px',
});
dropdownMenu.appendChild(pandaContainer);

// Create pandas and append them to the container
function createPandas() {
    pandaContainer.innerHTML = '';
    colors.forEach(color => {
        const panda = document.createElement('div');
        Object.assign(panda.style, {
            width: '60px',
            height: '60px',
            backgroundColor: color,
            borderRadius: '10px',
            border: '6px solid rgba(0, 0, 0, 0.2)',
            flexShrink: '0',
        });
        pandaContainer.appendChild(panda);
    });
}

// Enable precise horizontal scrolling with mouse wheel
const pandaWidth = 60; // Width of a panda
const gap = 10; // Gap between pandas
const scrollStep = pandaWidth + gap;
let targetScrollLeft = 0; // Tracks the target scroll position

pandaContainer.addEventListener('wheel', (e) => {
    e.preventDefault();

    // Update the target scroll position based on scroll direction
    targetScrollLeft += e.deltaY > 0 ? scrollStep : -scrollStep;

    // Clamp the target position to the container's scrollable bounds
    targetScrollLeft = Math.max(0, Math.min(pandaContainer.scrollWidth - pandaContainer.clientWidth, targetScrollLeft));

    // Animate scrolling to the target position smoothly
    pandaContainer.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
    });
});

// Toggle dropdown visibility
let isDropdownOpen = false;
const animationDuration = 200; // Animation duration in milliseconds

function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
    const maxDropdownHeight = 100;
    const closedTop = 70;
    const openTop = closedTop + maxDropdownHeight;

    dropdownMenu.style.height = isDropdownOpen ? `${maxDropdownHeight}px` : '0px';
    dropdownButton.style.top = `${isDropdownOpen ? openTop : closedTop}px`;

    // Animate dropdown opening and closing
    dropdownMenu.animate(
        [
            { height: isDropdownOpen ? '0px' : `${maxDropdownHeight}px` },
            { height: isDropdownOpen ? `${maxDropdownHeight}px` : '0px' }
        ],
        {
            duration: animationDuration,
            easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
            fill: 'forwards'
        }
    );

    dropdownButton.animate(
        [
            { top: isDropdownOpen ? `${closedTop}px` : `${openTop}px` },
            { top: isDropdownOpen ? `${openTop}px` : `${closedTop}px` }
        ],
        {
            duration: animationDuration,
            easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
            fill: 'forwards'
        }
    );

    if (isDropdownOpen) {
        createPandas();
    }
}

// Event listener for button click
dropdownButton.addEventListener('click', toggleDropdown);
