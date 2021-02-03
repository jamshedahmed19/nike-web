import React from "react";
import "../Assets/Style.css";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <br />
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <h1>Explore</h1>
          <br />
          <div className="cards-list">
            {Object.entries(categories).map(([slug, { name, cover_img }]) => (
              <Grid item xs={4}>
                <div className="card" key={slug}>
                  <Link to={`/${slug}`}>
                    <img src={cover_img} alt={name} />
                    <h3>{name}</h3>
                  </Link>
                </div>
              </Grid>
            ))}
          </div>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
}

export default Home;

const categories = {
  women: {
    name: "Women",
    cover_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b5c22310-1576-4f2c-9a17-a4627c26dced/yoga-luxe-womens-fleece-v-neck-top-t42Qvv.jpg",
  },
  men: {
    name: "Men",
    cover_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2d3d061a-058b-4dc6-9d70-a4e3c061306f/standard-issue-mens-basketball-crew-0s90Qv.jpg",
  },
  kids: {
    name: "Kids",
    cover_img:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e448f00a-a1ff-4752-827f-13501c98b1e3/little-kids-t-shirt-Hk5j0c.jpg",
  },
};
