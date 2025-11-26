# Sculpture List Lengths

This project loops through a list of sculpture objects and generates a new object containing the length of each string value.

## Files Included
- **data.js** – Contains the sculpture list array.
- **sculptureScript.js** – Processes the list and outputs the length of each property.
- **output** – Folder containing your processed results (optional).

## How It Works
Each sculpture object has keys such as `name`, `artist`, `description`, `url`, and `alt`.  
The script iterates over every sculpture and creates a new object where each key maps to the **length** of its original value.

Code Output:
```js
[  
  { name: 26, artist: 20, description: 198, url: 31, alt: 90 },
  { name: 17, artist: 16, description: 188, url: 32, alt: 91 },
  { name: 16, artist: 19, description: 272, url: 31, alt: 98 },
  { name: 4, artist: 14, description: 169, url: 32, alt: 96 },
  { name: 9, artist: 20, description: 209, url: 32, alt: 98 },
  { name: 13, artist: 16, description: 235, url: 32, alt: 90 },
  { name: 9, artist: 21, description: 113, url: 32, alt: 94 },
  { name: 11, artist: 18, description: 254, url: 32, alt: 95 },
  { name: 15, artist: 14, description: 229, url: 31, alt: 92 },
  { name: 15, artist: 15, description: 332, url: 32, alt: 86 },
  { name: 7, artist: 15, description: 272, url: 32, alt: 98 },
  { name: 6, artist: 10, description: 78, url: 31, alt: 92 }
]


