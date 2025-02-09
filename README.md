# CSS_Mavericks

<h2>Project Title</h2>
Fit Compaas

<h2>Introduction</h2>
This Fitness Tracking and Analytics App aims to help users monitor their physical activities, set and achieve fitness goals, and receive intelligent insights for better health management. The backend system provides powerful features such as goal setting, progress tracking, and personalized recommendations using adaptive analytics based on user activity history. By enabling users to track and improve their fitness journey, this project promotes a healthier and more motivated lifestyle.


<h2>Project Type</h2>
 Backend

<h2>Directory Structure</h2>



<h2>Features</h2>

User Authentication and Security:
Secure login using OAuth and JWT, role-based access control for trainers and users.

Activity Tracking APIs:
Users can log activities like walking, running, and cycling, capturing metrics like distance, duration, and calories burned.

Data Export and Integration:
Export activity data in formats like CSV or JSON and integrate with fitness platforms like Google Fit and Apple Health.

Goal Setting and Notifications:

Set personalized fitness goals (e.g., daily steps, workout frequency).
Receive motivational notifications and adaptive goal recommendations based on historical data.
Recommendations Engine:

Suggestions for goal adjustments to foster better engagement and health improvement.

This is the API documentation for the Fitness Tracking and Analytics App. Below are the endpoints for all the routes, along with their HTTP methods and use cases.

---

## 1. /api/activities (Activity Routes)

| HTTP Method | Endpoint                  | Use Case                                                                  |
|-------------|---------------------------|---------------------------------------------------------------------------|
| POST        | /api/activities         | Log a single activity (e.g., running, cycling)                           |
| POST        | /api/activities/batch   | Log multiple activities in one request                                   |
| GET         | /api/activities         | Fetch all logged activities for the user                                 |
| GET         | /api/activities/search  | Search activities based on date, type, or metrics                        |
| GET         | /api/activities/summarized | Get summarized activity statistics (e.g., total distance covered)      |

---

## 2. /api/exports (Export Routes)

| HTTP Method | Endpoint           | Use Case                                                                  |
|-------------|---------------------|---------------------------------------------------------------------------|
| GET         | /api/exports/csv  | Export activity data in CSV format                                        |
| GET         | /api/exports/json | Export activity data in JSON format                                       |
| GET         | /api/exports/xml  | Export activity data in XML format                                        |

---

## 3. /api/goals (Goal Routes)

| HTTP Method | Endpoint                         | Use Case                                                                  |
|-------------|-----------------------------------|---------------------------------------------------------------------------|
| POST        | /api/goals                     | Create a fitness goal for the user (e.g., daily steps target)            |
| GET         | /api/goals/:userId             | Retrieve all goals set by a specific user                                 |
| GET         | /api/goals/recommendations/:userId | Get personalized fitness goal recommendations                        |

---

## 4. /api/auth (Auth Routes)

| HTTP Method | Endpoint                         | Use Case                                                                  |
|-------------|-----------------------------------|---------------------------------------------------------------------------|
| GET         | /api/auth/google               | Authenticate user via Google OAuth                                        |
| GET         | /api/auth/google/callback      | Handle callback from Google and generate JWT token                       |

---

## 5. /api/search (Search Activity Routes)

| HTTP Method | Endpoint                         | Use Case                                                                  |
|-------------|-----------------------------------|---------------------------------------------------------------------------|
| GET         | /api/search/search             | Search activities based on type, date, or user metrics                   |
| GET         | /api/search/summarized         | Get summarized activities based on filters                               |

---

## 6. /api/feedback (Feedback Routes)

| HTTP Method | Endpoint                         | Use Case                                                                  |
|-------------|-----------------------------------|---------------------------------------------------------------------------|
| POST        | /api/feedback/submit           | Submit user feedback on the app or services                               |
| GET         | /api/feedback/all              | Retrieve all submitted feedback                                           |
| GET         | /api/feedback/analytics        | Analyze feature usage and feedback trends                                 |

---

### Example Request and Response

1. *Log an Activity*
   - Endpoint: POST /api/activities
   - Request Body:
     json
     {
       "userId": "shivam123",
       "activityType": "running",
       "distance": 5.0,
       "duration": 30
     }
     
   - Response:
     json
     {
       "message": "Activity logged successfully.",
       "activity": {
         "id": "12345",
         "userId": "shivam123",
         "activityType": "running",
         "distance": 5.0,
         "duration": 30,
         "date": "2025-02-05T10:00:00Z"
       }
     }
     

2. *Export Data as JSON*
   - Endpoint: GET /api/exports/json
   - Response:
     json
     [
       {
         "activityType": "running",
         "distance": 5.0,
         "duration": 30,
         "caloriesBurned": 300
       }
     ]
     

3. *Set a Goal*
   - Endpoint: POST /api/goals
   - Request Body:
     json
     {
       "userId": "shivam123",
       "type": "dailySteps",
       "target": 10000
     }
     
   - Response:
     json
     {
       "message": "Goal created successfully.",
       "goal": {
         "id": "goal123",
         "userId": "shivam123",
         "type": "dailySteps",
         "target": 10000,
         "status": "active"
       }
     }
     

---

### Dependencies

- *Node.js* and *npm* (backend runtime environment)
- *Express* (web framework)
- *Mongoose* (MongoDB object modeling)
- *Body-parser* (request parsing)
- *dotenv* (environment variable management)
- *jsonwebtoken* (authentication via JWT)
- *passport* (OAuth authentication)
- *nodemailer* (for notifications)