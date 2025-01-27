import { useEffect, useState } from "react";
import { Tablero } from "./Components/Tablero";
import { BrowserRouter, Route, Routes, Link, useLocation } from "react-router";

function App() {
  const { pathname } = useLocation();

  function bodyClassChange(path) {
    const bodyClass = path == "/trucoScore/" ? "overflow-y-hidden" : "";
    console.log(path);
    console.log(bodyClass);

    return bodyClass;
  }

  useEffect(() => {
    const bodyClass = bodyClassChange(pathname);
    document.body.className = bodyClass;
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/trucoscore"
        element={
          <div className="z-10 absolute w-full h-screen flex justify-center items-center">
            <ul className="flex flex-col backdrop-blur-md items-center gap-4 text-pretty bg-transparent p-5 rounded-3xl border shadow-2xl">
              <li className="hover:underline hover:scale-110 transition-transform">
                <Link
                  className="text-2xl select-none text-white font-universal uppercase"
                  to={"/trucoscore/tablero"}
                >
                  Tanteador
                </Link>
              </li>
              <li className="hover:underline hover:scale-110 transition-transform">
                <span className="text-xl text-white font-universal uppercase">
                  Truco (En 1039 meses)
                </span>
              </li>
            </ul>
          </div>
        }
      />
      <Route path="/trucoscore/tablero" element={<Tablero />} />
    </Routes>
  );
}

export default App;
