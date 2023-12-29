import * as React from 'react';
// import {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import styles from '../Login/login.module.css';
// import { setUser } from '../redux/slices/userSlice';
// import { useDispatch } from 'react-redux';
// import { useFormik } from 'formik';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import shoppingcart from '../../assets/images/shoppingcart.png';
import arrowLeft from '../../assets/images/arrow-left.svg';
import classNames from 'classnames'

function Register() {
    
    const {register, handleSubmit, formState: { errors, isValid } } = useForm()
    const onSubmit = (data) => {
        alert(`Твое имя ${data.name} email ${data.email}`)
    }
    console.log(errors)


    const isDisabled = !(isValid)
    const buttonClasses = classNames(styles.block__btnSubmit, {
        isDisabled,
    });
// }
    return(
        <div className={styles.container}>
        <div className={styles.container__img}>
            <div>
                <img src={shoppingcart} alt="shoppingcart"/>
                <h2>MOBI MARKET</h2>
            </div>
        </div>
        <div className={styles.container__content}>
            <div className={styles.container__header}>
                <div className={styles.backBtn}>
                    <Link to='/login'>
                        <img src={arrowLeft} alt="backIcon" className={styles.backBtn_img}/>
                    </Link>
                    <Link to='/login'>
                            <p>Назад</p>
                    </Link>
                </div>
                <h3>Регистрация</h3>
                <div className={styles.notMain}></div>
            </div>
            <form className={styles.container__content_items} onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('name', {
                    })}
                    type="text"
                    placeholder="Имя пользователя"
                    className={styles.container__input}
                />
                <input
                    {...register('email', {
                    })}
                    type='email'
                    placeholder="Почта"
                    className={styles.container__input}
                />

                {errors?.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
                <button className={buttonClasses} disabled={isDisabled}>
                    Далее
                </button>
            </form>
        </div>
        <ToastContainer
        position='top-right'
        autoClose={5000}
        closeOnClick
        hideProgressBar={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        style={{
            right: '16em',
            width: '335px',
            height: '54px',
        }}
        />
    </div>
);
    }
    


export default Register;

    