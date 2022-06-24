import React from 'react';

function Project(props){
  const { projectData } = props;
  return (
    <div className="d-flex flex-wrap justify-content-center h-100 background-box rounded mx-3 p-4">
      {/* Img/Name/Description */}
      <div className="row flex-shrink-1 w-100">
        <div className="col-lg-4 mt-2 d-flex justify-content-center align-items-center">
          <img className="img-fluid rounded" src={projectData.imgPath}></img>
        </div>
        <div className="col-lg-8">
          <div className="row pt-2">
            <h2>{projectData.name}</h2>
          </div>
          <div className="row">
            <p>{projectData.description}</p>
          </div>
        </div>
      </div>

      {/* Link/Technologies */}
      <div className="row align-self-end flex-grow-1 w-100">
        <div className="col-lg-4 pt-2 link-buttons d-flex justify-content-center align-items-center">
          <a href={projectData.url}>{projectData.buttonText}</a>
        </div>
        <div className="col-lg-8">
          <div className="row my-1 h-100">
            {projectData.tags.map((tag, index) =>
              <div key={projectData.name + "Tag" + index} className="col text-nowrap d-flex justify-content-center align-items-center">
                <p className="mb-0 tech rounded">{tag}</p>
              </div>)}
            {projectData.technologies.map((technology, index) =>
              <div key={projectData.name + "Tech" + index} className="col text-nowrap d-flex justify-content-center align-items-center">
                <p className="mb-0 tag rounded">{technology}</p>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;