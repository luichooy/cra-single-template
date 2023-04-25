import React from 'react'
import { Outlet } from 'react-router'
import { Layout } from 'antd'

const SiderLayout: React.FC = () => (
	<Layout>
		<Layout.Sider>Layout Sider</Layout.Sider>
		<Layout.Content>
			<Outlet></Outlet>
		</Layout.Content>
	</Layout>
)

export default SiderLayout
