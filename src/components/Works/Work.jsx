import { useParams } from "react-router-dom";

const Work = () => {
    let params = useParams();
    return (
        <div>
            Um serviço de id {params.serviceId}
        </div>
    );
}

export default Work;