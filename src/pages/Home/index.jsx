import Divider from "../components/Divider"
import MainLayout from "../views/MainLayout"
import Presentation from "./Presentation"
import StudyWork from "./StudyWork"
import ApplicationsExperience from "./ApplicationsExperience"

const Home = () => {
    return (
        <MainLayout>
            <Presentation />
            <Divider />
            <StudyWork />
            <Divider />
            <ApplicationsExperience />
        </MainLayout>
    )
}

export default Home