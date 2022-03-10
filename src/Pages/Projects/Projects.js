import Project from '../../Components/Project/Project.js'

import { ProjectData } from '../../Assets/Data/ProjectData.js'

// Build Rows of projects from ProjectData
function BuildRows(){
    let projectArrays = [];
    
    for(let i = 0; i < ProjectData.length; i++){
        if(i % 3 == 0){
            projectArrays.push([ProjectData[i]]);
        }
        else{
            projectArrays[Math.floor(i/3)].push(ProjectData[i]);
        }
    }
    
    return projectArrays;
}

function Projects(){
    return (
        <>
            <h1>Projects page</h1>
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
                                        project => <div key={project.id} className="col"><Project projectData={project} /></div>
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