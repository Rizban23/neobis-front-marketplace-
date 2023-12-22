import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import marketLogo from '../../assets/img/shopping-cartHeaderLogo.svg';
import userLogo from '../../assets/img/Profile/ProfileIcon.svg';
import btnUploadImg from '../../assets/img/image-addIcon.svg';
import styles from './header.module.scss';
import Box from '@mui/material/Box';
import closeIcon from '../../assets/img/Profile/closeIcon.svg';
import Modal from '@mui/material/Modal';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

function Header(props) {
    const [open, setOpen] = useState(false);
    const [images, setImages] = useState([]);
    const {register, handleSubmit, formState: {errors, isValid}} = useForm();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 564,
        height: 462,
        borderRadius: 10,
        bgcolor: '#FFFFFF',
        boxShadow: 24,
        p: 2,
        fontFamily: 'M PLUS 1p, sans-serif',
        display: 'flex'
    };

    const onSubmit = async (data) => {

        const formData = new FormData();
        images.forEach((image, index) => {
            formData.append(`image${index + 1}`, image);
        });
        formData.append('price', data.price);
        formData.append('title', data.title);
        formData.append('short_description', data.short_description);
        formData.append('long_description', data.long_description);


        console.log(data);
    };

    const handleImageUpload = (event) => {
        const fileList = event.target.files;
        const imageArray = Array.from(fileList).slice(0, 4 - images.length).map((file) => file);
        setImages((prevImages) => [...prevImages, ...imageArray]);
    };

    const isDisabled = !isValid;
    const buttonClasses = classNames(styles.block__btnSubmit, {
        isDisabled,
    });

    return (
        <div className={styles.header}>
            <Link to='/main' className={styles.header__logo}>
                <img src={marketLogo} alt="marketLogo"/>
                <h3>MOBI MARKET</h3>
            </Link>

            <div className={styles.header__user}>
                <button onClick={handleOpen}>
                    Подать объявление
                </button>
                <div className={styles.header__userInfo}>
                    <h4>Алеся</h4>
                    <p>sergeykrash01</p>
                </div>
                <Link to={'/profile'}>
                    <img src={userLogo} alt="userLogo"/>
                </Link>
            </div>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className={styles.modalPlaceAd}>
                        <img onClick={handleClose} src={closeIcon} alt="closeIcon" className={styles.closeIcon}/>
                        <div>
                            <label htmlFor="image-upload" className={styles.image_upload}>
                                <input
                                    type="file"
                                    id="image-upload"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageUpload}
                                    style={{display: 'none'}}
                                />
                                {images.length < 4 && (
                                    <label htmlFor="image-upload" className={styles.uploadButton}>
                                        <img src={btnUploadImg} alt="btnUploadImg" />
                                        Добавить <br /> фото
                                    </label>
                                )}
                                <div className={styles.image_preview}>
                                    {images.map((image, index) => (
                                        <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`}/>
                                    ))}
                                </div>


                            </label>
                        </div>
                        <form className={styles.block__content_inputs} onSubmit={handleSubmit(onSubmit)}>
              <textarea
                  {...register('price', {
                      required: 'Обязательное поле!',
                  })}
                  placeholder="Цена"
                  className={styles.block__input}
              />
                            {errors?.price && <div style={{color: 'red'}}>{errors.price.message}</div>}

                            <textarea
                                {...register('title', {
                                    required: 'Обязательное поле!',
                                })}
                                type="text"
                                placeholder="Название"
                                className={styles.block__input}
                            />
                            {errors?.title && <div style={{color: 'red'}}>{errors.title.message}</div>}

                            <textarea
                                {...register('short_description', {
                                    required: 'Обязательное поле!',
                                })}
                                type="text"
                                placeholder="Краткое описание"
                                className={styles.block__input}
                            />
                            {errors?.price && <div style={{color: 'red'}}>{errors.price.message}</div>}

                            <textarea
                                {...register('long_description', {
                                    required: 'Обязательное поле!',
                                })}
                                type="text"
                                placeholder="Полное описание"
                                className={styles.block__input}
                            />
                            {errors?.long_description &&
                                <div style={{color: 'red'}}>{errors.long_description.message}</div>}

                            <button className={buttonClasses} disabled={isDisabled}>
                                Далее
                            </button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );



}

export default Header;