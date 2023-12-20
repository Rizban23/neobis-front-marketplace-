import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {ToastContainer, toast} from "react-toastify";
import eyeIcon from '../../assets/images/eyeIcon.svg';
import login from '../../api/index'
import eyeIconVisib from '../../assets/images/eyeIconVisib.svg';
import shoppingcart from '../../assets/images/shoppingcart.png';

function Login (props) {
    const navigate = useNavigate(); 
    const userRef = userRef();
    cconst [errMsg, setErrMsg] = useState('');
    const dispatch = dispatch();
    const [username, setUsername] = useState('');
    const [password, setPwd] = useState('');
    const [error, setError] = useState(false)
}

const [passwordVisible, setPasswordVisible] = useState(false);
console.log(login)
useEffect(() =>{
   userRef.current.focus();
}, []);

useEffect(() =>{
    setError(false);
}, [username, password]);    

const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(username, password);
    try{
        const data ={
            email:username,
            password:password
        }
      dispatch (loginUser(user));
      navigate ('/home');
        const response = await login(data)
       
       .current.focus();
    }
}

const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};

return(
    <div className={styles.container}>
            <div className={styles.container__logo}>
                <div>
                    <img src={logo} alt="logo"/>
                    <h2>MOBI MARKET</h2>
                </div>
            </div>
            <div className={blockLoginClasses}>
                <form className={styles.container__content_items} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('name', {
                        required: 'Обязательное поле!',
                           })}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Имя пользователя"
                        className={styles.container__input}
                    />
                    {errors?.name && <div style={{color: 'red'}}>{errors.name.message}</div>}
                    <div className={styles.container__password}>
                        <input
                            {...register('password', {
                                required: 'Обязательное поле!',
                            })}
                            type={inputType}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Пароль"
                            className={inputClasses}
                        />
                        <img
                            src={showPassword ? eyeIcon : eyeIconNoVisible}
                            alt="eyeIcon"
                            onClick={togglePasswordVisibility}
                            className={styles.inputPasswordImg}
                        />
                    </div>

                    {errors?.password && <div style={{color: 'red'}}>{errors.password.message}</div>}
                    <button className={buttonClasses} disabled={isDisabled}>
                        Войти
                    </button>
                </form>
                <Link to="/register" className={styles.container__btnLink}>Зарегистрироваться</Link>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                closeOnClick
                hideProgressBar={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                style={{
                    right: '16em',
                    width: '335px',
                    height: '54px',
                }}
            />
        </div>
    );

export default LoginPage;