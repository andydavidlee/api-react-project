// About page

import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <Fragment>
            <div className="py-1">
                 <Link to="/" className="btn btn-light"> Go Back</Link>
            </div>
            <div className="all-center">
                <div className="large">
                <h2>About</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend viverra mi. Curabitur ullamcorper nibh eget ligula malesuada hendrerit in sed sapien. Mauris at lorem velit. Mauris eu hendrerit nunc. Suspendisse venenatis quis justo sed lobortis. Nullam tempus mattis purus, eu dignissim orci pharetra id. Ut imperdiet volutpat risus, vel dictum enim cursus quis. Mauris in viverra ex. Donec eu eleifend lectus. Curabitur eleifend ut diam aliquam dictum. Integer eget odio ligula. Aenean finibus massa in sodales posuere.<br/>

                Morbi interdum nunc vitae luctus consectetur. Mauris volutpat condimentum sapien, at feugiat elit. Pellentesque tempus metus nulla, ac vestibulum ligula finibus ac. Ut placerat est in feugiat suscipit. In nec ante consequat, lobortis ante sed, iaculis sem. Cras quis quam et tellus imperdiet lacinia. Nam viverra semper turpis, vitae convallis ipsum convallis sit amet. Morbi et auctor neque. Nulla ut massa nec elit placerat pretium. Nunc sit amet accumsan nunc. Integer consequat quis lacus a tincidunt. Donec nec neque vel orci vehicula facilisis eu ac odio. Ut sit amet quam pulvinar, vehicula sapien eu, tristique arcu. Nullam aliquam felis magna, ut malesuada libero mollis vel. Etiam in condimentum felis. Curabitur vel tortor lectus.</p>
            </div>
        </Fragment>
    )
}

export default About;
