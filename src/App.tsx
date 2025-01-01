import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserRegister } from "./pages/UserRegister";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-xl font-bold text-indigo-600">
                    WebWalk
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/register"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    ユーザー登録
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/register" element={<UserRegister />} />
            <Route
              path="/"
              element={
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                          WebWalk へようこそ
                        </h1>
                        <p className="text-gray-600">
                          <Link
                            to="/register"
                            className="text-indigo-600 hover:text-indigo-500"
                          >
                            ユーザー登録
                          </Link>
                          から始めましょう
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
