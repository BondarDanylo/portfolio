import { FC, JSX, useState } from "react";
import Projects from "../../components/Projects/Projects";
import IProject from "../../interfaces/IProject";
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import project4 from '../../images/project4.png';
import styles from './Portfolio.module.scss';
import Button from "../../components/Button/Button";

const Portfolio: FC = (): JSX.Element => {

    const [projects, setProjects] = useState<Array<IProject>>([
        {
            id: 1,
            active: true,
            link: 'http://project1.danylobondar.site/',
            image: project1,
            title: 'Interactive Design',
        },
        {
            id: 2,
            active: false,
            link: 'http://www.shiftrix.website',
            image: project2,
            title: 'Shiftrix',
        },
        {
            id: 3,
            active: false,
            link: 'http://project3.danylobondar.site/',
            image: project3,
            title: 'Jell',
        },
        {
            id: 4,
            active: false,
            link: 'http://project1.danylobondar.site/',
            image: project4,
            title: 'Quiz',
        },
    ])
    const [activeProject, setActiveProject] = useState<IProject>(projects[0])

    return (
        <main className="main">
            <section className={styles.portfolio}>
                <h1 className="title">
                    {activeProject.title}
                </h1>
                <Projects activeProject={activeProject} setActiveProject={setActiveProject} projects={projects} />

                <Button type={'a'} link={activeProject.link}>
                    <>Demo</>
                </Button>
            </section>
        </main>
    )
}

export default Portfolio