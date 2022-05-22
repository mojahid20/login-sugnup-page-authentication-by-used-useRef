import React from 'react';
import mojahid from '../../Asset/Images/mojahid.jpg'
const Home = () => {
    return (
        <div className='container d-flex mt-5 justify-content-between align-items-center' >
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h2>mojahid</h2>
                    <h4>webdeveloper</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque unde dolore sint quidem. Excepturi, aperiam. Perspiciatis doloribus voluptates, et neque quod itaque ut suscipit pariatur quo repellendus? Ratione, molestiae.</p>
                    <button className="btn-primary">Read More</button>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={mojahid} alt="" />
                </div>
            </div>
           
        </div>
    );
};

export default Home;