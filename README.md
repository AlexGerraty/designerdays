# DesignerDays App

DesignerDays is an application that connects users with garden designers of different areas at affordable prices. Users can browse through a variety of designers, view their profiles, and hire them for their gardening projects. The app utilizes a combination of modern technologies such as Ant Design, GraphQL, Express, MongoDB Atlas, Node.js, React, and Apollo Server to provide a seamless user experience.

## Features

- **Browse Designers**: Users can explore a list of garden designers categorized by different areas.
- **View Designer Profiles**: Users can view detailed profiles of designers, including their expertise, description, and pricing.
- **Hire Designers**: Users can hire designers directly through the app for their gardening projects.
- **Responsive Design**: The app is built with a responsive design, ensuring optimal user experience across devices.

## Technologies Used

- **Frontend**: React, Ant Design, Apollo Client
- **Backend**: Node.js, Express, GraphQL, Apollo Server
- **Database**: MongoDB Atlas

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/designerdays.git
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

To address this issue, consider implementing loading indicators or placeholders to inform users that data is being fetched. Additionally, ensure proper error handling mechanisms are in place to gracefully handle situations where data retrieval fails. Techniques such as caching and prefetching data can also be employed to improve the overall user experience and mitigate rendering issues.

By addressing these challenges effectively, you can enhance the reliability and performance of the app, providing users with a seamless browsing experience when accessing designer details.
