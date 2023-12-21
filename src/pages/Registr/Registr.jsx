
import React, {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Registration.css';
import { Schema } from 'yup';
import { setUsername, setEmail } from '../../store/inputSlice';
import shoppingcart from '../../assets/images/shoppingcart.svg';
import arrowLeft from '../../assets/images/arrow-left.svg';

function Register() {
    const [requestError, setRequestError] = useState(false);
    let navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');

    const onSubmit = async () => {
        addUserData(values.username, values.email)
        const userInfo = {'username': values.username, 'email': values.email};
        navigate('/password')
        }
        try{
            // const response = await register(data)
            // console.log(response)
            
        }
        catch(err){
            setRequestError(true)
            if(+err.response?.data.status === 400){
                toast.error(err.response.data.message)
            } else if(err?.response){
                toast.error('Произошла ошибка')
            } else if(err?.message){
                toast.error('Сервер не отвечает')
            }
        }
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
        onSubmit,
    } = useFormik({
        initialValues: {
        email: "",
        username: "",
        },
        validationSchema: Schema,
        onSubmit,
    });

    function addUserData(username, email){
        dispatch(setUsername({username, email}));
        // dispatch(setEmail({email}))
      }
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
                    className={styles.block__input}
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


export default Register;

    