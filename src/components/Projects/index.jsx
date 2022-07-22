import { useEffect, useState } from 'react'
import code from '../../assets/code.jpg'
import './styles.css'

const Projects = () => {

    const [repos, setRepos] = useState()

    const getRepos = () => {
        fetch('https://api.github.com/users/hiagomu/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
    }

    useEffect(() => {
        getRepos()
    }, [])

    return (
        <section id="projects">
            <h2>Projects</h2>
                {
                    repos ?
                        repos.map(repo => {
                            return (
                                <div className='project-container'>
                                    <div className='project-image'>
                                        <img src={code} alt="">
                                        </img>
                                    </div>
                                    <div className='project-data'>
                                        <h2>{repo.name}</h2>
                                        <p>{repo.description}</p>
                                        <div className='buttons'>
                                            {repo.html_url ?                                             
                                                <a href={repo.html_url} target="_blank">View Source</a>
                                                : null
                                            }
                                            {repo.homepage ?                                             
                                                <a href={repo.homepage} target="_blank">View Live</a>
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : null
                }
        </section>
    )
}

export default Projects