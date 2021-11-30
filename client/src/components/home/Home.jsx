import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Navber from "./NavBar";
import Banner from "./Banner";
import MidSection from "./MidSection";
import Slide from "./Slide";
import MidSlide from "./MidSlide";

import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";

const products0 = [
  {
    id: "product1",
    url: "https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    title: {
      shortTitle: "Home & Kitchen",
      longTitle: "Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)",
    },
    price: {
      mrp: 1195,
      cost: 625,
      discount: "47%",
    },
    quantity: 1,
    description:
      "This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product2",
    url: "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    title: {
      shortTitle: "Sandwich Makers",
      longTitle: "Flipkart SmartBuy Sandwich 01 Grill  (Black)",
    },
    price: {
      mrp: 1499,
      cost: 899,
      discount: "40%",
    },
    quantity: 1,
    description:
      "This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better",
    discount: "From 99+5% Off",
    tagline: "Pestige, Nova & more",
  },
  {
    id: "product3",
    url: "https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    title: {
      shortTitle: "Fitness Gear",
      longTitle:
        "AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)",
    },
    price: {
      mrp: 499,
      cost: 166,
      discount: "66%",
    },
    quantity: 1,
    description:
      "This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.",
    discount: "Upto 70% Off",
    tagline: "Deal of the Day",
  },
  {
    id: "product4",
    url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Molife Sense 500 Smartwatch  (Black Strap, Freesize)",
    },
    price: {
      mrp: 6999,
      cost: 4049,
      discount: "42%",
    },
    quantity: 1,
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product5",
    url: "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    title: {
      shortTitle: "Trimmers, Dryers & more",
      longTitle: "Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)",
    },
    price: {
      mrp: 1899,
      cost: 1124,
      discount: "40%",
    },
    quantity: 1,
    description: "",
    discount: "From ₹499",
    tagline: "Kubra, Nova & more",
  },
  {
    id: "product6",
    url: "https://rukminim1.flixcart.com/image/150/150/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70",
    title: {
      shortTitle: "Table Fans",
      longTitle:
        "Portable 300 mm Ultra High Speed 3 Blade Table Fan  (Black, Pack of 1)",
    },
    price: {
      mrp: 2250,
      cost: 1199,
      discount: "46%",
    },
    quantity: 1,
    description:
      'Table Fan. Perfect size fan for use on a table, desk or in an RV. Whisper quiet, powerful airflow and reliable operation in a compact 6" size. Two adjustable speeds to customize airflow: high or low settings. Tough break-resistant ABS plastic blades. ',
    discount: "Minimum 40% Off",
    tagline: "Top Selling",
  },
  {
    id: "product7",
    url: "https://rukminim1.flixcart.com/image/150/150/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70",
    title: {
      shortTitle: "Headphones",
      longTitle:
        "boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset ",
    },
    price: {
      mrp: 2990,
      cost: 1199,
      discount: "59%",
    },
    quantity: 1,
    description:
      "Let music brighten up your mood anytime, anywhere with the boAt 235v2 Fast Charging Bluetooth Headset. This Bluetooth headset features a Call Vibration Alert, a Fast Charging Technology, and Easy Access Controls to listen to and manage your favorite music with ease.",
    discount: "Minimum 50% Off",
    tagline: "Grab Now!",
  },
];

const products1 = [
  {
    id: "product8",
    url: "https://image3.mouthshut.com/images/ImagesR/imageuser_l/2021/10/925640223-9165926-1.jpg?rnd=47977",
    detailUrl:
      "https://image3.mouthshut.com/images/ImagesR/imageuser_l/2021/10/925640223-9165926-1.jpg?rnd=47977",
    title: {
      shortTitle: "Foot Wear",
      longTitle: "Woodland brown leather boots",
    },
    price: {
      mrp: 2000,
      cost: 1800,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Extra comfort shoes with high quality and durability just for you .. Now available",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product9",
    url: "https://image3.mouthshut.com/images/imagesp/926063081s.jpeg",
    detailUrl: "https://image3.mouthshut.com/images/imagesp/926063081s.jpeg",
    title: {
      shortTitle: "LED Smart TV",
      longTitle: "LG 138cm (55) Ultra HD (4K) LED Smart TV (55UK7500PTA)",
    },
    price: {
      mrp: 80000,
      cost: 72000,
      discount: "10%",
    },
    quantity: 1,
    description:
      "1080p LED with extra 10% off discount on your doorway .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product10",
    url: "https://image3.mouthshut.com/images/imagesp/926063082s.jpg",
    detailUrl: "https://image3.mouthshut.com/images/imagesp/926063082s.jpg",
    title: {
      shortTitle: "Camera",
      longTitle: "Canon T70 Film Camera",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Super High Quality images from your own canon Film camera series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product11",
    url: "https://rukminim1.flixcart.com/image/150/150/kq5iykw0/immersion-rod/0/9/i/2000-high-quality-redshell-original-imag48mhg8rynuhy.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/150/150/kq5iykw0/immersion-rod/0/9/i/2000-high-quality-redshell-original-imag48mhg8rynuhy.jpeg?q=70",
    title: {
      shortTitle: "Muffler",
      longTitle: "Broen Solid Men Muffler",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Great Material - Our men winter hat scarf set use dual layers design. Super thick and chunky acrylic knit construction keeps you warm. The soft fleece inner lining has better heat retention, enjoy the maximum warmth. Warm hat scarf set with delicate sewing thread, provide the added durability.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product12",
    url: "https://rukminim1.flixcart.com/image/416/416/ksxjs7k0/blanket/1/y/p/double-jaipuri-razai-rajai-double-bed-cotton-rajasthani-original-imag6dxxqaytt2xe.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/ksxjs7k0/blanket/1/y/p/double-jaipuri-razai-rajai-double-bed-cotton-rajasthani-original-imag6dxxqaytt2xe.jpeg?q=70",
    title: {
      shortTitle: "Blanket",
      longTitle: "kirshinaENTERPRISES Floral Double Quilt  (Polyester, Red)",
    },
    price: {
      mrp: 2000,
      cost: 1800,
      discount: "10%",
    },
    quantity: 1,
    description: "The World Famous Jaipuri Pure Cotton Double Bed Razai",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product13",
    url: "https://rukminim1.flixcart.com/image/714/857/kvpklu80/shoe/v/z/z/11-cu9452-300nike-12-nike-hasta-black-dk-smoke-grey-original-imag8jp2wuq5zzwq.jpeg?q=50",
    detailUrl:
      "https://rukminim1.flixcart.com/image/714/857/kvpklu80/shoe/v/z/z/11-cu9452-300nike-12-nike-hasta-black-dk-smoke-grey-original-imag8jp2wuq5zzwq.jpeg?q=50",
    title: {
      shortTitle: "Shoes",
      longTitle:
        "Nike Air Max Infinity 2 Men's Shoes Running Shoes For Men  (Green)",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description: "Nike high quality shoes .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product14",
    url: "https://rukminim1.flixcart.com/image/714/857/jvb9tow0/pendant-locket/k/k/j/p81142-sukkhi-original-imafg8suupgbah5y.jpeg?q=50",
    detailUrl:
      "https://rukminim1.flixcart.com/image/714/857/jvb9tow0/pendant-locket/k/k/j/p81142-sukkhi-original-imafg8suupgbah5y.jpeg?q=50",
    title: {
      shortTitle: "Scintillare by Sukkhi ",
      longTitle: "Rhodium Crystal Alloy",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: "10%",
    },
    quantity: 1,
    description: "Super High Quality Scintillare by Sukkhi .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
];

const products2 = [
  {
    id: "product15",
    url: "https://rukminim1.flixcart.com/image/416/416/jvmpci80/speaker/home-audio-speaker/w/h/5/sony-sa-d40-original-imaffmj7yuzjzyhg.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/jvmpci80/speaker/home-audio-speaker/w/h/5/sony-sa-d40-original-imaffmj7yuzjzyhg.jpeg?q=70",
    title: {
      shortTitle: "Speaker",
      longTitle:
        "SONY SA-D40 80 W Bluetooth Home Theatre  (Black, 4.1 Channel)",
    },
    price: {
      mrp: 2000,
      cost: 1800,
      discount: "10%",
    },
    quantity: 1,
    description:
      "SONY SA-D40 80 W Bluetooth Home Theatre  (Black, 4.1 Channel)",

    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product16",
    url: "https://rukminim1.flixcart.com/image/416/416/ksez24w0/iron/m/o/n/bajaj-new-light-weight-dx-2-light-weight-bajaj-original-imag5zy8zejzprzg.jpeg?q=70",

    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/ksez24w0/iron/m/o/n/bajaj-new-light-weight-dx-2-light-weight-bajaj-original-imag5zy8zejzprzg.jpeg?q=70",
    title: {
      shortTitle: "Dry Iron",
      longTitle: "BAJAJ DX 2 Light Weight 600 W Dry Iron  (Black)",
    },
    price: {
      mrp: 8000,
      cost: 7200,
      discount: "10%",
    },
    quantity: 1,
    description:
      "If you're a frequent traveller, this compact Bajaj DX 2 dry iron makes a suitable partner for your ironing needs.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product17",
    url: "https://rukminim1.flixcart.com/image/416/416/kk8mcnk0/hair-straightener/y/2/f/new-electronic-ceramic-fast-hair-straightener-portable-mini-hair-original-imafzmpz8khzsh5z.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kk8mcnk0/hair-straightener/y/2/f/new-electronic-ceramic-fast-hair-straightener-portable-mini-hair-original-imafzmpz8khzsh5z.jpeg?q=70",
    title: {
      shortTitle: "Hair Straightener",
      longTitle:
        "VIVNITS New Electronic Ceramic Fast Hair Straightener Portable Mini Hair Flat Iron Wet/Dryer Straightener(Pink) New Electronic Ceramic Fast Hair Straightener Portable Mini Hair Flat Iron Wet/Dryer Straightener(Pink) Hair Straightener  (Pink)",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Everyday can be a good hair day with Un-Tech Flat hair straightener. Feel adorable and style yourself the way you want right at home and get a high shiny hair finish within minutes as it just take less than 60 sec for straightener to heat up. Professional design, the operator feels comfortable and good tight. The flat made with special material, that customer will feel comfortable, not feel been pulled, and make your hair keep shiny. Low Temperature on outside of iron to ensure comfortable straightening.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product18",
    url: "https://rukminim1.flixcart.com/image/416/416/jqv8ia80/mixer-grinder-juicer/w/n/6/butterfly-arrow-original-imafcz43zxwekpzc.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/jqv8ia80/mixer-grinder-juicer/w/n/6/butterfly-arrow-original-imafcz43zxwekpzc.jpeg?q=70",
    title: {
      shortTitle: "Grinder",
      longTitle: "Butterfly Arrow 500 W Mixer Grinder (3 Jars, Grey)      ",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Experience superior grinding performance and convenience with this mixer grinder from Butterfly. You can easily make your favorite health drinks, grind nuts or spices, and make yummy chutneys in its three different stainless steel jars. It has a powerful 500 W motor and its Three-speed Control setting makes blending and grinding extremely easy.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product19",
    url: "https://rukminim1.flixcart.com/image/416/416/kqfj1jk0/trimmer/x/y/m/0-5-20-mm-rmh2016-stainless-steel-corded-cordless-realme-original-imag4g4rhkcvj62f.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kqfj1jk0/trimmer/x/y/m/0-5-20-mm-rmh2016-stainless-steel-corded-cordless-realme-original-imag4g4rhkcvj62f.jpeg?q=70",
    title: {
      shortTitle: "Trimmer",
      longTitle:
        "realme RMH2016 Beard Trimmer Runtime: 120 mins Trimmer for Men  (Black) ",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: "10%",
    },
    quantity: 1,
    description:
      "If you want to maintain a suave image and look presentable, whether it's while attending virtual video calls or a family function, the realme RMH2016 trimmer is sure to be your ideal styling companion. Featuring a self-sharpening stainless steel blade, a 10 mm comb, and 20 length settings, this trimmer helps you maintain a clean-shaven look or a neat beard. To top it off, you can use this trimmer wirelessly for about 120 minutes on a single full charge, thanks to its 800 mAh battery.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product20",
    url: "https://rukminim1.flixcart.com/image/416/416/krs40i80/tripod/tripod/w/h/k/mini-tripod-13-inch-with-remote-indoor-outdoor-and-travel-photo-original-imag5hpmzcwqsbt9.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/krs40i80/tripod/tripod/w/h/k/mini-tripod-13-inch-with-remote-indoor-outdoor-and-travel-photo-original-imag5hpmzcwqsbt9.jpeg?q=70",
    title: {
      shortTitle: "Tripod",
      longTitle:
        "Sulfur Gorilla Tripod/Mini Tripod [10 inch+ 3 inch clip] fully flexible rotatable mobile stand/holder with Remote & clip holder for all Mobile Phone DSLR & Action Cameras/projector Tripod, Tripod Kit, Tripod Bracket  (Black, White, Supports Up to 300 g)",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Here's a tripod that promises enough length, all the features of a pro tripod for vivid angle different angle shooting as it is totally point to point flexible and yet extremely light weight. With a maximum height of 250 cm and a minimum height of 150 cm, a weight under 420 grams, you can carry it with you on your holidays. It comes with universal",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product21",
    url: "https://rukminim1.flixcart.com/image/416/416/krtjgcw0/gaming-accessory-kit/game-kit/5/k/r/pubg-anti-slip-thumb-sleeve-pack-of-4-pair-sky-blue-naksh-original-imag5j9fyt75ff5p.jpeg?q=70",
    detailUrl:"https://rukminim1.flixcart.com/image/416/416/krtjgcw0/gaming-accessory-kit/game-kit/5/k/r/pubg-anti-slip-thumb-sleeve-pack-of-4-pair-sky-blue-naksh-original-imag5j9fyt75ff5p.jpeg?q=70",
    title: {
      shortTitle: "Pubg Anti-Slip",
      longTitle: "naksh collection Pubg Anti-Slip Thumb Sleeve Pack Of 4 Pair Sky Blue Gaming Accessory Kit  (Multicolor, For Android, iOS)      ",
    },
    price: {
      mrp: 100,
      cost: 90,
      discount: "10%",
    },
    quantity: 1,
    description:"Pubg Anti-Slip Thumb Sleeve Pack Of 4 Pair Sky Blue...Buy now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
];

const products3 = [
  {
    id: "product22",
    url:"https://rukminim1.flixcart.com/image/714/857/jvtujrk0/sweater/x/c/g/m-5300633-roadster-original-imafgmp9z8ky9cem.jpeg?q=50",
    detailUrl:"https://rukminim1.flixcart.com/image/714/857/jvtujrk0/sweater/x/c/g/m-5300633-roadster-original-imafgmp9z8ky9cem.jpeg?q=50",
    title: {
      shortTitle: "Sweater",
      longTitle: "Striped Round Neck Casual Men Grey Sweater",
    },
    price: {
      mrp: 2000,
      cost: 1800,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Extra comfort sweater with high quality and durability just for you .. Now available",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product23",
    url: "https://rukminim1.flixcart.com/image/714/857/k01b8280/sweatshirt/b/d/f/l-10218293-here-now-original-imafjrqhsj5kdaa9.jpeg?q=50",
    detailUrl: "https://rukminim1.flixcart.com/image/714/857/k01b8280/sweatshirt/b/d/f/l-10218293-here-now-original-imafjrqhsj5kdaa9.jpeg?q=50",
    title: {
      shortTitle: "Sweatshirt",
      longTitle: "Full Sleeve Solid Men Sweatshirt",
    },
    price: {
      mrp: 8000,
      cost: 7200,
      discount: "10%",
    },
    quantity: 1,
    description:"Sweatshirt 100% origin ................. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product24",
    url: "https://rukminim1.flixcart.com/image/714/857/jtd98y80/jacket/j/v/y/m-7371449-here-now-original-imafeqkrwtcpchmf.jpeg?q=50",
    detailUrl: "https://rukminim1.flixcart.com/image/714/857/jtd98y80/jacket/j/v/y/m-7371449-here-now-original-imafeqkrwtcpchmf.jpeg?q=50",
    title: {
      shortTitle: "Jacket",
      longTitle: "Full Sleeve Washed Men Jacket      ",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Super High Quality Jacket from your own Woodland series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product25",
    url: "https://rukminim1.flixcart.com/image/714/857/k0463rk0/jacket/5/h/t/xl-2237751-here-now-original-imafjxecqdmcmwgy.jpeg?q=50",
    detailUrl: "https://rukminim1.flixcart.com/image/714/857/k0463rk0/jacket/5/h/t/xl-2237751-here-now-original-imafjxecqdmcmwgy.jpeg?q=50",
    title: {
      shortTitle: "Jacket",
      longTitle: "Full Sleeve Solid Men Padded Jacket      ",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
    "Super High Quality Jacket from your own Woodland series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product26",
    url:"https://rukminim1.flixcart.com/image/714/857/kfikya80/sweatshirt/g/z/f/xxl-58351303-puma-original-imafvydrfsrherjb.jpeg?q=50",
    detailUrl: "https://rukminim1.flixcart.com/image/714/857/kfikya80/sweatshirt/g/z/f/xxl-58351303-puma-original-imafvydrfsrherjb.jpeg?q=50",
    title: {
      shortTitle: "Sweatshirt",
      longTitle: "Full Sleeve Printed Men Sweatshirt      ",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
    "Super High Quality SweatShirt from your own Woodland series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product27",
    url:"https://rukminim1.flixcart.com/image/714/857/jn97frk0-1/sweatshirt/d/p/a/m-fmss5140-flying-machine-original-imaf9zphresczrqt.jpeg?q=50",
    detailUrl: "https://rukminim1.flixcart.com/image/714/857/jn97frk0-1/sweatshirt/d/p/a/m-fmss5140-flying-machine-original-imaf9zphresczrqt.jpeg?q=50",
    title: {
      shortTitle: "Sweat shirt",
      longTitle: "Full Sleeve Solid Men Sweatshirt      ",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
    "Super High Quality SweatShirt from your own Woodland series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product28",
    url: "https://rukminim1.flixcart.com/image/714/857/kjiwfbk0-0/sweatshirt/d/5/x/0-6-months-11967102-roadster-original-imafz2rctrdaxvqb.jpeg?q=50",
    detailUrl:"https://rukminim1.flixcart.com/image/714/857/kjiwfbk0-0/sweatshirt/d/5/x/0-6-months-11967102-roadster-original-imafz2rctrdaxvqb.jpeg?q=50",
    title: {
      shortTitle: "Sweatshirt",
      longTitle: "Full Sleeve Printed Men Sweatshirt      ",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
    "Super High Quality SweatShirt from your own Woodland series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
];

const products4 = [
  {
    id: "product29",
    url: "https://rukminim1.flixcart.com/image/880/1056/ji95yfk0/watch/k/k/f/fs5437-fossil-original-imaf63d3hsjzxtbk.jpeg?q=50",
    detailUrl:"https://rukminim1.flixcart.com/image/880/1056/ji95yfk0/watch/k/k/f/fs5437-fossil-original-imaf63d3hsjzxtbk.jpeg?q=50",
    title: {
      shortTitle: "Watch",
      longTitle: "FS5437 44MM TOWNSMAN Analog Watch - For Men      ",
    },
    price: {
      mrp: 20000,
      cost: 18000,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Extra comfort Watch with high quality and durability just for you .. Now available",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product30",
    url:"https://rukminim1.flixcart.com/image/416/416/kjvrdzk0/mobile/k/k/r/iqoo-3-i1927-original-imafzcqszgwhrgvr.jpeg?q=70",
    detailUrl:"https://rukminim1.flixcart.com/image/416/416/kjvrdzk0/mobile/k/k/r/iqoo-3-i1927-original-imafzcqszgwhrgvr.jpeg?q=70", 
    title: {
      shortTitle: "smartphone",
      longTitle: "IQOO 3 (Quantum Silver, 128 GB)  (8 GB RAM)      ",
    },
    price: {
      mrp: 8000,
      cost: 7200,
      discount: "10%",
    },
    quantity: 1,
    description:"Housing a Snapdragon 865 processor, 8 GB of LPDDR5 RAM, and a quad-camera setup, this iQOO smartphone is every gadget freak’s must-have device. This phone features a 16.36-cm (6.44) FHD+ E3 Super AMOLED display, which offers a vivid and lifelike viewing experience. This phone also sports pressure-sensitive Monster Touch buttons, making it perfect for gaming enthusiasts.",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product31",
    url: "https://rukminim1.flixcart.com/image/880/1056/krxtrww0/babydoll/k/s/r/free-bbd-sidecut-1pc-blk-free-fusionvilla-original-imag5m5dvna36tba.jpeg?q=50",
    detailUrl:"https://rukminim1.flixcart.com/image/880/1056/krxtrww0/babydoll/k/s/r/free-bbd-sidecut-1pc-blk-free-fusionvilla-original-imag5m5dvna36tba.jpeg?q=50",
    title: {
      shortTitle: "Women wear",
      longTitle: "Women Nighty Set  (Black)      ",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Super High Quality wear from your own wear series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product32",
    url: "https://rukminim1.flixcart.com/image/880/1056/jur9nrk0/shoe/k/b/a/wonder-1313-7-asian-grey-orange-original-imaffbmzjc5hmagy.jpeg?q=50",
    detailUrl:"https://rukminim1.flixcart.com/image/880/1056/jur9nrk0/shoe/k/b/a/wonder-1313-7-asian-grey-orange-original-imaffbmzjc5hmagy.jpeg?q=50",
    title: {
      shortTitle: "Shoes",
      longTitle: "wndr-13 sports shoes for men | Latest Stylish Casual sport shoes for men |running shoes for boys | Lace up Lightweight grey shoes for running, walking, gym, trekking, hiking & party Running Shoes For Men  (Green, Grey)      ",
    },
    price: {
      mrp: 10000,
      cost: 9000,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Super High Quality shoes from your own A series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product33",
    url: "https://rukminim1.flixcart.com/image/416/416/jyeq64w0/carpet-rug/j/v/z/vintage-409-5ft-1pc-status-original-imafhvjzgycfp6kz.jpeg?q=70",
    detailUrl:"https://rukminim1.flixcart.com/image/416/416/jyeq64w0/carpet-rug/j/v/z/vintage-409-5ft-1pc-status-original-imafhvjzgycfp6kz.jpeg?q=70",
    title: {
      shortTitle: "Carpet",
      longTitle: "STATUS Multicolor Polyester Carpet  (152 cm X 213 cm)      ",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Super High Quality carpet from your A series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product34",
    url: "https://rukminim1.flixcart.com/image/416/416/kqqykcw0/mosquito-net/d/f/q/double-bed-blue-mosquito-net-double-bed-nets-for-size-king-original-imag4zqfsxymszka.jpeg?q=70",
    detailUrl:"https://rukminim1.flixcart.com/image/416/416/kqqykcw0/mosquito-net/d/f/q/double-bed-blue-mosquito-net-double-bed-nets-for-size-king-original-imag4zqfsxymszka.jpeg?q=70",
    title: {
      shortTitle: "Mosqueto net",
      longTitle: "Aetrius Polyester Adults Double Bed King Size Mosquito Net, for Double Bed Macchardani with Colourful Boarder(Colour-Blue) Mosquito Net  (Blue, White)      ",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Super High Quality net from your own series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
  {
    id: "product35",
    url: "https://rukminim1.flixcart.com/image/880/1056/kdnf98w0-0/bra/1/g/s/heavily-padded-34b-yes-multiway-regular-3091-prettycat-original-imafug8cedzaa2hg.jpeg?q=50",
    detailUrl: "https://rukminim1.flixcart.com/image/880/1056/kdnf98w0-0/bra/1/g/s/heavily-padded-34b-yes-multiway-regular-3091-prettycat-original-imafug8cedzaa2hg.jpeg?q=50",
    title: {
      shortTitle: "Bra",
      longTitle: "Women Push-up Heavily Padded Bra  (Light Blue)      ",
    },
    price: {
      mrp: 1000,
      cost: 900,
      discount: "10%",
    },
    quantity: 1,
    description:
      "Super High Quality Bras from your own A series .. Order now",
    discount: "Extra 10% Off",
    tagline: "Deal of the day",
  },
];

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

const Home = () => {
  const classes = useStyle();
  const { products } = useSelector((state) => state.getProducts); // this is getProducts function of productActions.js   This can be accessed directly using state

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts()); //this is also getProducts function of productActions.js     It is being imported as listProducts to avoid clash between above getProducts function
  }, [dispatch]);
  return (
    <>
      <Navber />
      <Box className={classes.component}>
        <Banner />
        <MidSlide products={products0} />
        <MidSection />
        <Slide
          data={products1}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products2}
          title="Electronics"
          timer={false}
          multi={true}
        />
        <Slide
          data={products3}
          title="Top Deals On Fashion"
          timer={false}
          multi={true}
        />
        <Slide
          data={products4}
          title="Most Searched"
          timer={false}
          multi={true}
        />
      </Box>
    </>
  );
};

export default Home;
