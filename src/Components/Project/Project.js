function Project(props){
  const { projectData } = props;
  return (
    <div className="mx-3 h-100 background-box rounded p-4 ">
      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <img className="w-100 h-100 rounded" src={projectData.imgPath}></img>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <h1>{projectData.name}</h1>
          </div>
          <div className="row">
            <p>{projectData.description}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 link-buttons d-flex justify-content-center">
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