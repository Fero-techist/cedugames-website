import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./pages/background";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/sign-up";
import VerifyCard from "./pages/auth/verification";
import Quiz from "./components/quiz/quiz";
import AgeSelection from "./pages/selection/ageSelection";
import LeaderBoard from "./pages/games/leaderboard";
import Shop from "./pages/games/shop";
import ResetPassword from "./pages/auth/resetPassword";
import Profile from "./pages/games/profile";
import LittleExploere from "./pages/selection/LittleExploere";
import Home from "./pages/games/home";
import ForgotPassword from "./pages/auth/forgotPassword";
import Notifications from "./pages/games/notification";
function App() {
  return (
    <>
      {/* <Quiz /> */}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Background />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/sign-up"
            element={<Signup />}
          />

          <Route
            path="/age-selection"
            element={<AgeSelection />}
          />

          <Route
            path="/age-selection/little-explore"
            element={<LittleExploere />}
          />

          <Route
            path="/age-selection/little-explore/math"
            element={<Home />}
          />

          <Route
            path="/age-selection/little-explore/english"
            element={<Home />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/verification"
            element={<VerifyCard />}
          />

          <Route
            path="/quiz"
            element={<Quiz />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />

          <Route
            path="/leaderboard"
            element={<LeaderBoard />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/shop"
            element={<Shop />}
          />

          <Route
            path="/notification"
            element={<Notifications />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
