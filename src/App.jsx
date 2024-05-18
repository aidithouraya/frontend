import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'

// import Reglage from './component/reglage/Reglage'
import Profile from './pages/profile/Profile'
import HistoriqueDonne from './pages/HistoriqueDonne/HistoriqueDonne'
import ForgetPassword from './pages/login/ForgetPassword'
import TrakingReels from './pages/TrakingReels'
import SingleApparail from './pages/apparail/SingleApparail'
import NewSingleApparail from './pages/apparail/NewSingleApparail'
import NotFound from './component/notFound/NotFound'
import { decodeJwt } from './utils/getToken'
import Apparail from './pages/apparail/Apparail'
import ListeApparail from './pages/apparail/ListeApparail'
import ListeUserApparail from './pages/apparail/UserDevices'
import Rapport from './pages/rapport/Rapport'
import SingleRapport from './pages/rapport/SingleRapport'
import NewSingleRapport from './pages/rapport/addRapport/Rapport'
import ListeRapport from './pages/rapport/ListeRapport'
import UserDevices from './pages/apparail/UserDevices'
import Chech from './pages/login/Chech'
export const NotificationContext = React.createContext()

function App() {
  const [role, setRole] = useState(null)
  const [currentUser, setcurrentUser] = useState({})
  const [notifications, setNotifications] = useState([])
  const value = { notifications, setNotifications }
  useEffect(() => {
    let token = localStorage.getItem('accessToken')
    if (token) {
      let data = decodeJwt(token)
      if (data) {
        console.log('accessToken', data)
        setRole(data.role)
        setcurrentUser(data)
      }
    }
  }, [localStorage.getItem('accessToken'), role, setRole])
  return (
    <>
      <NotificationContext.Provider value={value}>
        <Provider store={store}>
          <div className='app'>
            <BrowserRouter>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home role={role} />} />
                  <Route path='login' element={<Login />} />
                  <Route path="newpass" element={<Chech />} />
                  <Route path='ForgetPassword' element={<ForgetPassword />} />

                  {/* <Route path='rapport' element={<Rapport role={role} />} /> */}
                  {/* <Route path='reglage' element={<Reglage role={role} />} /> */}
                  <Route
                    path='profile'
                    element={<Profile currentUser={currentUser} />}
                  />
                  <Route
                    path='historiquedonnees'
                    element={<HistoriqueDonne role={role} />}
                  />
                  <Route path='stast' element={<TrakingReels role={role} />} />
                  <Route path='' element={<TrakingReels role={role} />} />

                  <Route path='users'>
                    <Route index element={<List role={role} />} />
                    <Route path=':userID' element={<Single role={role} />} />
                    <Route path='new' element={<New role={role} />} />
                  </Route>
                  <Route path='apparails'>
                    <Route index element={<Apparail role={role} />} />
                    <Route
                      path='new'
                      element={<NewSingleApparail role={role} />}
                    />
                    <Route
                      path='listeApparail'
                      element={<ListeApparail role={role} />}
                    />
                    <Route
                      path='mes-appareils'
                      element={
                        <UserDevices role={role} id={currentUser.userId} />
                      }
                    />
                    <Route
                      path=':appId'
                      element={<SingleApparail role={role} />}
                    />
                  </Route>
                  <Route path='rapport'>
                    <Route index element={<ListeRapport role={role} />} />
                    <Route
                      path='new'
                      element={<NewSingleRapport role={role} />}
                    />

                    <Route path=':id' element={<SingleRapport role={role} />} />
                  </Route>
                  <Route path='*' element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </Provider>
      </NotificationContext.Provider>
    </>
  )
}

export default App
