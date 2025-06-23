
const Hero=()=>{
    return(
    <div className="container-fluid bg-primary text-white py-5">
        <div className="container">
            <div className="row align-items-center">
            
            {/* Left side: Text */}
                <div className="col-12 col-md-6 text-center text-md-start">
                    <h1>Hello, I'm Durga Prasad</h1>
                    <p className="lead">Frontend Developer | React Enthusiast | SQL Developer</p>
                    <a href="#projects" className="btn btn-light mt-3">View My Work</a>
                </div>
                
                {/* Right side: Image */}
                <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
                    <img 
                    src="/images/durga.png" 
                    alt="Durga Prasad" 
                    className="img-fluid rounded-circle" 
                    style={{ maxWidth: '300px', width: '100%' }} 
                    />
                </div>
      
            </div>
        </div>
    </div>

    );
}
export default Hero;