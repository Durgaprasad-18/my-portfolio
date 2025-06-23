
const Projects=()=>{
    const projectList = [
        {
            title: 'Portfolio Website',
            description: 'A responsive personal portfolio built with React and Bootstrap.',
            link: 'https://yourportfolio.com'
        },
        {
            title: 'To-Do App',
            description: 'A simple to-do app with add/delete tasks and local storage.',
            link: 'https://yourtodoapp.com'
        },
        {
            title: 'Weather App',
            description: 'A weather app using OpenWeather API and React.',
            link: 'https://yourweatherapp.com'
        }
    ];
    return(
        <section id="projects" className="py-5">
        <div className="container">
            <h2 className="text-center mb-4">My Projects</h2>
            <div className="row">
            {projectList.map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );


}
export default Projects;