// Create the top bar
const bar = document.createElement('div');
bar.style.position = 'fixed';
bar.style.top = '20px'; // Distance from the top of the screen
bar.style.left = '50%';
bar.style.transform = 'translateX(-50%)';
bar.style.width = '70%'; // Width of the top bar
bar.style.height = '50px'; // Height of the top bar
bar.style.backgroundColor = '#333'; // Background color of the top bar
bar.style.borderRadius = '25px'; // Round corners for pill shape
bar.style.zIndex = '1000'; // Keep the bar above other elements
bar.style.display = 'flex';
bar.style.alignItems = 'center';
bar.style.justifyContent = 'space-between';
bar.style.padding = '0 5px'; // Padding on the sides

// Create left button
const leftButton = document.createElement('div');
leftButton.style.width = '40px'; // Width of the left button
leftButton.style.height = '40px'; // Height of the left button
leftButton.style.backgroundColor = '#888'; // Background color of the left button
leftButton.style.borderRadius = '50%'; // Round shape
leftButton.style.cursor = 'pointer';

// Create right button
const rightButton = document.createElement('div');
rightButton.style.width = '40px'; // Width of the right button
rightButton.style.height = '40px'; // Height of the right button
rightButton.style.backgroundColor = '#888'; // Background color of the right button
rightButton.style.borderRadius = '50%'; // Round shape
rightButton.style.cursor = 'pointer';

// Append buttons to the bar
bar.appendChild(leftButton);
bar.appendChild(rightButton);
document.body.appendChild(bar);

// Create the dropdown menu
const dropdownMenu = document.createElement('div');
dropdownMenu.style.position = 'fixed';
dropdownMenu.style.left = '50%';
dropdownMenu.style.transform = 'translateX(-50%)';
dropdownMenu.style.width = '50%'; // Width of the dropdown (slightly thinner than the top bar)
dropdownMenu.style.height = '0px'; // Start with height as 0 to hide it initially
dropdownMenu.style.backgroundColor = 'rgba(85, 85, 85, 0.8)'; // Background color with transparency for glass effect
dropdownMenu.style.borderRadius = '0 0 15px 15px'; // Rounded bottom corners
dropdownMenu.style.backdropFilter = 'blur(10px)'; // Glass effect
dropdownMenu.style.overflow = 'hidden'; // Hide overflow
dropdownMenu.style.zIndex = '998'; // Keep dropdown below the top bar
dropdownMenu.style.display = 'flex'; // Flexbox for alignment
dropdownMenu.style.alignItems = 'center'; // Center content vertically
dropdownMenu.style.justifyContent = 'center'; // Center content horizontally
dropdownMenu.style.top = '70px'; // Position the dropdown below the top bar
document.body.appendChild(dropdownMenu);

// Create the dropdown button
const dropdownButton = document.createElement('div');
dropdownButton.style.position = 'fixed';
dropdownButton.style.left = '50%';
dropdownButton.style.transform = 'translateX(-50%)';
dropdownButton.style.width = '60px'; // Width of the dropdown button
dropdownButton.style.height = '20px'; // Height of the dropdown button
dropdownButton.style.backgroundColor = '#555'; // Background color of the dropdown button
dropdownButton.style.borderRadius = '0 0 10px 10px'; // Rounded bottom corners
dropdownButton.style.zIndex = '999'; // Keep button above dropdown
dropdownButton.style.cursor = 'pointer';
dropdownButton.style.top = '70px'; // Position it just below the top bar
document.body.appendChild(dropdownButton);

// Array of colors for the squares (pandas)
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F33A', '#FF33A8', '#33F3FF', '#FF5733', '#33FF57', '#3357FF', '#F0F33A', '#FF33A8', '#33F3FF'];

// Create pandas and append them to the dropdown
function createPandas() {
    dropdownMenu.innerHTML = ''; // Clear previous pandas (if any)

    // Create left button for navigation
    const leftNavButton = document.createElement('div');
    leftNavButton.style.width = '40px'; // Width of the left nav button
    leftNavButton.style.height = '60px'; // Height of the left nav button
    leftNavButton.style.backgroundColor = '#888'; // Background color of the left nav button
    leftNavButton.style.borderRadius = '10px'; // Rounded corners
    leftNavButton.style.cursor = 'pointer';
    leftNavButton.style.marginRight = '10px'; // Space between button and pandas
    dropdownMenu.appendChild(leftNavButton); // Add to the dropdown

    // Create pandas
    colors.forEach(color => {
        const panda = document.createElement('div');
        panda.style.width = '60px'; // Width for pandas
        panda.style.height = '60px'; // Height for pandas
        panda.style.backgroundColor = color; // Panda color
        panda.style.borderRadius = '10px'; // Rounded corners
        panda.style.border = '6px solid rgba(0, 0, 0, 0.2)'; // Darker outline
        panda.style.margin = '0 5px'; // Spacing between pandas
        dropdownMenu.appendChild(panda); // Add panda to the dropdown
    });

    // Create right button for navigation
    const rightNavButton = document.createElement('div');
    rightNavButton.style.width = '40px'; // Width of the right nav button
    rightNavButton.style.height = '60px'; // Height of the right nav button
    rightNavButton.style.backgroundColor = '#888'; // Background color of the right nav button
    rightNavButton.style.borderRadius = '10px'; // Rounded corners
    rightNavButton.style.cursor = 'pointer';
    rightNavButton.style.marginLeft = '10px'; // Space between pandas and button
    dropdownMenu.appendChild(rightNavButton); // Add to the dropdown
}

// Toggle function for dropdown
let isDropdownOpen = false;
const animationDuration = 200; // milliseconds

function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
    const maxDropdownHeight = 100; // Height of the dropdown
    const closedTop = 70; // Top position of the dropdown button when closed
    const openTop = closedTop + maxDropdownHeight; // New position of the button when open

    // Set initial positions for dropdown and button based on their state
    dropdownMenu.style.height = isDropdownOpen ? `${maxDropdownHeight}px` : '0px'; // Set height based on open state
    dropdownButton.style.top = `${isDropdownOpen ? openTop : closedTop}px`; // Set button position based on open state

    // Animate dropdown menu
    dropdownMenu.animate(
        [
            { height: isDropdownOpen ? '0px' : `${maxDropdownHeight}px` },
            { height: isDropdownOpen ? `${maxDropdownHeight}px` : '0px' }
        ],
        {
            duration: animationDuration,
            easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)', // Custom easing
            fill: 'forwards'
        }
    );

    // Animate dropdown button
    dropdownButton.animate(
        [
            { top: isDropdownOpen ? `${closedTop}px` : `${openTop}px` },
            { top: isDropdownOpen ? `${openTop}px` : `${closedTop}px` }
        ],
        {
            duration: animationDuration,
            easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)', // Same easing for synchronization
            fill: 'forwards'
        }
    );

    // Update dropdown position after the opening/closing animations
    if (isDropdownOpen) {
        dropdownMenu.style.top = `${closedTop}px`; // Set to the new position when open
        createPandas(); // Create pandas only when opening
    } else {
        dropdownMenu.style.top = `${closedTop}px`; // Reset to initial position when closed
    }
}

// Event listener for button click
dropdownButton.addEventListener('click', toggleDropdown);