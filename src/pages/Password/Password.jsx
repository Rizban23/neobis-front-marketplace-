import React, { useState, useEffect } from 'react';
import shoppingcart from '../../assets/images/shoppingcart.png';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import arrowLeft from '../../assets/images/arrow-left.svg';
import eyeIcon from '../../assets/images/eyeIcon.svg';
import eyeIconVisible from '../../assets/images/eyeIconVisib.svg';
import pwdLock from '../../assets/images/pwdLock.png';
import styles from '../Login/login.module.css'

function Password(props) {
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmField, setShowConfirmField] = useState(false);
    const [isConfirmPassword, setIsConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const inputType = passwordVisible ? 'text' : 'password';

    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
    const onSubmit = (data) => {
        console.log(data.password, data.passwordConfirm);
    };

    const isValidPasswordLength = password.length >= 8;
    const isValidPasswordNumAndLetter = /^(?=.*[A-Za-z])(?=.*\d)/.test(password);
    const isDisabled = !(isValidPasswordLength && isValidPasswordNumAndLetter);

    const buttonClasses = classNames(styles.container__btnSubmit, {
        isDisabled,
    });
    const passwordClasses = classNames(styles.container__input, styles.container__input_passwordRecovery);

    const checkValid = (validName) => {
        return !validName && password !== '' ? 'red' : errors.exampleRequired ? 'red' : password !== '' ? 'green' : 'gray';
    };

    useEffect(() => {
        const isValid = password !== '' && (isValidPasswordLength && isValidPasswordNumAndLetter);
        setShowConfirmField(isValid);
    }, [password, isValidPasswordLength, isValidPasswordNumAndLetter]);

    useEffect(() => {
        setIsConfirmPassword(showConfirmField);
    }, [showConfirmField]);

    return (
        <div className={styles.container}>
            <div className={styles.container__logo}>
                <div>
                    <img src={shoppingcart} alt="logo" />
                    <h2>MOBI MARKET</h2>
                </div>
            </div>
            <div className={styles.container__content}>
                <div className={styles.container__header}>
                    <div className={styles.backBtn}>
                        <Link to="/login">
                            <img src={arrowLeft} alt="arrow-left" className={styles.backBtn_img} />
                            <p>Назад</p>
                        </Link>
                    </div>
                    <h3>Регистрация</h3>
                    <div className={styles.container__iconEye}>
                        <img
                            src={passwordVisible ? eyeIcon : eyeIconVisible}
                            alt="eyeIcon"
                            onClick={togglePasswordVisibility}
                            className={styles.iconEye_Password}
                        />
                    </div>
                </div>

                <div className={styles.container__content_items}>
                    <div className={styles.container__validPassword}>
                        <img src={pwdLock} alt="PasswordLock" />
                        <h3>{isConfirmPassword ? 'Повторите пароль' : 'Придумайте пароль'}</h3>
                        <div className={styles.description_valid}>
                            <p style={{ color: checkValid(isValidPasswordLength) }}>Минимальная длина — 8 символов.</p>
                            <p style={{ color: checkValid(isValidPasswordNumAndLetter) }}>Для надежности пароль должен содержать буквы и цифры.</p>
                        </div>
                    </div>

                    <form className={styles.container__content_items} onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register('password', {
                                required: 'Обязательное поле!',
                            })}
                            type={inputType}
                            placeholder="Введите пароль"
                            onChange={(e) => setPassword(e.target.value)}
                            className={passwordClasses}
                            value={password}
                        />
                        {errors?.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
                        {showConfirmField && (
                            <div>
                                <input
                                    {...register('passwordConfirm', {
                                        validate: (value) => value === password || 'Пароли не совпадают',
                                    })}
                                    type={inputType}
                                    placeholder="Повторите пароль"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={passwordClasses}
                                    value={confirmPassword}
                                />
                                {errors?.passwordConfirm && (
                                    <div style={{ color: 'red' }}>{errors.passwordConfirm.message}</div>
                                )}
                            </div>
                        )}
                        <button className={buttonClasses} disabled={!showConfirmField}>
                            Далее
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Password;