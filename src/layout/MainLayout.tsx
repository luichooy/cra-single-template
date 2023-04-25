import React from 'react'
import { Outlet } from 'react-router'
import { Layout } from 'antd'

const MainLayout: React.FC = () => (
	<Layout>
		<Layout.Header>Layout Header</Layout.Header>
		<Layout.Content>
			<Outlet></Outlet>
		</Layout.Content>
		<Layout.Footer>Layout Footer</Layout.Footer>
	</Layout>
)

export default MainLayout
