import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import { MainLayout, SiderLayout } from '../layout'
import Home from '../views/Home'
import Login from '../views/Login'
import NotFound from '../views/NotFound'
import Register from '../views/Register'
import { List } from '../views/Console'

export default createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<Route path='/' element={<Home />}></Route>
			<Route path='login' element={<Login />}></Route>
			<Route path='register' element={<Register />}></Route>
			<Route path='404' element={<NotFound />}></Route>
			<Route path='console' element={<SiderLayout />}>
				<Route path='list' element={<List />}></Route>
			</Route>
		</Route>
	)
)
