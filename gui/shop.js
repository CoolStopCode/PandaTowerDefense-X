// Create the bar element
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
leftButton.style.marginLeft = '0'; // Fine-tune positioning
leftButton.style.cursor = 'pointer';

// Create right button
const rightButton = document.createElement('div');
rightButton.style.width = '40px'; // Slightly smaller than bar height for perfect alignment
rightButton.style.height = '40px';
rightButton.style.backgroundColor = '#888'; // Light gray color
rightButton.style.borderRadius = '50%'; // Fully round button
rightButton.style.marginRight = '0px'; // Fine-tune positioning
rightButton.style.cursor = 'pointer';

// Append buttons to the bar
bar.appendChild(leftButton);
bar.appendChild(rightButton);

// Add the bar to the document body
document.body.appendChild(bar);
