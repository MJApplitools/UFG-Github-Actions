import DashboardNav from "../Bank/components/DashboardNav/dashboardNav";
import DashboardSideBar from "../Bank/components/DashboardSideBar/dashboardSideBar";
import DashboardOverview from "../Bank/components/DashboardOverview/dashboardOverview";
import DashboardTable from "../Bank/components/DashboardTable/dashboardTable";
import {
    dashboardContainer,
    dashboardContent
} from './dashboard.module.css';
import { useEffect } from "react";

export default function Dashboard() {

	useEffect(() => {
		document.querySelector('body').style.backgroundColor = '#f2f4f8';
		return () => {
			document.querySelector('body').style.backgroundColor = 'initial';
		}
	}, [])

    return (
        <>
            <div>
                <DashboardNav />
                <div className={dashboardContainer}>
                    <DashboardSideBar />
                    <div className={dashboardContent}>
                        <DashboardOverview scrambleData={true} />
                        <DashboardTable scrambleData={true} />
                    </div>
                </div>
            </div>
        </>
    )
}