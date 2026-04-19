# Multi-Source Intelligence Fusion Dashboard

## 📌 Project Overview

The Multi-Source Intelligence Fusion Dashboard is a web-based interface designed to combine and visualize data from multiple sources in a single unified view. The dashboard improves situational awareness by presenting structured and visual intelligence data on an interactive map interface.

The system integrates structured datasets and displays them as geospatial markers, allowing users to quickly access important information through interactive elements such as hover popups.

---

## 🎯 Objective

To create a centralized dashboard that collects, processes, and visualizes multi-source data on a map interface for better understanding and decision-making.

The system:

* Combines multiple data sources
* Displays information on a map using coordinates
* Provides interactive visualization
* Improves data visibility and accessibility

---

## 🛠 Technologies Used

* HTML
* CSS
* JavaScript
* JSON / CSV dataset
* Leaflet.js or Mapbox (Map visualization)

---

## 📊 Key Features

### 1. Multi-Source Data Integration

The system supports structured datasets such as:

* CSV files
* JSON files
* Image metadata
* Geospatial coordinates

All data is displayed in a single dashboard.

---

### 2. Map-Based Visualization

Locations are displayed as markers on an interactive map using latitude and longitude values.

Each marker represents an intelligence data point.

---

### 3. Interactive Hover Information

Users can hover or click on markers to view:

* Location details
* Description or metadata
* Related information or image preview

---

### 4. Unified Dashboard Interface

Instead of viewing multiple files separately, the dashboard provides a centralized interface for analyzing information efficiently.

---

## 📁 Dataset Structure

Example dataset format:

| ID | Location | Latitude | Longitude | Description       |
| -- | -------- | -------- | --------- | ----------------- |
| 1  | Area A   | 17.385   | 78.486    | Activity detected |
| 2  | Area B   | 17.412   | 78.455    | Monitoring point  |
| 3  | Area C   | 17.398   | 78.470    | Image available   |

---

## 📂 Project Structure

Multi-Source-Intelligence-Fusion-Dashboard

│── index.html
│── style.css
│── script.js
│── dataset.json / dataset.csv
│── images (optional)
│── README.md

---

## ⚙ How the System Works

### Step 1 – Data Collection

Data is stored in JSON or CSV format with location coordinates and information.

### Step 2 – Data Processing

The script reads the dataset and extracts latitude and longitude values.

### Step 3 – Map Visualization

Markers are plotted on the map based on coordinates.

### Step 4 – Interactive Display

When users click or hover on markers, a popup displays related information.

---

## 🚀 How to Run the Project

Step 1:
Download or clone repository

Step 2:
Ensure dataset file is present

Step 3:
Open index.html in browser

The dashboard will display map markers with interactive details.

---

## 💡 Use Case

This dashboard can be used in different domains:

* Security monitoring
* Location intelligence
* Data visualization
* Resource tracking
* Research analysis

---

## 📎 Conclusion

The Multi-Source Intelligence Fusion Dashboard demonstrates how multiple datasets can be combined into a single interactive interface. The project improves data accessibility and enables users to quickly interpret location-based information through visual representation.

---

## 👨‍💻 Author

Vikram
