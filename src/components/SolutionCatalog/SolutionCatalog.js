import React from 'react';
import SolutionCard from '../PostCard/PostCard';
// import { solutions } from '../solutions';

const SolutionCatalog = ({ isSignedIn, onSolutionClick, solutions })=>{
    return (
        <div className='w-80 center'>
            <section className="mw8 w-80 center">
            <h2 className="baskerville fw1 ph3 ph0-l">Solution Center</h2>
            {
                isSignedIn ?
                solutions.map((sol, i)=>{
                    return (
                            <SolutionCard 
                                title={solutions[i].title}
                                summary={solutions[i].summary}
                                body={solutions[i].body}
                                author={solutions[i].author}
                                id={solutions[i].id}
                                onPostClick={onSolutionClick}
                                img={solutions[i].img}
                                date={solutions[i].date}
                                key={i}
                            />
                    )
                })
                 :
                <div>
                    <p>Only accessible to logged in users</p>
                </div>
            }
            </section>
        </div>
    );
}

export default SolutionCatalog;