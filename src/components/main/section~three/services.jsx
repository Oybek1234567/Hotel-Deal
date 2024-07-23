import { Icons } from "../../../assets/Icons";
import "../../../style/main/section/services.css";

const Services = () => {
    return (
        <>
            <div className='services'>
                <p className='services__name average'>OUR SERVICES</p>
                <h3 className='services__heading open'>Hotel Facilities</h3>
                <ul className='services__list'>
                    <li className='services__item'>
                        <b>Pick up & Drop</b>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page.
                        </p>
                        <Icons.Jeep className='services__item_img' />
                    </li>
                    <li className='services__item'>
                        <b>Parking Space</b>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <Icons.carParking className='services__item_img' />
                    </li>
                    <li className='services__item'>
                        <b>Room Services</b>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page.
                        </p>
                        <Icons.waiter className='services__item_img' />
                    </li>
                    <li className='services__item'>
                        <b>Swimming Pool</b>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <Icons.inBeach className='services__item_img' />
                    </li>
                    <li className='services__item'>
                        <b>Fibre Internet</b>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page.
                        </p>
                        <Icons.noWiFi className='services__item_img' />
                    </li>
                    <li className='services__item'>
                        <b>Breakfast</b>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <Icons.breakfast className='services__item_img' />
                    </li>
                </ul>
            </div>
            <ul className='inner'>
                <li className='inner__item'>
                    <b>302+ </b>
                    <p>Room & Suites</p>
                </li>
                <li className='inner__item'>
                    <b>25</b>
                    <p>Restaurant</p>
                </li>
                <li className='inner__item'>
                    <b>510+ </b>
                    <p>Exceptional Food</p>
                </li>
                <li className='inner__item'>
                    <b>65</b>
                    <p>Destination</p>
                </li>
            </ul>
        </>
    );
};

export default Services;
