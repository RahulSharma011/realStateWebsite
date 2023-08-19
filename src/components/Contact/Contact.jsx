import React from 'react'
import './Contact.css';
import {MdCall} from 'react-icons/md'
import {BsChatDotsFill, BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className='flexCenter c-container paddings innerWidth'>
            <div className='flexColStart c-left'>
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you. We beleive a good <br />
                places to live can make your life better.</span>
                <div className="flexColStart contactModes">
                    {/* first mode */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call</div>
                        </div>
                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Massage Now</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <div className="image-container">
                <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact