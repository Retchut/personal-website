import React, { useState } from 'react';

import './Projects.css'
import Project from '../../Components/Project/Project.js';
import Dropdown from '../../Components/Dropdown/Dropdown.js';

import { ProjectPageData } from '../../Assets/Data/ProjectPageData.js';

function Projects(){

    const [ filterState, setFilter ] = useState("All");
    
    // Build Rows of projects from ProjectPageData
    function BuildRows(){
        let projectArrays = [];
        let projectCols = 3;
        // let projects = ProjectPageData.projectsData;
        let tagFilter = filterState;
        let projects = ProjectPageData.projectsData.filter(
            // filter items with the active filter. All items if filter is set to "All"
            project => (tagFilter === "All") ? true : project.tags.find(tag => tag === tagFilter)
        );
        
        for(let i = 0; i < projects.length; i++){
            if(i % projectCols === 0){
                projectArrays.push([projects[i]]);
            }
            else{
                projectArrays[Math.floor(i/projectCols)].push(projects[i]);
            }
        }
        
        return projectArrays;
    }

    return (
        <>
            <h1>Projects</h1>
            <hr></hr>

            {/*
                Page Description
            */}
            <div className="row mx-2 pb-2">
                <div className="projects-intro col">
                    <div className="rounded">
                        {ProjectPageData.projectsIntro.map((paragraph, index) => {
                                return (<p key={"welcome-" + index}>{paragraph}</p>)
                            }
                        )}
                    </div>
                </div>
                <div className="col d-flex justify-content-end">
                    <Dropdown dropdownItems={ProjectPageData.projectsTags} stateHandler={setFilter}></Dropdown>
                </div>
            </div>

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