# DesignerDays App

DesignerDays is an innovative platform connecting users with garden designers from various areas, providing affordable services tailored to their needs. The app offers a user-friendly interface and a wide range of features to facilitate seamless communication and collaboration between users and designers.

## Features

- **Find Designers**: Browse through a diverse selection of garden designers based on different areas and expertise.
- **View Profiles**: Explore detailed profiles of designers, including their portfolio, expertise, pricing, and reviews from previous clients.
- **Hire Designers**: Easily hire designers directly through the app for your gardening projects.
- **Responsive Design**: Enjoy a smooth and consistent experience across devices with responsive design.

## Technologies Used

- **Frontend**: React, Ant Design
- **Backend**: GraphQL, Apollo Server
- **Database**: MongoDB Atlas
- **Deployment**: Render

## Visit the Deployed App

You can access the deployed DesignerDays app [here](https://designerdays.onrender.com/). Explore the platform to discover talented garden designers and kickstart your next gardening project with ease!

## About the Application

DesignerDays leverages cutting-edge technologies to streamline the process of finding and hiring garden designers. Whether you're looking to revamp your backyard, create a stunning landscape, or simply spruce up your garden, DesignerDays has you covered. Experience the convenience and affordability of our platform today!

## Feedback and Support

We value your feedback! If you have any questions, suggestions, or encounter any issues while using the app, please don't hesitate to [contact us](mailto:info@designerdays.com). Our team is here to assist you and ensure you have a pleasant experience with DesignerDays.

Thank you for choosing DesignerDays! Happy gardening! 🌿
## Installation

1. Clone the repository:

```bash
git clone https://github.com/alexgerraty/designerdays.git
```

2. Navigate to the project directory:

```bash
cd designerdays
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and visit `http://localhost:3000` to view the app.

## Difficulties with Rendering Data on `/designer/:designerId`

One of the challenges faced in the app is with rendering data on the `/designer/:designerId` URL. This difficulty arises due to the asynchronous nature of fetching designer data from the backend and rendering it on the frontend. Since data fetching operations can take time to complete, there may be delays in loading designer details, resulting in empty or incomplete content being displayed to the user.


