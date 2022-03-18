import Project from '../../Components/Project/Project.js'

import { ProjectData } from '../../Assets/Data/ProjectData.js'

// Build Rows of projects from ProjectData
function BuildRows(){
    let projectArrays = [];
    let projectCols = 3;
    
    for(let i = 0; i < ProjectData.length; i++){
        if(i % projectCols == 0){
            projectArrays.push([ProjectData[i]]);
        }
        else{
            projectArrays[Math.floor(i/projectCols)].push(ProjectData[i]);
        }
    }
    
    return projectArrays;
}

function Projects(){
    return (
        <>
            <h1>Projects</h1>
            <hr></hr>
            <div className="project-showcase">
                {/*
                    Map each row of projects to Project elements
                */}
                {
                    BuildRows().map((projectRow, index) =>
                    {
                        return (
                            <div key={"row-" + index} className="row">
                                {
                                    projectRow.map(
                                        project =>
                                        <div key={project.id} className="col mx-3 mb-4 h-100 background-box rounded p-4">
                                            <Project projectData={project} />
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Projects;