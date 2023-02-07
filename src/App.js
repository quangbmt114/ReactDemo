
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/index"
import Following from "../src/pages/Following/index"
import DefaultLayout from "./Layout/DefaultLayout";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import { Fragment,useState } from "react";

function App() {
  const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null }
  ]
const [data,setData]=useState([])

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
