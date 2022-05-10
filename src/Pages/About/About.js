import { AboutData } from '../../Assets/Data/AboutData.js'

function About(){
    return (
        <>
            <h1>About</h1>
            <hr></hr>
            <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-6 pb-4">
                    <div className="background-box rounded mr-3 p-4">
                        {AboutData.aboutMe.map((paragraph, index) => {
                                return (<p key={"aboutMe-" + index}>{paragraph}</p>)
                            }
                        )}
                    </div>
                </div>
                <div className="col d-flex align-items-center rounded mx-3 p-0">
                    <img src="./Images/About/me.jpg" alt="Me" className="img-fluid background-box rounded w-100"></img>
                </div>
            </div>
        </>
    );
}

export default About;