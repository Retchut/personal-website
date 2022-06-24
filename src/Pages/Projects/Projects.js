import React from 'react';

import Project from '../../Components/Project/Project.js'

import { ProjectPageData } from '../../Assets/Data/ProjectPageData.js'

// Build Rows of projects from ProjectPageData
function BuildRows(){
    let projectArrays = [];
    let projectCols = 3;
    let projects = ProjectPageData.projectsData;
    
    for(let i = 0; i < projects.length; i++){
        if(i % projectCols == 0){
            projectArrays.push([projects[i]]);
        }
        else{
            projectArrays[Math.floor(i/projectCols)].push(projects[i]);
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
                            <div key={"row-" + index} className="row d-flex justify-content-center">
                                {
                                    projectRow.map(
                                        projectData =>
                                        <div key={projectData.id} className="col-lg-4 mb-4">
                                            <Project projectData={projectData} />
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