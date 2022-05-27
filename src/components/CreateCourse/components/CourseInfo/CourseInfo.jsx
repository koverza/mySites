import React from "react";
import ArrowBack from "./ArrowBack";
import './courseInfo.scss'

function CourseInfo() {
  return (
    <div className="card">
      <ArrowBack/>
      <div className="card-title">Javascript</div>
      <div className="card-row">
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, cum?
          Omnis maxime nostrum, repellat alias ullam ipsam non enim repudiandae
          facilis eveniet veniam expedita sequi quis. Facilis distinctio
          similique, maxime ex dolorum animi nemo incidunt deserunt aperiam
          reprehenderit laboriosam eius amet repellat accusantium quod accusamus
          velit. Soluta vel enim sequi dolores laudantium consequatur minus
          tempore fugiat iusto necessitatibus perferendis facere quo,
          dignissimos at ipsam amet provident eius excepturi ab nesciunt esse
          cupiditate. Eveniet id similique consectetur enim placeat? Accusantium
          laboriosam, natus doloribus minus eius eum alias eaque hic ad
          deserunt, atque expedita nisi earum sunt velit repellat aspernatur
          facilis veniam sapiente! Quo officiis aspernatur odit libero sunt
          animi illum et unde exercitationem, similique incidunt neque eos optio
          hic deserunt sequi aut? Voluptas facilis reiciendis laudantium vitae
          sed commodi tenetur dolores!
        </p>
        <div className="card-box">
          <div className="card-block">
            <div className="card-block__title">ID:</div>
            <div className="card-block__text">id</div>
          </div>
          <div className="card-block">
            <div className="card-block__title">Duration:</div>
            <div className="card-block__text">23:35 hours</div>
          </div>
          <div className="card-block">
            <div className="card-block__title">Created: </div>
            <div className="card-block__text">11.12.2020</div>
          </div>
          <div className="card-block">
            <div className="card-block__title">Authors:</div>
            <div className="card-block__text">
              Anna Sidorenko, Valentina Larina, Anna Sidorenko, Valentina Larina
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
