import { Icons } from '../../../assets/Icons';
import '../../../style/main/section/check.css'
import "../../../style/main/section/media.css";

const Check = () => {
    return (
        <div className='section-check'>
            <h2 className='check__heading open'>Check Availability</h2>
            <p className='check__text average'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
            </p>
            <div className='check__form'>
                <div className='check__form_img'>
                    <img
                        src='../../../../public/check-hotels.png'
                        alt='hotels'
                    />
                </div>
                <div className='check__form_data'>
                    <Icons.fourTopArrows className="check__form_items"/>
                    <label htmlFor='from' className='open'>
                        Check-in
                    </label>
                    <input
                        type='text'
                        placeholder='Thu, 21 Jul 2022'
                        id='from'
                        className='open'
                    />
                    <Icons.calendar className='check__form_input-icon' />
                    <label htmlFor='to' className='open'>
                        Check-out
                    </label>
                    <input
                        type='text'
                        placeholder='Fri, 22 Jul 2022'
                        id='to'
                        className='open'
                    />
                    <Icons.calendar className='check__form_input-icon_two' />
                    <label htmlFor='select'>Guests</label>
                    <select id='select'>
                        <option value='room'>1 Room</option>
                        <option value='room'>2 Room</option>
                        <option value='room'>3 Room</option>
                        <option value='room'>4 Room</option>
                    </select>
                    <button type='button' className='check__form_btn'>CHECK AVAILABILITY</button>
                </div>
            </div>
        </div>
    );
};

export default Check;
