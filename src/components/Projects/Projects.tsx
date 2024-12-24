import React, { FC, JSX } from "react";
import IProject from "../../interfaces/IProject";
import styles from './Projects.module.scss';


const Projects: FC<any> = ({projects, setActiveProject, activeProject}): JSX.Element => {

    const handleClick: React.MouseEventHandler = (e) => {
        const value = (e.target as HTMLElement).innerText
        setActiveProject(
            projects.find((item: IProject)=> item.title === value)
        )
    }


    return(
        <>
            <div className={styles.wrapper}>
                <img src={activeProject.image} alt="Project Image" className={styles.image} />

                <ul className={styles.list}>
                    {projects.map((item :any, index: number)=> {
                        return (
                            <li onClick={handleClick} key={index} className={item === activeProject 
                                ? styles['list__item'] + ' ' + styles['list-active']
                                : styles['list__item']
                            }>
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
    
}

export default Projects