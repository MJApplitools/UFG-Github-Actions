import {
    dbOverviewContainer,
    elementActions,
    primaryButton,
    successButton,
    plusIcon,
    gridIcon,
    warning,
    dbOverviewHeader,
    accountBalancesContainer,
    accountBalances,
    balance,
    balanceTitle,
    balanceValue,
    trendingDown,
    arrowDownIcon,
    balanceLink,
    arrowRightIcon,
	hideMobile,
	hideSmall,
	borderAccent,
	balanceLinkText
} from "./dashboardOverview.module.css";
import { useEffect, useState } from 'react';

export default function DashboardOverview({ scrambleData }) {
    
    const [balances, setBalances] = useState(null);

    useEffect(() => {
        generateBalances();
    }, [scrambleData])

    const generateBalances = () => {
        if (scrambleData) {
            const balances = [];
            for (let i = 0; i < 3; i++) {
                const balance = `${genRand(50000)}`
                balances.push(balance);
            }
            setBalances(balances);
        } else {
            setBalances(null);
        }
    }

    const genRand = (limit) => {
        return Math.floor(Math.random() * limit);
    }

    return (
        <div className={dbOverviewContainer}>
            <div className={elementActions}>
                <a className={primaryButton} href="#">
                    <i className={["osIcon", plusIcon].join(' ')}></i>
                    <span>Add Account</span>
                </a>
                <a className={successButton} href="#">
                    <i className={["osIcon", gridIcon].join(' ')}></i>
                    <span>Make Payment</span>
                </a>
            </div>
            <h6 id="time" className={warning}>
				<span>Your nearest branch closes in: 30m 5s</span>
			</h6>
            <h6 className={dbOverviewHeader}>
                Financial Overview
                <div className={borderAccent}></div>
            </h6>
            <div className={accountBalancesContainer}>
                <div className={accountBalances}>
                    <div className={[hideMobile, balance].join(' ')}>
                        <div className={balanceTitle}>
                            Total Balance
                        </div>
                        <div className={balanceValue}>
                            <span>${(scrambleData && balances?.length) ? balances[0] : "350"}</span>
                            <span className={trendingDown}>
                                <span>%7</span>
                                <i className={["osIcon", arrowDownIcon].join(' ')}></i>
                            </span>
                        </div>
                        <div className={balanceLink}>
                            <a href="#">
                                <span  className={balanceLinkText}>View Statement</span>
                                <i className={["osIcon", arrowRightIcon].join(' ')}></i>
                            </a>
                        </div>
                    </div>
                    <div className={[hideSmall, balance].join(' ')}>
                        <div className={balanceTitle}>
                            Credit Available
                        </div>
                        <div className={balanceValue}>
                            ${(scrambleData && balances?.length) ? balances[1] : "17,800"}
                        </div>
                        <div className={balanceLink}>
                            <a href="#">
                                <span className={balanceLinkText}>Request Increase</span>
                                <i className={["osIcon", arrowRightIcon].join(' ')}></i>
                            </a>
                        </div>
                    </div>
                    <div className={balance}>
                        <div className={balanceTitle}>
                            Due Today
                        </div>
                        <div className={balanceValue} style={{color: '#b71b1b'}}>
                            ${(scrambleData && balances?.length) ? balances[2] : "180"}
                        </div>
                        <div className={balanceLink}>
                            <a href="#" style={{color: "#926a15"}}>
                                <span className={balanceLinkText} >Pay Now</span>
                                <i className={["osIcon", arrowRightIcon].join(' ')}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}