function Project(props){
  const { projectData } = props;
  return (
    <div className="d-flex flex-wrap justify-content-center h-100 mx-3 background-box rounded p-4">
      {/* Img/Name/Description */}
      <div className="row flex-shrink-1 w-100">
        <div className="col-lg-4 d-flex justify-content-center align-items-start">
          <img className="img-fluid rounded" src={projectData.imgPath}></img>
        </div>
        <div className="col-lg-8">
          <div className="row">
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
          <a href={projectData.url}>Git Repo</a>
        </div>
        <div className="col-lg-8">
          <div className="row my-1 h-100">
            {projectData.technologies.map((technology, index) =>
              <div key={projectData.name + index} className="col d-flex justify-content-center align-items-center">
                <p class="mb-0 tag rounded">{technology}</p>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;