const Map = () => {
    return (
        <>
            {/*header*/}
            <header className='bg-slate-800'>
                <p className='p-3 text-center font-bold text-2xl'>
                    Java Full Stack + Microservices Developer <br/>
                    Roadmap (6 Months)</p>
            </header>

            {/*main*/}
            {/*row1*/}
            <div className='flex flex-wrap justify-center mt-3 gap-3'>

                {/*card1*/}
                <div className="card w-90 h bg-amber-50 card-md shadow-sm text-black">
                    <div className="card-body">
                        <div className="badge badge-success w-[80px] h-[35px]">1 Month</div>
                        <h2 className="card-title text-2xl"> Core Java Foundations</h2>
                        <div className='bg-emerald-100 p-2 italic font-semibold'>Build strong Java fundamentals — the base for everything.</div>
                        <div className='px-[13px]'>
                            <ul>
                                <li className='list-disc underline decoration-slate-300'>Java Basics, OOP, Exception Handling</li>
                                <li className='list-disc'>Collections, Streams, Lambda, Optional</li>
                                <li className='list-disc'>File I/O, Multithreading</li>
                            </ul>
                        </div>
                        <div className='bg-teal-100 p-2 '>
                            <span className='italic font-semibold'>Project:</span>
                            <p> Student Management System</p>
                        </div>
                    </div>
                </div>

                {/*card2*/}
                <div className="card w-90 bg-amber-50 card-md shadow-sm text-black">
                    <div className="card-body">
                        <div className="badge badge-success w-[80px] h-[35px]">2 Month</div>
                        <h2 className="card-title text-2xl"> Spring Boot + Database</h2>
                        <div className='bg-emerald-100 rounded p-3 italic font-semibold'>Learn backend API development with Spring Boot.</div>
                        <div className='px-[13px]'>
                            <ul>
                                <li className='list-disc underline decoration-slate-300'>Spring Boot basics, REST API, Controller-Service-Repository</li>
                                <li className='list-disc'>Spring Data JPA, Hibernate, MySQL/PostgreSQL</li>
                            </ul>
                        </div>
                        <div className='bg-teal-100 p-2 '>
                            <span className='italic font-semibold'>Project:</span>
                            <p> Quiz or To-Do App Backend</p>
                        </div>
                    </div>
                </div>

                {/*card3*/}
                <div className="card w-90 bg-amber-50 card-md shadow-sm text-black">
                    <div className="card-body">
                        <div className="badge badge-success w-[80px] h-[35px]">3 Month</div>
                        <h2 className="card-title text-2xl"> Frontend Development</h2>
                        <div className='bg-emerald-100 rounded p-3 italic font-semibold'>Build a frontend and connect it with your backend.</div>
                        <div className='px-[13px]'>
                            <ul>
                                <li className='list-disc underline decoration-slate-300'>
                                    HTML, CSS, JavaScript, React.js (Hooks, Props, State)</li>
                                <li className='list-disc'>Fetch/Axios API calls</li>
                            </ul>
                        </div>
                        <div className='bg-teal-100 p-2 '>
                            <span className='italic font-semibold'>Project:</span>
                            <p> Online Quiz App (React + Spring Boot + MySQL)</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*row2*/}
            <div className='flex flex-wrap justify-center mt-3 gap-3 mb-5'>

                {/*card1*/}
                <div className="card w-90 bg-amber-50 card-md shadow-sm text-black">
                    <div className="card-body">
                        <div className="badge badge-success w-[80px] h-[35px]">4 Month</div>
                        <h2 className="card-title text-2xl"> Microservices Architecture</h2>
                        <div className='bg-emerald-100 p-2 italic font-semibold'> Learn to split monolithic apps into microservices.</div>
                        <div className='px-[13px]'>
                            <ul>
                                <li className='list-disc underline decoration-slate-300'>Spring Cloud, Eureka, Config Server</li>
                                <li className='list-disc'>API Gateway, Feign Client</li>
                            </ul>
                        </div>
                        <div className='bg-teal-100 p-2 '>
                            <span className='italic font-semibold'>Project:</span>
                            <p> Split Quiz App into quiz-service, question-service, result-service</p>
                        </div>
                    </div>
                </div>

                {/*card2*/}
                <div className="card w-90 bg-amber-50 card-md shadow-sm text-black">
                    <div className="card-body">
                        <div className="badge badge-success w-[80px] h-[35px]">5 Month</div>
                        <h2 className="card-title text-2xl"> DevOps + Cloud + Security</h2>
                        <div className='bg-emerald-100 rounded p-3 italic font-semibold'>Learn deployment and secure your services</div>
                        <div className='px-[13px]'>
                            <ul>
                                <li className='list-disc underline decoration-slate-300'>Docker, Docker Compose, Kubernetes</li>
                                <li className='list-disc'>Spring Security + JWT</li>
                                <li className='list-disc'>CI/CD with GitHub Actions or Jenkins</li>
                                <li className='list-disc'>Deploy microservices to Render or AWS</li>
                            </ul>
                        </div>
                        <div className='bg-teal-100 p-2 '>
                            <span className='italic font-semibold'>Project:</span>
                            <p>....</p>
                        </div>
                    </div>
                </div>

                {/*card3*/}
                <div className="card w-90 bg-amber-50 card-md shadow-sm text-black">
                    <div className="card-body">
                        <div className="badge badge-success w-[80px] h-[35px]">6 Month</div>
                        <h2 className="card-title text-2xl">Capstone Project + Portfolio</h2>
                        <div className='bg-emerald-100 rounded p-3 italic font-semibold'>Combine all skills into one real-world project.</div>
                        <div className='px-[13px]'>
                            <ul>
                                <li className='list-disc underline decoration-slate-300'>
                                    E-Learning Platform: Full stack microservices app</li>
                                <li className='list-disc'>Use React, Spring Boot, Spring Cloud, Docker</li>
                                <li className='list-disc'>Deploy and document on GitHub</li>
                            </ul>
                        </div>
                        <div className='bg-teal-100 p-2 '>
                            <span className='italic font-semibold'>Project:</span>
                            <p>....</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*footer*/}
            <footer className='bg-slate-800  flex flex-wrap justify-center'>
                <p className=' font-bold text-2xl text-center mb-3'>After 6 Months You Can:</p>
                <div className="stats stats-vertical lg:stats-horizontal shadow flex justify-center text-slate-700 ">
                    <div className="stat bg-neutral-200">
                        <p className='font-semibold text-lg'>✅ Build-full-stack App into quiz <br/>
                        (React + Spring Boot)</p>
                    </div>

                    <div className="stat bg-neutral-300">
                        <p className='font-semibold text-lg'>✅ Design and Deploy scalable <br/>
                            microservice</p>
                    </div>

                    <div className="stat bg-neutral-200">
                        <p className='font-semibold text-lg'>✅ Work with Docker, Kubernetes,<br/>
                            and Spring Cloud</p>
                    </div>

                    <div className="stat bg-neutral-300">
                        <p className='font-semibold text-lg'>✅ Apply for Full-Stack or<br/>
                            and Spring Cloud</p>
                    </div>
                </div>
            </footer>

        </>

    )
}
export default Map
