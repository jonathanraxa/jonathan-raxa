import React from 'react';
import '../../Assets/Assets';

const Personal = () => {
    return (
        <div className="Personal" >
            <div className="row">
                <div className="col-md-2">
                    <strong>Personal/Other</strong>
                </div>
            </div>

            {/* GAP INC */}
            <div className="gapinc">
                
                <div className="row no-gutters">
                    <div className="col-md-2">2018 - 2019</div>
                    <div className="col-md-8"><strong>Introverted Intellect – Personal Project</strong></div>
                    <div className="col-md-2"><strong>San Francisco, CA</strong></div>
                </div>
                <div className="row no-gutters offset-md-2">Podcast and blog centered around overcoming social anxieties</div>
                <div className="row no-gutters offset-md-2"><a href="https://introvertedintellect.com/" target="_blank">www.introvertedintellect.com</a></div>
                <div className="row no-gutters offset-md-2">
             
                </div>


                <br />
                <div className="row no-gutters">
                    <div className="col-md-2">2018 - Present</div>
                    <div className="col-md-8"><strong>SF Toastbusters, VP of Public Relations | Toastmasters International</strong></div>
                    <div className="col-md-2"><strong>San Francisco, CA</strong></div>
                </div>
                <div className="row no-gutters offset-md-2">Managing PR duties for non-profit | Creating engagement with online tools</div>
                <div className="row no-gutters offset-md-2">Designed and developed new club website</div>
                <div className="row no-gutters offset-md-2"><a href="www.sftoastbusters.com" target="_blank">www.sftoastbusters.com</a></div>
                <br />
                <div className="row no-gutters">
                    <div className="col-md-2">Nov 2018</div>
                    <div className="col-md-8"><strong>Author</strong></div>
                    <div className="col-md-2"><strong>San Francisco, CA</strong></div>
                </div>
                <div className="row no-gutters offset-md-2">An Awkward Introvert’s Guide to Human Connection</div>
                <div className="row no-gutters offset-md-2"><a href="https://amzn.to/2QsjkUE" target="_blank">https://amzn.to/2QsjkUE</a></div>

                
            </div>
        </div>

    )
}

export default Personal;