import { Icons } from "../../../assets/Icons";
import "../../../style/main/section/popular.css";

const Popular = () => {
    return (
        <>
        <div className='popular'>
                <h3 className='popular__heading open'> Our Most Popular Room</h3>
            <p className='popular__text average'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
            </p>
            <div className='popular__cards'>
                <div className='popular__items'>
                    <img src='../../../../public/bedroom-img.jpg' alt='bedroom' />
                    <div className='popular__info'>
                        <p className='popular__title open'>
                            Deluxe Contrast Room{" "}
                        </p>
                        <span className='popular__items_service'>
                            <Icons.big /> <small>52 sqm</small>
                            <Icons.bed /> <small>2 Bed</small>
                            <Icons.bath /> <small>1 Bathroom</small>
                        </span>
                        <span className='popular__items_price'>
                            <b>
                                $200 <span>/ Night</span>
                            </b>
                        </span>
                    </div>
                </div>
                <div className='popular__items'>
                    <img src='../../../../public/bedroom-img-two.jpg' alt='other bedroom' />
                    <div className='popular__info'>
                        <p className='popular__title open'>Luxury Twin Room</p>
                        <span className='popular__items_service'>
                            <Icons.big /> <small>52 sqm</small>
                            <Icons.bed /> <small>2 Bed</small>
                            <Icons.bath /> <small>1 Bathroom</small>
                        </span>
                        <span className='popular__items_price'>
                            <b>
                                $250<span> / Night</span>
                            </b>
                        </span>
                    </div>
                </div>
                <div className='popular__items'>
                    <img
                        src='../../../../public/bedroom-img-three.jpg'
                        alt='other bedroom again'
                    />
                    <div className='popular__info'>
                        <p className='popular__title open'>
                            Single Contrast Room
                        </p>
                        <span className='popular__items_service'>
                            <Icons.big /> <small>52 sqm</small>
                            <Icons.bed /> <small>2 Bed</small>
                            <Icons.bath /> <small>1 Bathroom</small>
                        </span>
                        <span className='popular__items_price'>
                            <b>
                                $280 <span> / Night</span>
                            </b>
                        </span>
                    </div>
                </div>
            </div>
            </div>
            
        </>
        
    
    );
};

export default Popular;
