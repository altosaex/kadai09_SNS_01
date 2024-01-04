import React from 'react';
import "./Register.css";

export default function Register() {
	return (
		<div className='login'>
			<div className="loginWrapper">
				<div className="loginLeft">
				<h3 className="loginLogo">ススミダス</h3>
				<span className="loginDesc">クローズドな空間で自己内省を。</span>
				</div>
					<div className="loginRight">
						<div className="loginBox">
							<p className="loginMsg">新規登録はこちら</p>
							<input type="text" className="loginInput" placeholder='ユーザー名'/>
							<input type="email" className="loginInput" placeholder='Eメール'/>
							<input type="text" className="loginInput" placeholder='パスワード'/>
							<input type="text" className="loginInput" placeholder='確認用パスワード'/>
							<button className="loginButton">サインアップ</button>
							<button className="loginRegisterButton">ログイン
							</button>
						</div>
					</div>
			</div>
		</div>
	);
}
