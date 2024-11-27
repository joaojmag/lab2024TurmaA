import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import Loading from "../layout/Loading"
import Container from "../layout/Container"
import styles from "./Project.module.css"
import LinkButton from "../layout/LinkButton"

function Project() {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch(err => console.log(err))
        }, 3000)
    }, [id])

    function toggleProjectForm(){
        return(
            setShowProjectForm(!showProjectForm)
        )
    }

    return (
        <>
            {project.name ? (
                <div>
                    <Container customClass="column" >
                        <div>
                            <h1> Projeto: {project.name} </h1>
                            <button onClick={toggleProjectForm} >
                                {!showProjectForm ? "Editar projeto" : "Fechar"}
                            </button>
                            {!showProjectForm ? (
                                <div>
                                    <p>project forsudom</p>
                                </div>
                            ) : (
                                <div>
                                <p></p>
                            </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project