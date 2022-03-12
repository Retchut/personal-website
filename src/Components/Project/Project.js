function Project(props){
  const { projectData } = props;
  // console.log(projectData.imgPath);
  return (
    <div className="background-box m-4 mw-100">
      <h1>{projectData.name}</h1>
      <p>{projectData.description}</p>
      <div className="row">{projectData.technologies.map((technology, index) => <div key={projectData.name + index} className="col"><p>technology</p></div>)}</div>
      <img src={ require('../../Assets/Images/placeholder.jpg') }></img>
      {/* <img src={ require(projectData.imgPath) }></img> */}
      
      <a href={projectData.url}>Git Repo</a>
    </div>
  );
}

export default Project;