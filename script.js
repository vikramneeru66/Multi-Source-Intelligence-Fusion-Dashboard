// This file contains the logic to connect our data to the UI

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Top Stats
    document.getElementById('stat-threats').innerText = statsData.activeThreats;
    document.getElementById('stat-regions').innerText = statsData.monitoredRegions;
    document.getElementById('stat-systems').innerText = statsData.systemsOnline;

    // 2. Initialize the Map
    // We center the map on an arbitrary global position
    const map = L.map('map').setView([40.0, 10.0], 2);

    // Add a dark-themed map tile layer (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Create a custom icon for map markers
    const radarIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #ef4444; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 10px #ef4444;"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });

    const feedList = document.getElementById('feed-list');

    // 3. Process Data: Add Markers to Map and Items to Feed
    dashboardData.forEach(item => {
        // --- Map Marker Logic ---
        // Create a marker using the item's latitude and longitude
        const marker = L.marker([item.lat, item.lng], { icon: radarIcon }).addTo(map);

        // Define HTML content for the popup
        const popupContent = `
            <div class="custom-popup">
                <img src="${item.imageUrl}" alt="${item.type}">
                <h4>${item.source}</h4>
                <p><strong>Type:</strong> ${item.type}</p>
                <p><strong>Severity:</strong> ${item.severity}</p>
            </div>
        `;

        // Bind popup to marker. 
        marker.bindPopup(popupContent);
        
        // Add hover functionality to the marker
        marker.on('mouseover', function (e) {
            this.openPopup();
        });
        
        // --- Feed List Logic ---
        // Create a new div element for the feed list
        const feedItem = document.createElement('div');
        feedItem.className = 'feed-item';
        
        // Determine color based on severity
        let colorColor = '#10b981'; // Default success
        if(item.severity === 'Critical') colorColor = '#ef4444'; // danger
        else if(item.severity === 'High') colorColor = '#f59e0b'; // warning
        else if(item.severity === 'Medium') colorColor = '#0ea5e9'; // accent

        // Inject data into the HTML structure
        feedItem.innerHTML = `
            <div class="feed-header">
                <span class="feed-source">${item.source}</span>
                <span class="feed-time">${item.timestamp.split(' ')[1]}</span>
            </div>
            <div class="feed-title" style="color: ${colorColor}">${item.type}</div>
            <div class="feed-desc">${item.description}</div>
        `;

        // Add hover effect to the feed item to center the map on the related marker
        feedItem.addEventListener('mouseenter', () => {
            map.flyTo([item.lat, item.lng], 6, {
                animate: true,
                duration: 1.5
            });
            // Open the marker popup when hovering over the feed list item
            setTimeout(() => {
                 marker.openPopup();
            }, 1500); // Wait for flyTo to complete
        });

        // Add the configured item to the webpage
        feedList.appendChild(feedItem);
    });
});
