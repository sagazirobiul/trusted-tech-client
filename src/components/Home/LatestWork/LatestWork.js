import React from 'react';
import Work from '../Work/Work';
import p1 from '../../../image/p1.jpg'
import p2 from '../../../image/p2.png'
import p3 from '../../../image/p3.jpg'

const LatestWork = () => {
    const latestWork = [
        {img: p1,name: 'BEKO WEB', location: 'Dhaka, Bangladesh', id: 1},
        {img: p2,name: 'Recent Business project', location: 'Gazipur, Dhaka', id: 2},
        {img: p3,name: 'Music Background Graphics', location: 'Motijil, Dhaka', id: 3}
    ]
    return (
        <div>
            <h4 className="ourValueTitle mt-5">PROJECTS</h4>
            <h5 className="text-center my-3">Check Our Latest Work</h5>
            <div className="row mt-5">
                {
                    latestWork.map(work => <Work work={work} key={work.id}/>)
                }
            </div>
        </div>
    );
};

export default LatestWork;