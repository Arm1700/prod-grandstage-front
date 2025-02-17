import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from '../../context/DataProvider';


const ImageSliderModal = ({ images }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { getImageUrl } = useContext(DataContext);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const settings = {
        initialSlide: currentImageIndex,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={getImageUrl(image)}
                        alt={`Slide ${index}`}
                        onClick={() => openModal(index)}
                        style={{ cursor: 'pointer', width: '100px', height: '100px' }}
                    />
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Slider"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
            >
                <button onClick={closeModal}>Close</button>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={getImageUrl(image)} alt={`Slide ${index}`} style={{ width: '100%' }} />
                        </div>
                    ))}
                </Slider>
            </Modal>
        </div>
    );
};

export default ImageSliderModal;
