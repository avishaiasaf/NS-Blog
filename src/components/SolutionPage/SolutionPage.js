import React from 'react';
// import { solutions } from '../solutions';

const SolutionPage = ({ solution, onSolutionReturn, onFileClick }) =>{

    // const onFileClick = (ref) =>{
    //     console.log('Download file ', ref);
    // }

    return (
        <div className='center w-60'>
            <span className="no-underline f6 tc db w4 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 right pointer" onClick={()=>{onSolutionReturn('catalog')}}>Return</span>
            <h1>{solution.title}</h1>
            <p>{solution.body}</p>
            {
                solution.files.map((file, i)=>{
                    return (
                        <div key={i}>
                            <span 
                                className="center no-underline f6 tc db w5 pv2 bg-animate bg-blue hover-bg-dark-blue white br2 pointer" 
                                onClick={() =>{onFileClick(solution.files[i].url || 'empty')}} 
                            >
                                {solution.files[i].name}
                            </span>
                            <br/>
                        </div>
                    ) 
                })
            }
            <br />
            <h3>By {solution.author} - {solution.date}</h3>
            <br />
            <span className="right no-underline f6 tc db w4 pv3 bg-animate bg-blue hover-bg-dark-blue white br2 pointer" onClick={()=>{onSolutionReturn('catalog')}}>Return</span>
            <br />
        </div>
    )
}

export default SolutionPage;