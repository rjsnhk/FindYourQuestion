
# 🌟 FindYourQuestion: A Question Search App 🌟

Welcome to **FindYourQuestion**, a fullstack application designed to make searching questions a breeze! 🚀 This project demonstrates a robust backend and a responsive frontend to showcase your skills in **Node.js/Golang**, **gRPC**, **MongoDB**, and **React**.  

---

## 📝 Assignment Overview

This project involves building a search functionality for a questions database stored in JSON format. With a powerful backend and an intuitive frontend, you can easily query and filter questions by their title or category.  

---

## 🎯 Key Features

### Frontend 🌐  
- 🔍 **Search Box:** Type queries to find relevant questions.  
- 📋 **Detailed Results:** View question type and title.  
- 📱 **Responsive Design:** Enjoy a user-friendly and mobile-friendly UI.  
- 🔄 **Pagination:** Easily navigate through results.  

### Backend 🖥️  
- ⚙️ Built with **Node.js** . 
- 🔗 Communication via **gRPC**.  
- 🗂️ Data stored in **MongoDB** for quick querying.  
- 📊 Supports various question types like MCQ, anagram, etc.  

---

## 🚀 How to Set Up and Run the Project  

Follow these steps to get the project up and running:  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/rjsnhk/FindYourQuestion.git
cd FindYourQuestion
```  

Here’s how you can include the instructions for changing the `mongoose.connect()` configuration in your README file:

---

# Backend Setup Instructions

## 2️⃣ Set Up the Backend  

1. Navigate to the backend folder:  
   ```bash
   cd backend
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. **Modify MongoDB Connection String**:  
   Before running the insert script, ensure the `mongoose.connect()` function in the `scripts/insertData.js` file uses the following code to connect to your MongoDB database:  

   Example:  
   ```javascript
   const mongoose = require('mongoose');

   mongoose
     .connect('mongodb+srv://nahakrajesh3:nahakrajesh3@rjsnhk.ejhqj.mongodb.net/speakxquestion', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
     .then(() => console.log('Database connection established'))
     .catch((error) => console.error('Failed to connect to MongoDB:', error));
   ```
   ### Additional Notes  
- Ensure that your MongoDB server is running and accessible from your environment.  
- If you are using a remote MongoDB service, ensure that your connection string includes the correct authentication credentials, such as:  
   ```javascript
   const MONGO_URI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your_database>?retryWrites=true&w=majority';
   ```  
   Replace `<username>` and `<password>` with your MongoDB username and password.


4. Insert the sample data into MongoDB:  
   ```bash
   npm run insertdb
   ```  

5. Start the backend server:  
   ```bash
   npm run startall
   ```  

---



### 3️⃣ Set Up the Frontend  
1. Open a new terminal and navigate to the frontend folder:  
   ```bash
   cd frontend
   ```  
2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Start the development server:  
   ```bash
   npm run dev
   ```  

### 4️⃣ Access the Application  
- Open your browser and navigate to:  
  [http://localhost:5173](http://localhost:5173)  

---

## 💡 How to Use  

1. 🔍 Enter a keyword (e.g., "how", "who", "why") in the search box.  
2. 📋 View a list of matching questions with their type and title.  
3. 🗂️ Filter results by category (e.g., MCQ, anagram).  

---

## 🛠️ Technologies Used  

- **Frontend:** React  
- **Backend:** Node.js with gRPC  
- **Database:** MongoDB  

---

## 📊 Evaluation Criteria  

### ✅ Functionality  
- Accurate search results for various question types.  
### 🛠️ Code Quality  
- Well-organized, readable, and maintainable code.  
### 🎨 UI/UX  
- Clean, responsive, and user-friendly interface.  
### 🌟 Creativity  
- Thoughtful design and unique implementation.  

---

## 💻 Contribute  
Feel free to fork the repo, create a branch, and submit a pull request! Contributions are welcome.  

---

## 📧 Contact  
For questions or feedback, please reach out to **[Rajesh Nahak](mailto:nahakrajesh003@gmail.com)**.  

---

**Enjoy exploring FindYourQuestion! 🚀**
