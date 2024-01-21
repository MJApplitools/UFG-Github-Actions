import {
    loginScreen,
    loginFormContainer,
    loginForm,
    loginFormLogo,
    loginFormHeader,
    loginFormGroup,
    loginFormInputIcon,
    maleCircleIcon,
    fingerprintIcon,
    formOptionsContainer,
    formSubmit,
    formInlineCheckContainer,
    formCheckInput,
    formIconLink,
    formAlert,
	borderAccent
} from "./loginForm.module.css";
import twitterPhoto from '../../../img/social-icons/twitter.png';
import facebookPhoto from '../../../img/social-icons/facebook.png';
import linkedInPhoto from '../../../img/social-icons/linkedin.png';
import { useState } from "react";
import Logo from '../../../components/logo.jsx';
import { useRouter } from "next/router";

export default function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState('');
    const router = useRouter();

    const handleSignIn = () => {
        if (username?.length == 0 || password?.length == 0) {
            setShowError(true);
            if (username?.length == 0 && password?.length == 0) {
                setShowError("Please enter a username and password");
            } else if (username?.length == 0) {
                setShowError("Please enter a username");
            } else if (password?.length == 0) {
                setShowError("Please enter a password");
            }
        } else {
            router.push({pathname: '/dashboard', query: router.query});
        }
    }

    const handleUpdate = (key, value) => {
        if (key == 'user') {
            setUsername(value);
        } else if (key == 'pass') {
            setPassword(value);
        }
    }

    return (
        <div className={loginScreen}>		
			<div className={loginFormContainer}>
				<div className={loginForm}>
					<div className={loginFormLogo}>
						<Logo data-id="login-logo" />
					</div>
					<h4 className={loginFormHeader}>
						Login Form
						<div className={borderAccent}></div>
					</h4>
					{showError && (
						<div className={formAlert}>
							{showError}
						</div>
					)}
					<form>
						<div className={loginFormGroup}>
							<label>Username</label>
							<input 
								id='username'
								placeholder="Enter your username" 
								type="text"
								onChange={(e) => handleUpdate('user', e.target.value)}
							/>
							<div className={[loginFormInputIcon, maleCircleIcon].join(" ")}></div>
						</div>
						<div className={loginFormGroup}>
							<label>Password</label>
							<input
								id='password'
								placeholder="Enter your password" 
								type="password"
								onChange={(e) => handleUpdate('pass', e.target.value)}
							/>
							<div className={[loginFormInputIcon, fingerprintIcon].join(" ")}></div>
						</div>
						<div className={formOptionsContainer}>
							<button className={formSubmit} type="button" onClick={handleSignIn}>
								<span id='log-in'>Sign in</span>
							</button>
							
							<div className={formInlineCheckContainer}>
								<label>
									<input className={formCheckInput} type="checkbox" />
									Remember Me
								</label>
							</div>
							<div>
								<a href="#" className={formIconLink}>
									<img alt="" src={twitterPhoto.src} />
								</a>
								<a href="#" className={formIconLink} style={{marginLeft: "30px", marginRight:"30px", marginTop:"20px"}}>
									<img alt="" src={facebookPhoto.src} />
								</a>
								<a href="#" className={formIconLink}>
									<img alt="" src={linkedInPhoto.src} />
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
        </div>
    )                    
}