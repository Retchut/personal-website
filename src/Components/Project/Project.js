function Project(projectData){
    return (
      <div className="background-box m-4">
        <h1>projectData.Name</h1>
        <p>projectData.Description</p>
        <img src={projectData.ImgPath}></img>
        <a href={projectData.URL}>Git Repo</a>
      </div>
    );
}

export default Project;