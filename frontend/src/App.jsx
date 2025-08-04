import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
   <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites-page" element={<Favorites />} />
    </Routes>
   </main>
  </MovieProvider>
  );
}

export default App;

// Conditional Rendering with If-Else Statement

// return (
//   <div>
// <MovieCard movie={{title : "NYC" , release_date: "2024"}}/>
//       <MovieCard movie={{title : "All Of Us Are Dead" , release_date: "2020"}}/>
//     </div>
//     )

// Conditional Rendering with Ternary Operator
// return (
//     <>
//       {movieNumber === 1 ? (
//         <MovieCard movie={{ title: "NYC", release_date: "2024" }} />
//       ) : (
//         <MovieCard
//           movie={{ title: "All Of Us Are Dead", release_date: "2020" }}
//         />
//       )}
//     </>
//   );

// Conditional Rendering with Logical AND Operator
// return (
//     <>
//       {movieNumber === 1 && <MovieCard movie={{ title: "NYC", release_date: "2024" }} />}
//       {movieNumber === 2 && <MovieCard movie={{title : "Parsite", release_date : 2019}} />}
//   </>
// )
