import React from "react";
import lucas from "../../public/3x4 Lucas.png";

export const SchedulerProfessionalSelector = ({ professionals }) => {
    return (
        <div className="col-6 d-flex justify-content-center">
            {professionals?.map((item) => {
                return (
                    <div key={item.id} className=" btn btn-secondary rounded-circle m-1" title={item.name} style={{ width: "50px", height: "50px" }}>
                        <img key={item.id} src={lucas} alt={item.name} className="img-fluid rounded-circle"  />
                    </div>
                );
            })}

        </div>

    );
}