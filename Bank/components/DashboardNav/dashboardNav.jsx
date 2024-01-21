import {
    navContainer,
    navLogoContainer,
    logoIcon,
    logoLabel,
    navControls,
    navSearch,
    navIcon,
    messageIcon,
    messageCount,
    settingsIcon,
    navUser,
    navUserIcon,
    hamburgerIcon
} from './dashboardNav.module.css';
import avatar1 from '../../../img/avatar1.jpg';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../../../components/logo';

export default function DashboardNav() {

    const router = useRouter();

    const handleNav = () => {
        router.push({pathname: '/bank', query: router.query})
    }

    return (
        <div className={navContainer}>
            <div className={navLogoContainer}>
                <div onClick={handleNav} href=''>
                        <Logo className={logoIcon} />
                    <div className={logoLabel}>
                        ACME
                    </div>
                </div>
            </div>
            <div className={navControls}>
                <div className={navSearch}>
                    <input placeholder="Start typing to search..." type="text" />
                </div>
                <div className={navIcon}>
                    <i className={messageIcon}></i>
                    <div className={messageCount}>
                        7
                    </div>
                </div>
                <div className={navIcon}>
                    <i className={settingsIcon}></i>
                </div>
                <div className={navUser}>
                    <div className={navUserIcon}>
                        <img alt="" src={avatar1.src}/>
                    </div>
                </div>
            </div>
            <div className={hamburgerIcon}>
                <GiHamburgerMenu size={30} />
            </div>
        </div>
    )
}