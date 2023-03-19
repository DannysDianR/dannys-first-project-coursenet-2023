import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Home = () => {
  const [skins, setSkins] = useState([]);
  const URL = "http://localhost:3000/api";

  const getSkins = async () => {
    try {
      let resSkins = await axios({
        url: `${URL}/skins`,
        method: "GET",
      });
      console.log(resSkins.data);
      setSkins(resSkins.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    console.log("Testo");
    getSkins();
  }, []);

  return (
    <div>
      {/* <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
      <h1>Test</h1>
    </div>
  );
};

export default Home;
