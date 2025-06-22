# MediCare App

A React + TypeScript application for medication management, designed for patients and caretakers. This app allows users to track medication intake, manage medication lists, and view basic adherence statistics. Integrated with **Supabase** for authentication and data persistence.


---

## ✅ Completed Features
### Phase 1 (Required)
- 🔐 **Supabase Auth** for user sign up, login, and logout
- ⚠️ Proper error handling & loading states
- ✅ Form validations for user inputs
- ✅ Connected one Dashboard to live data in Supabase

---

## ⚡️ Technical Stack
- **React** + **TypeScript**
- **Supabase** (Authentication, Database, Storage)
- **Tailwind CSS** (UI Styling)

---

## 📋 Features
- ✅ User Registration/Login
- ✅ Strong Typing (no `any` used)
- ✅ Responsive, Role-Based UI
- ✅ Proper error and loading state handling

---

## 🛠️ Getting Started
### Prerequisites
- Node.js v18+
- Supabase Project (with configured database)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Dineshkumar-teki/Doc-App.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create `.env.local`:
    ```
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```

---

## 🧪 Testing
Run the test suite:
```bash
npm run test
