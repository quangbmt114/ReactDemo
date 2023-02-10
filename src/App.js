
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/index"
import Following from "../src/pages/Following/index"
import DefaultLayout from "./Layout/DefaultLayout";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import Login from "./pages/Login/Login";
import { Fragment } from "react";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail";
import ListPost from "./pages/ListPost";
import Manager from "./pages/ManagerPage";

function App() {
  const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null }
    ,{path:"/login",component:Login},
    {path:"/register",component:Register},
    {path:"/post/*",component:Detail},
    {path:"/listpost", component:ListPost},
    {path:"/manager_page",component:Manager}
  ]
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((routes, index) => {
            const Layout = routes.layout === null ? Fragment : DefaultLayout
            const Page = routes.component
            return (
              <Route
                key={index}
                path={routes.path}
                element={
                  <Layout >
                      {
                        (props)=>{
                          return( <Page data={props.data}  />)
                        }
                      }
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
