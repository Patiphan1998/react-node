import App from './App'
import Home from './pages/Home/HomePage'
import ShowCar from './pages/Show/ShowPage'
import Profile from './pages/Profile/ProfilePage'
import Car from './pages/Car/CarPage'

import ToyotaDetail from './pages/Car/ToyotaDetail'
import MazdaDetail from './pages/Car/MazdaDetail'
import HondaDetail from './pages/Car/HondaDetail'

import Post from './pages/Post/PostPage'
import CarDashbord from './pages/Dashbord/CarDashbord'
import UserDashbord from './pages/Dashbord/UserDashbord'
import RequireAuth from './pages/Auth/Authentication'
import RequireAuthAdmin from './pages/Auth/AuthenticationAdmin'
import Signout from './pages/Auth/Signout'
import FavoriteCar from './pages/FavoriteCar/FavoriteCarPage'
import Login from './pages/Login/LoginPage'
import Register from './pages/Register/RegisterPage'
import RegisterMember from './pages/Register/RegisterMember'

import Test from './pages/test/Test'
import Test2 from './pages/test/Test2'



const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
        
        { path: 'signout', component: Signout },
        { path: 'car', component: Car},
        
        { path: 'login', component: Login},
        { path: 'register', component: Register},
        { path: 'registermember', component: RegisterMember},

        { path: 'test', component: Test},
        { path: 'test2', component: RequireAuth(Test2)},


        { path: 'profile', component: RequireAuth(Profile)},
        { path: 'post', component: Post},
        { path: 'showcar/detail/:id', component: RequireAuth(ShowCar)},

        // { path: 'profile/:id', component: RequireAuth(Profile)},

        { path: 'car/detail/toyota', component: RequireAuth(ToyotaDetail)},
        { path: 'car/detail/mazda', component: RequireAuth(MazdaDetail)},
        { path: 'car/detail/honda', component: RequireAuth(HondaDetail)},

        { path: 'favoritecar', component: RequireAuth(FavoriteCar)},
        
        { path: 'dashbord_car', component: RequireAuth(RequireAuthAdmin(CarDashbord))},
        { path: 'dashbord_user', component: RequireAuth(RequireAuthAdmin(UserDashbord))},

    ]
}]

export default routes