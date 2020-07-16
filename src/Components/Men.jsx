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
      {Object.entries(shoes).map(([slug, { name, img, price }]) => (
        <Grid item xs={4}>
          <div className="card" key={slug}>
            <Link to={`/men/${slug}`}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <h4>Rs. {price}</h4>
            </Link>
          </div>
        </Grid>
      ))}
    </div>
  );
}

export function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    price: 1200,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    price: 1200,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    price: 1200,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-3-valor-blue2": {
    name: "VALOUR BLUE",
    price: 1200,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london2": {
    name: "JORDAN MARS 270 LONDON",
    price: 1200,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue2": {
    name: "RACER BLUE",
    price: 1200,
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};
