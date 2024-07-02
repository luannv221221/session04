import React, { useState } from 'react'

function ToDoList() {
    const data = ["Công việc 1", "Công việc 2"];
    const [jobs, setJobs] = useState(data);
    const [job, setJob] = useState('');
    const save = () => {
        setJobs([...jobs, job]);
        setJob('');
    }
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <form className="row">
                        <div className="col-lg-8">
                            <input type="text" className="form-control" value={job} onChange={(e) => setJob(e.target.value)} />
                        </div>
                        <div className="col-lg-4">
                            <div className="d-grid">
                                <button className="btn btn-primary mb-3" type="button" onClick={save}>ADD</button>
                            </div>

                        </div>
                    </form>
                    <ul className="list-group list-group-numbered">
                        {jobs.map((item, index) => {
                            return (
                                <li className="list-group-item" key={index}>{item}</li>
                            )
                        })}


                    </ul>

                </div>
            </div>
        </div >
    )
}

export default ToDoList