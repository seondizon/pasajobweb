import React from 'react'

const JobPosts = (props) => {
    return (
        <div className="jobpost" >
            <label className="dash-label" >Job Post</label>
            <ul className="dash-list">
                <li>
                    <span>Active Post</span>
                    <span><a>10</a></span>
                </li>
                <li className="sub">
                    <span>Applications Post</span>
                    <span><a>10</a></span>
                </li>
                <li className="sub">
                    <span>Shortlisted Post</span>
                    <span><a>10</a></span>
                </li>
                <li>
                    <span>Archived (filled-up) Post</span>
                    <span><a>10</a></span>
                </li>
            </ul>

        </div>
    )
}

export default JobPosts