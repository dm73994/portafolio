import Divider from "../components/Divider"
import MainLayout from "../views/MainLayout"
import Presentation from "./Presentation"
import StudyWork from "./StudyWork"

const Home = () => {
    return (
        <MainLayout>
            <Presentation />
            <Divider />
            <StudyWork />
        </MainLayout>
    )
}

export default Home