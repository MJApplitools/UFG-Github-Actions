import {
    dbSideNavContainer,
    dbSideNavHeader,
    dbSideNavUser,
    dbSideNavUserPhoto,
    dbSideNavUserInfo,
    dbSideNavUserName,
    dbSideNavUserRole,
    toggleArrow,
    chevronDownIcon,
    dbSideNavMenuContainer,
    dbSideNavSubHeader,
    dbSideNavExpandableOption,
    dbSideNavOptionIcon,
    layoutIcon,
    layersIcon,
    packageIcon
} from "./dashboardSideBar.module.css";

import avatar1 from '../../../img/avatar1.jpg';

export default function DashboardSideBar() {

    return (
        <div className={dbSideNavContainer}>
            <div className={dbSideNavHeader}>
                <div className={dbSideNavUser}>
                    <div className={dbSideNavUserPhoto}>
                        <img alt="" src={avatar1.src} />
                    </div>
                    <div className={dbSideNavUserInfo}>
                        <div className={dbSideNavUserName}>
                            Jack Gomez
                        </div>
                        <div className={dbSideNavUserRole}>
                            Customer
                        </div>
                    </div>
                    <div className={toggleArrow}>
                        <div className={["osIcon", chevronDownIcon].join(" ")}></div>
                    </div>
                </div>
            </div>
            <ul className={dbSideNavMenuContainer}>
                <li className={dbSideNavSubHeader}>
                    <span>Card types</span>
                </li>
                <li className={dbSideNavExpandableOption}>
                    <a href="">
                        <div className={dbSideNavOptionIcon}>
                            <div className={["osIcon", layoutIcon].join(" ")}></div>
                        </div>
                        <span>Credit cards</span>
                    </a>
                </li>
                <li className={dbSideNavExpandableOption}>
                    <a href="">
                        <div className={dbSideNavOptionIcon}>
                            <div className={["osIcon", layersIcon].join(" ")}></div>
                        </div>
                        <span>Debit cards</span>
                    </a>
                </li>
                <li className={dbSideNavSubHeader}>
                    <span>Lending</span>
                </li>
                <li className={dbSideNavExpandableOption}>
                    <a href="">
                        <div className={dbSideNavOptionIcon}>
                            <div className={["osIcon", packageIcon].join(" ")}></div>
                        </div>
                        <span>Loans</span>
                    </a>
                </li>
                <li className={dbSideNavExpandableOption}>
                    <a href="">
                        <div className={dbSideNavOptionIcon}>
                            <div className={["osIcon", packageIcon].join(" ")}></div>
                        </div>
                        <span>Mortgages</span>
                    </a>
                </li>
            </ul>
        </div>     
    )
}