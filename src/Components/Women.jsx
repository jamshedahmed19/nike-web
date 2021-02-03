import React from "react";
import { Grid } from "@material-ui/core";
import { Outlet, useParams, Link } from "react-router-dom";
import "../Assets/Style.css";

function Women() {
  return (
    <>
      <br />
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <h1>Women</h1>
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

export default Women;

export function WomenShoe() {
  return (
    <div className="cards-list">
      {Object.entries(women).map(([slug, { name, img, price }]) => (
        <Grid item xs={4}>
          <div className="card" key={slug}>
            <Link to={`/women/${slug}`}>
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

export function WomenShoeDetail() {
  const { slug } = useParams();
  const shoe = women[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img, price, discription, side_img } = shoe;

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

const women = {
  "nike-react-phantom-run-flyknit-2": {
    name: "Nike React Phantom Run Flyknit 2",
    price: 24500,
    discription:
      "The Nike React Phantom Run Flyknit 2 gets into the groove with a tie-dye print and fun colors. The shoe expands on its laceless design by adding secure comfort that feels like it disappears on your foot. More foam means better cushioning, keeping you comfortable as you run.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9c660ee8-2ada-4f47-9ba0-557470624e03/react-phantom-run-flyknit-2-womens-running-shoe-CcWDJB.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ef7deb28-0514-467e-8a10-6f63ca522d06/react-phantom-run-flyknit-2-womens-running-shoe-CcWDJB.jpg",
  },
  "nike-air-zoom-superRep-2": {
    name: "Nike Air Zoom SuperRep 2",
    price: 16000,
    discription:
      "The Nike Air Zoom SuperRep 2 is designed for circuit training, HIIT and other fast-paced exercise. Layers of support team up with Zoom Air cushioning to keep your foot locked in and comfortable as you lunge, jump and push your way through every rep.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/30e468c1-ebc8-4978-86c1-160a37fc36ff/air-zoom-superrep-2-womens-hiit-class-shoe-l2XV7P.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6665ed52-f768-49da-80fd-41ecb074c6ec/air-zoom-superrep-2-womens-hiit-class-shoe-l2XV7P.jpg",
  },
  "nike-react-escape-run": {
    name: "Nike React Escape Run",
    price: 16000,
    discription:
      "Run the streets in the Nike React Escape Run. Designed and tailored for women, it features a wider collar and embroidered details. Cushioned foam provides a soft, responsive feel on the go. Escape the daily routine and reconnect with yourself through your miles.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b1b96665-e3b2-4d18-879e-fa8feaa727de/react-escape-run-womens-running-shoe-HD16vQ.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3fb4da75-0ed4-43e2-bf73-e463451b4ade/react-escape-run-womens-running-shoe-HD16vQ.jpg",
  },
  "nike-air-max-90": {
    name: "Nike Air Max 90",
    price: 22000,
    discription:
      "Can you dig it? The Nike Air Max 90 brings the bling to your feet with a metallic chain and bold colors. The legend stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic plastic details for style that never sleeps.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5d057302-62d3-4e09-8948-dfe04e1dd71b/air-max-90-womens-shoe-g5nqKN.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8f0be849-ed6d-427e-98b6-43af515610d1/air-max-90-womens-shoe-g5nqKN.jpg",
  },
  "nike-air-max-270": {
    name: "Nike Air Max 270",
    price: 26000,
    discription:
      "Nike's first lifestyle Air Max meets the soft, smooth and resilient React foam in the Nike Air Max 270 React. The design draws inspiration from the Air Max pantheon, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3fb9d240-9716-4fab-bb6b-e997e5ef3b83/air-max-270-react-womens-shoe-trW1vK.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b8716ea5-a9a0-4a15-bc3d-3b377d06d683/air-max-270-react-womens-shoe-trW1vK.jpg",
  },
  "nike-air-max-up": {
    name: "Nike Air Max Up",
    price: 22000,
    discription:
      "Designed specifically for a woman's foot, the Nike Air Max Up takes the lifted aesthetic of the Dia and adds a larger, more dynamic Air unit that's framed with TPU accents. The slim proportion and extended heel combine with flashes of bold colors for a revolutionary look and feel. Go ahead. Break boundaries.",
    img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c2e52d30-b1a8-4b6e-b8d7-132d9ada2d12/air-max-up-womens-shoe-bL7qtj.jpg",
    side_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b6025ca3-825f-4b70-b7a6-d891afb18614/air-max-up-womens-shoe-bL7qtj.jpg",
  },
};
