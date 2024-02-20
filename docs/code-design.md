# Break Down the Requirement
- **Large screen and desktop:**
  - Content is center-aligned on the page.
  - **Constraint:** Some rows have a background color applied to the entire row therefor we can't directly center-aligned of the whole page.
- **Desktop & Tablet:** 
  - **Top and Bottom Sections:** Layout is mostly identical except for the left margin of each line.
- **Mobile:**
  - **Top and Bottom Sections:** Layout is identical.
  - **Swipable content:** Should activate/deactivate based on screen size.

# Solution
- **Row Container:** Introduce a container element for each row to address the layout issue.
  - **Image Container:**
    -  Center the image within the container on large screens and desktops.
  - **Text Container:**
    - Center the content within the container on large screens and desktops.
    - Adjust margins for top and bottom sections as needed.
    - Assign themes to each row to achieve the desired color.
- **Swipe Content:**
  - Use JavaScript listeners to activate/deactivate swipe functionality based on screen size changes.
