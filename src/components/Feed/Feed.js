import React from 'react';
import './Feed.css';

const Feed = ({ isSignedIn, registerClick, onSolutionClick })=>{
    return (
        
        <section className="ph3 ph5-ns pv5">
            <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
            {!isSignedIn ?
                <div className="dt-ns dt--fixed-ns w-100">
                <div className="pa3 pa4-ns dtc-ns v-mid">
                    <div>
                    <h2 className="fw4 blue mt0 mb3">Solutions Access Unlimited</h2>
                    <p className="black-70 measure lh-copy mv0">
                        Get access to all solutions unlimited, sign up here
                    </p>
                    </div>
                </div>
                <div className="pa3 pa4-ns dtc-ns v-mid">
                    <span className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 pointer" onClick={registerClick}>Sign up here (Currently Unavailable)</span>
                </div>
                </div> :
                <div className="dt-ns dt--fixed-ns w-100">
                <div className="pa3 pa4-ns dtc-ns v-mid">
                    <div>
                    <h2 className="fw4 blue mt0 mb3">Whats New</h2>
                    <p className="black-70 measure lh-copy mv0">
                        Check the Solutions Center
                    </p>
                    </div>
                </div>
                <div className="pa3 pa4-ns dtc-ns v-mid">
                    <span className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 pointer" onClick={onSolutionClick}>Solution Center</span>
                </div>
                </div>
            }
            </article>
        </section>

    )
}

export default Feed;