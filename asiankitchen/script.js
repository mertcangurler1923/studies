const menü = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenü.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
      const buttonsDiv =  document.querySelector(".btn-container");
      const buttonAll =  document.querySelector(".all");
      const buttonKorea =  document.querySelector(".korea");
      const buttonJapan =  document.querySelector(".japan");
      const buttonChina =  document.querySelector(".china");
      const section = document.querySelector(".section-center");
      const menüDiv = document.querySelector(".section-center");

      function toTitleCase(metin) {
        metin=metin.charAt(0).toLowerCase() + metin.slice(1)
        return metin.charAt(0).toUpperCase() + metin.slice(1);
      }
      
      function buttonMenüValue(buttonValue){
        menüDiv.innerHTML = '';
        let createMenü = menü.map(item => {
          let value=`
            <div class="card bg-light text-white photo">
                <img src="${item.img}" class="img-fluid rounded-start" style="height:400px" ">
                <div class="card-img-overlay">
                    <h5 class="card-title"> ${item.title} </h5>
                    <p class="card-text"> ${item.desc} </p>
                      <div class="badge bg-primary text-wrap" style="width: 6rem;">
                          ${item.price}
                      </div>
                </div>
            </div> 
            `
          if ('all'===buttonValue || item.category.toLowerCase()===buttonValue.toLowerCase()){
            return menüDiv.innerHTML+=value;   
          }
        })
      }
      let createButton = value => {
        const listItem=document.createElement("BUTTON");
        listItem.classList.add("btn-item","btn-light","btn-outline-info");
        listItem.type="button"
        listItem.id=value.toLowerCase();
        listItem.textContent=toTitleCase(value);
        buttonsDiv.appendChild(listItem);
        listItem.addEventListener("click", function () {
          buttonMenüValue(value.toLowerCase());
        });
    }

      document.addEventListener("DOMContentLoaded",function(){
        createButton('all'),
        createButton('korea'),
        createButton('japan'),
        createButton('china'),
        buttonMenüValue('all')
      });
     

      
           
      

