Personal Data Table
This project was created for the Frontend Internship-23 at Privia Security.

Project Brief
This project involves the creation and management of user data through a user-friendly interface. Below are the key functionalities that have been implemented:

Features
User Creation

Users can be created using a user form modal.
User Listing

Created users are listed in a data table.
User Editing

Information for each listed user can be edited using the user form modal.
User Deletion

Each user can be deleted from the data table.
Role-Based Filtering

Users can be filtered based on their roles using tabs.
Pagination

The data table page includes pagination for better data management and user experience.
Implementation Notes
Pay special attention to the comments left on the components for specific requirements and instructions.
Unfinished Features
Pagination: The pagination feature is partially implemented but needs further work.
Checkbox-based Deletion: The functionality to delete multiple users using checkboxes is currently incomplete.
How to Run the Project
Clone the repository to your local machine.
Navigate to the project directory.
Install the necessary dependencies using npm install.
Start the development server using npm start.
File Structure
src
components
UserFormModal.js: Component for the user form modal.
UserDataTable.js: Component for the user data table.
RoleTabs.js: Component for role-based filtering tabs.
pages
HomePage.js: Main page that integrates all components.
styles
styles.css: Styling for the components and pages.
Future Improvements
Complete Pagination: Implement full pagination functionality to navigate through large sets of user data.
Implement Checkbox-based Deletion: Add the ability to delete multiple users at once using checkboxes in the data table.
Conclusion
This project provides a solid foundation for user data management with essential functionalities such as creation, listing, editing, deletion, and role-based filtering. Future improvements will enhance the user experience and add more robust features.
