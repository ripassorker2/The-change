import React from 'react';
import img1 from '../../../../assets/event/Quality Education Session-Bowrampet/WhatsApp Image 2021-09-08 at 10.09.44 PM (1).jpeg'
import img2 from '../../../../assets/event/Quality Education Session-Bowrampet/WhatsApp Image 2021-09-08 at 10.09.44 PM (2).jpeg'
import img3 from '../../../../assets/event/Quality Education Session-Bowrampet/WhatsApp Image 2021-09-08 at 10.09.44 PM (3).jpeg'
import img4 from '../../../../assets/event/Quality Education Session-Bowrampet/WhatsApp Image 2021-09-08 at 10.09.44 PM (4).jpeg'
import img5 from '../../../../assets/event/Quality Education Session-Bowrampet/WhatsApp Image 2021-09-08 at 10.09.44 PM (5).jpeg'
import img6 from '../../../../assets/event/Quality Education Session-Bowrampet/WhatsApp Image 2021-09-08 at 10.09.44 PM (6).jpeg'
import img7 from '../../../../assets/event/Quality Education Session-Bowrampet/WhatsApp Image 2021-09-08 at 10.09.44 PM.jpeg'

const QualityEducation = () => {
    const PhotoData = [
        {
            id: 1,
            img: img1, 
        },
        {
            id: 2,
            img: img2, 
        },
        {
            id: 3,
            img: img3, 
        },
        {
            id: 4,
            img: img4, 
        },
        {
            id: 5,
            img: img5, 
        },
        {
            id: 6,
            img: img6, 
        },
        {
            id: 7,
            img: img7, 
        },
    ];
    return (
        <>
        <section className='max-w-screen-xl mx-auto my-20'>
             <div className="gap-10 justify-center mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                {PhotoData.map((photo) => (
                    <div className=" bg-base-100 shadow-xl">
                        <img className='w-80 h-72' src={photo.img} alt="" />
                    </div>
                ))}
            </div>
        </section>
          
        </>
    );
};
export default QualityEducation;