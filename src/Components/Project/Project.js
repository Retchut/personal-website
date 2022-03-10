function Project(projectData){
    return (
      <div className="background-box m-4">
        <h1>{projectData.name}</h1>
        <p>{projectData.description}</p>
        <img src={projectData.imgPath}></img>
        <a href={projectData.url}>Git Repo</a>
      </div>
    );
}

export default Project;