import React from "react";
import { useParams } from "react-router-dom";

const Professional = () => {
    let params = useParams();
    return (
        <div>
            Um profissional {params.professionalId}
        </div>
    );
}

export default Professional;