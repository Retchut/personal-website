function Project(props){
  const { projectData } = props;
  return (
    <>
      <div className="row">
        <div className="col">
          <img className="w-100 h-100" src={projectData.imgPath}></img>
        </div>
        <div className="col">
          <div className="row">
            <h1>{projectData.name}</h1>
          </div>
          <div className="row">
            <p>{projectData.description}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="row">{projectData.technologies.map((technology, index) => <div key={projectData.name + index} className="col"><p>technology</p></div>)}</div>
        </div>
        <div className="col">
          <a href={projectData.url}>Git Repo</a>
        </div>
      </div>
    </>

  );
}

export default Project;