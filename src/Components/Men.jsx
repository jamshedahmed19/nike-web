import React from "react";
import { Grid } from "@material-ui/core";
import { Outlet, useParams, Link } from "react-router-dom";
import "../Assets/Style.css";

function Men() {
  return (
    <>
      <br />
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <h1>Men</h1>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <br />
          <Outlet />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}

export default Men;

export function LaunchIndex() {
  return (
    <div className="cards-list">
      {Object.entries(men).map(([slug, { name, img, price }]) => (
        <Grid item xs={4}>
          <div className="card" key={slug}>
            <Link to={`/men/${slug}`}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <h4>Rs. {price}</h4>
            </Link>
          </div>
          <br />
        </Grid>
      ))}
    </div>
  );
}

export function LaunchShoe() {
  const { slug } = useParams();
  const shoe = men[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img, price, side_img, discription } = shoe;

  return (
    <div className="detail-page">
      <div className="img">
        <img src={img} alt={name} />
        <img src={side_img} alt={name} />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <h4>Rs. {price}</h4>
        <button>Add to Cart</button>
        <button className="fvt">Favorite</button>
        <p>{discription}</p>
      </div>
    </div>
  );
}

const men = {
  "air-jordan-xxxv": {
    name: "Air Jordan XXXV",
    price: 28000,
    discription:
      "The lighter the shoe, the less weight to carry. Evolving last year's release, the Air Jordan XXXV features a stabilizing Eclipse plate 2.0, visible cushioning and new Flightwire cables. Lightweight and responsive, it's designed to help players get the most from their power and athleticism.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a5c0c26d-4597-4d18-9662-f799b43b28a8/air-jordan-xxxv-basketball-shoe-cgVrrs.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/61882fd9-e41b-44a0-8eb3-c17dfc49c521/air-jordan-xxxv-basketball-shoe-cgVrrs.jpg",
  },
  "nike-air-force-1": {
    name: "Nike Air Force 1",
    price: 12000,
    discription:
      "The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-mens-shoe-xDpsTk.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/354e209b-f9f2-42c4-9130-d57f49bd77c0/air-force-1-07-mens-shoe-xDpsTk.jpg",
  },
  "nike-react-infinity-run-flyknit-2": {
    name: "Nike React Infinity Run Flyknit 2",
    price: 32000,
    discription:
      "The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed upper uses Flywire technology that combines with Flyknit for support and breathability where you need it. The high foam heights provide soft responsiveness and long-lasting comfort. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement.",
    img:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d7a05207-a1a1-4c53-a31b-2b2b8883cc35/react-infinity-run-flyknit-2-mens-running-shoe-8XGSrl.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/130068f5-3a7b-4d82-bc64-c775a6ee49a0/react-infinity-run-flyknit-2-mens-running-shoe-8XGSrl.jpg",
  },
  "nike-air-zoom-superrep-2": {
    name: "Nike Air Zoom SuperRep 2",
    price: 19000,
    discription:
      "The Nike Air Zoom SuperRep 2 is designed for circuit training, HIIT, sprints and other fast-paced exercise. Layers of support team up with Zoom Air cushioning to keep your foot locked in and comfortable as you lunge, jump and push your way through every rep. A roomier design around the toes lets you get the perfect fit.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6a63bf13-d648-4da1-9cf8-652fdb73a0d7/air-zoom-superrep-2-mens-hiit-class-shoe-v6KQ5j.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d353d43f-4c37-485b-b02f-b688594d57c0/air-zoom-superrep-2-mens-hiit-class-shoe-v6KQ5j.jpg",
  },
  "nike-air-max-270": {
    name: "Nike Air Max 270",
    price: 38000,
    discription:
      "The Nike Air Zoom Tempo NEXT% mixes durability with a design that helps push you toward your personal best. The result is a shoe built like a racer, but made for your everyday training routine.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6530ad18-621c-43ab-9f60-96c685bc693b/air-zoom-tempo-next-mens-running-shoe-Jp0gJk.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0fccdd85-beaf-41c6-b22c-7234cab4b943/air-zoom-tempo-next-mens-running-shoe-Jp0gJk.jpg",
  },
  "nike-air-max-95": {
    name: "Nike Air Max 95",
    price: 30000,
    discription:
      "The Nike Air Max 95 SE merges unbelievable comfort, head turning style and recycled materials. Featuring the rich texture of felt, mesh and synthetic leather, it brings a new construction to classic running DNA. With its perfectly chunky design, soft Air cushioning and Nike Grind rubber outsole, it's a trend-setting statement. This product is made from at least 20% recycled content by weight.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aa5e9c67-72fd-457c-95bf-1cf1323d15c6/air-max-95-mens-shoe-gHjGdd.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/77167ea6-cc9f-4b30-9fd0-54bfae44cce7/air-max-95-mens-shoe-gHjGdd.jpg",
  },
};
