import { useState } from "react";
import {Link} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form';
import {ToastContainer, toast} from "react-toastify";
import eyeIcon from '../../assets/images/eyeIcon.svg';
import eyeIconVisib from '../../assets/images/eyeIconVisib.svg';
import shoppingcart from '../../assets/images/shoppingcart.png';
import styles from '../Login/login.module.css';
import classNames from 'classnames';

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const inputType = passwordVisible ? 'text' : 'password';

    //уведомление об ошибке
    const notification = () => {
        return toast.error("Не верный логин или пароль!")
    }

    const signInData = {
        username: username,
        password: password,
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const {register, handleSubmit, formState: { errors, isValid } } = useForm()
    const onSubmit = (data) => {
        alert(`Твое имя ${data.name} пароль ${data.password}`)
    }
    console.log(errors)


    const isDisabled = !(isValid)
    const buttonClasses = classNames(styles.container__btnSubmit, {
        isDisabled,
    });
    const inputClasses = classNames(styles.container__input,styles.password);
    const contentLoginClasses = classNames(styles.container__content, styles.container__content_login);


    
return(
    <div className={styles.container}>
            <div className={styles.container__img}>
                <div>
                    <img src={shoppingcart} alt="shoppingcart"/>
                    <h2>MOBI MARKET</h2>
                </div>
            </div>
            <div className={contentLoginClasses}>
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
                            src={passwordVisible ? eyeIcon : eyeIconVisib}
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
            };

export default Login;