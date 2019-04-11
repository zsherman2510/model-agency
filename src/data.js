import photographer from "./components/imagecompressor/photographer-min.jpg";
import photographertwo from "./components/imagecompressor/photographer2-min.jpg";
import photographerthree from "./components/imagecompressor/photographer3-min.jpg";
import model from "./components/imagecompressor/female-model-min.jpg";
import modeltwo from "./components/imagecompressor/female-model2-min.jpg";
import modelthree from "./components/imagecompressor/female-model3-min.jpg";
import malemodel from "./components/imagecompressor/male-model-min.jpg";
import personality from "./components/imagecompressor/personality-min.jpg";
import personalitytwo from "./components/imagecompressor/personality2-min.jpg";
import stylist from "./components/imagecompressor/stylist-min.jpg";
import stylisttwo from "./components/imagecompressor/stylist2-min.jpg";

let data = {
  photographers: [
    {
      id: 1,
      name: "Marie H Rainville",
      category: "Talent",
      title: "Photographer",
      img: { photographer }
    },
    {
      id: 2,
      name: "Ben Rochette",
      category: "Talent",
      title: "Photographer",
      img: { photographertwo }
    },
    {
      id: 3,
      name: "Caroline Cote",
      category: "Talent",
      title: "Photographer",
      img: { photographerthree }
    }
  ],
  personality: [
    {
      id: 4,
      name: "Heidi Small",
      category: "Talent",
      title: "Personality",
      img: { personality }
    },
    {
      id: 5,
      name: "Kimberly Lallouz",
      category: "Talent",
      title: "Personality",
      img: { personalitytwo }
    },
    {
      id: 6,
      name: "Tatiana Cinquino",
      category: "Talent",
      title: "Personality",
      img: ""
    }
  ],
  models: [
    {
      id: 7,
      name: "Randy Smith",
      category: "Talent",
      title: "Model",
      img: { model }
    },
    {
      id: 8,
      name: "Heidi Small",
      category: "Talent",
      title: "Model",
      img: { modeltwo }
    },
    {
      id: 9,
      name: "Marie H Rainville",
      category: "Talent",
      title: "Model",
      img: { modelthree }
    },
    {
      id: 10,
      name: "Ben Rochette",
      category: "Talent",
      title: "Model",
      img: { malemodel }
    }
  ],
  stylist: [
    {
      id: 11,
      name: "Caroline Cote",
      category: "Talent",
      title: "Stylist",
      img: { stylist }
    },
    {
      id: 12,
      name: "Heidi Small",
      category: "Talent",
      title: "Stylist",
      img: { stylisttwo }
    }
  ],

  contact: {
    address: "355 Guy Street, Los Angeles, CA",
    email: "INFO@EXECUTEMGMT.COM",
    number: "514.504.8400"
  }
};
export default data;
