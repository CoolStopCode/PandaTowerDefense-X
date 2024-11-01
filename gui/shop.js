// Create the top bar element
const bar = document.createElement('div');

// Style the bar for a pill shape
bar.style.position = 'fixed';
bar.style.top = '20px'; // Adjust as needed
bar.style.left = '50%';
bar.style.transform = 'translateX(-50%)';
bar.style.width = '70%'; // Very long bar
bar.style.height = '50px'; // Adjust height for a pill shape
bar.style.backgroundColor = '#333'; // Dark color for contrast
bar.style.borderRadius = '25px'; // Makes it pill-shaped
bar.style.zIndex = '1000'; // Ensure it’s on top
bar.style.display = 'flex';
bar.style.alignItems = 'center';
bar.style.justifyContent = 'space-between';
bar.style.padding = '0 5px'; // Slight padding to move buttons closer to edges

// Create left button
const leftButton = document.createElement('div');
leftButton.style.width = '40px'; // Slightly smaller than bar height for perfect alignment
leftButton.style.height = '40px';
leftButton.style.backgroundColor = '#888'; // Light gray color
leftButton.style.borderRadius = '50%'; // Fully round button
leftButton.style.cursor = 'pointer';

// Create right button
const rightButton = document.createElement('div');
rightButton.style.width = '40px'; // Slightly smaller than bar height for perfect alignment
rightButton.style.height = '40px';
rightButton.style.backgroundColor = '#888'; // Light gray color
rightButton.style.borderRadius = '50%'; // Fully round button
rightButton.style.cursor = 'pointer';

// Append buttons to the bar
bar.appendChild(leftButton);
bar.appendChild(rightButton);

// Add the bar to the document body
document.body.appendChild(bar);

// Create the dropdown menu
const dropdownMenu = document.createElement('div');

// Style the dropdown menu with glass effect
dropdownMenu.style.position = 'fixed';
dropdownMenu.style.left = '50%';
dropdownMenu.style.transform = 'translateX(-50%)';
dropdownMenu.style.width = '68%'; // Slightly thinner than the top bar
dropdownMenu.style.height = '0'; // Start hidden
dropdownMenu.style.backgroundColor = 'rgba(85, 85, 85, 0.8)'; // Semi-transparent dark gray
dropdownMenu.style.borderRadius = '0 0 15px 15px'; // Round only the bottom corners
dropdownMenu.style.backdropFilter = 'blur(10px)'; // Glass effect with blur
dropdownMenu.style.overflow = 'hidden';
dropdownMenu.style.transition = 'height 0.3s ease, top 0.3s ease'; // Smooth height transition
dropdownMenu.style.zIndex = '998'; // Ensure it’s below the button but above other elements

// Create the dropdown button
const dropdownButton = document.createElement('div');

// Style the dropdown button
dropdownButton.style.position = 'fixed';
dropdownButton.style.top = '70px'; // Initial position right below the top bar
dropdownButton.style.left = '50%';
dropdownButton.style.transform = 'translateX(-50%)';
dropdownButton.style.width = '60px'; // Adjust width as needed
dropdownButton.style.height = '20px'; // Adjust height as needed
dropdownButton.style.backgroundColor = '#555'; // Light gray for contrast
dropdownButton.style.borderRadius = '0 0 10px 10px'; // Round only the bottom corners
dropdownButton.style.zIndex = '999'; // Ensure it’s above the dropdown
dropdownButton.style.cursor = 'pointer';
dropdownButton.style.transition = 'top 0.3s ease'; // Smooth transition for movement

// Add click event to toggle dropdown
let isDropdownOpen = false;
dropdownButton.addEventListener('click', () => {
    if (isDropdownOpen) {
        // Close dropdown
        dropdownMenu.style.height = '0';
        dropdownButton.style.top = '70px'; // Reset button to initial position
    } else {
        // Open dropdown
        dropdownMenu.style.height = '150px'; // Set desired dropdown height
        dropdownMenu.style.top = '50px'; // Position the dropdown right below the top bar
        dropdownButton.style.top = '200px'; // Move button down to stay connected
    }
    isDropdownOpen = !isDropdownOpen; // Toggle state
});

// Add elements to the document in the correct order
document.body.appendChild(dropdownMenu);
document.body.appendChild(dropdownButton);
