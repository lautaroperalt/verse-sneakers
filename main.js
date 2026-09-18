// BASE DE DATOS COMPLETA (103 Modelos)
// BASE DE DATOS COMPLETA (103 Modelos)
const products = [
    // --- MODELOS ANTERIORES ---
    { id: 1, name: "Adidas Forum Bad Bunny Marrón", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/c3hoWYJ.jpeg", images: ["https://i.imgur.com/c3hoWYJ.jpeg", "https://i.imgur.com/lpdhO9w.jpeg", "https://i.imgur.com/0Vnzut0.png"] },
    { id: 2, name: "Adidas Forum Bad Bunny Blanca", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/6FWGPln.png", images: ["https://i.imgur.com/6FWGPln.png", "https://i.imgur.com/8dl31cd.png"] },
    { id: 3, name: "Adidas Forum Bad Bunny Gris", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/dR8fm3L.png", images: ["https://i.imgur.com/dR8fm3L.png", "https://i.imgur.com/9lENN78.png"] },
    { id: 4, name: "Adidas Forum Bad Bunny Negra", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/muJ4v82.png", images: ["https://i.imgur.com/muJ4v82.png"] },
    { id: 5, name: "Adidas Forum Bad Bunny Rosa", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/gCq8kn2.png", images: ["https://i.imgur.com/gCq8kn2.png"] },
    { id: 6, name: "Adidas Forum Bad Bunny Celeste", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/D1jWi9g.png", images: ["https://i.imgur.com/D1jWi9g.png", "https://i.imgur.com/8ZeeZ6W.png"] },
    { id: 7, name: "Adidas Campus Bad Bunny Negra", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/dPN9wXa.png", images: ["https://i.imgur.com/dPN9wXa.png"] },
    { id: 8, name: "Adidas Campus Bad Bunny Blanca", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/F1x5z5X.png", images: ["https://i.imgur.com/F1x5z5X.png"] },
    { id: 9, name: "Adidas Campus Bad Bunny Beige", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/xElQ61H.png", images: ["https://i.imgur.com/xElQ61H.png","https://i.imgur.com/BsqHAME.png"] },
    { id: 10, name: "Adidas Campus All black", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/otK9iKZ.png", images: ["https://i.imgur.com/otK9iKZ.png","https://i.imgur.com/ven8vUG.png"] },
    { id: 11, name: "Adidas Campus Blanca y Negra", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/5KML0o8.png", images: ["https://i.imgur.com/5KML0o8.png","https://i.imgur.com/RdnMpkq.png"] },
    { id: 12, name: "Adidas Campus Beige", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/rtpOQaN.png", images: ["https://i.imgur.com/rtpOQaN.png"] },
    { id: 13, name: "Adidas Campus Gris", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/wQmfYVD.png", images: ["https://i.imgur.com/wQmfYVD.png","https://i.imgur.com/QgpATOc.png"] },
    { id: 14, name: "Adidas Campus Negro y Blanco", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/1Bq0YzM.png", images: ["https://i.imgur.com/1Bq0YzM.png","https://i.imgur.com/IHg2BRm.png"] },
    { id: 15, name: "Adidas Adi2000 All black", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/htpWj9o.png", images: ["https://i.imgur.com/htpWj9o.png","https://i.imgur.com/31O41wR.png","https://i.imgur.com/N6V7qL0.png"] },
    { id: 16, name: "Adidas Adi2000 Negro y Blanco", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/Z82aNa4.png", images: ["https://i.imgur.com/Z82aNa4.png","https://i.imgur.com/RwFwijx.png"] },
    { id: 17, name: "Adidas Adi2000 Gris", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/dmGscmW.png", images: ["https://i.imgur.com/dmGscmW.png","https://i.imgur.com/PfFm4TF.png"] },
    { id: 18, name: "Adidas Adi2000 Beige", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/zXLcyIe.png", images: ["https://i.imgur.com/zXLcyIe.png","https://i.imgur.com/Z9NrK05.png"] },
    { id: 19, name: "Adidas Adi2000 Blanco", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/xVvWbNu.png", images: ["https://i.imgur.com/xVvWbNu.png"] },
    { id: 20, name: "Adidas Adi2000 Blanca y Beige", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/mCWvnl5.png", images: ["https://i.imgur.com/mCWvnl5.png", "https://i.imgur.com/oZUPoUq.png"] },
    { id: 21, name: "Adidas Samba Blanca", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/LRkdTLY.png", images: ["https://i.imgur.com/LRkdTLY.png"] },
    { id: 22, name: "Adidas Samba Negra", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/7CQ1BBD.png", images: ["https://i.imgur.com/7CQ1BBD.png","https://i.imgur.com/rx6W8Kc.png"] },
    { id: 23, name: "Ojota Adidas Negra", brand: "Adidas", retail: "$40.000", wholesale: "$30.000", img: "https://i.imgur.com/2074Jc8.png", images: ["https://i.imgur.com/2074Jc8.png","https://i.imgur.com/TvEH8IL.png"] },
    { id: 24, name: "Ojota Adidas Verde", brand: "Adidas", retail: "$40.000", wholesale: "$30.000", img: "https://i.imgur.com/FLONsut.png", images: ["https://i.imgur.com/FLONsut.png","https://i.imgur.com/VajwLx7.png"] },
    { id: 25, name: "Ojota Adidas Beige", brand: "Adidas", retail: "$40.000", wholesale: "$30.000", img: "https://i.imgur.com/gixhnIF.png", images: ["https://i.imgur.com/gixhnIF.png"] },
    { id: 26, name: "Vans Knu Skool All black", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/pbCm0xR.png", images: ["https://i.imgur.com/pbCm0xR.png","https://i.imgur.com/Ia3HV97.png","https://i.imgur.com/6RFad32.png"] },
    { id: 27, name: "Vans Knu Skool Blancas", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/v43yF3M.png", images: ["https://i.imgur.com/v43yF3M.png","https://i.imgur.com/TIs0icM.png"] },
    { id: 28, name: "Vans Knu Skool Negro y blanco", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/27oJGey.png", images: ["https://i.imgur.com/27oJGey.png","https://i.imgur.com/dAgYDgp.png"] },
    { id: 29, name: "Vans Knu Skool Negro y azul", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/J0t3Rq2.png", images: ["https://i.imgur.com/J0t3Rq2.png","https://i.imgur.com/u9J8aZE.png"] },
    { id: 30, name: "Vans Knu Skool Beige", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/TdSAKkG.png", images: ["https://i.imgur.com/TdSAKkG.png"] },
    { id: 31, name: "Vans Upland Negra", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/e4A0qLz.png", images: ["https://i.imgur.com/e4A0qLz.png"] },
    { id: 32, name: "Vans Upland Negra y Blanca", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/BFGkFWK.png", images: ["https://i.imgur.com/BFGkFWK.png"] },
    { id: 33, name: "Vans Upland Blanca", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/PcjVhhe.png", images: ["https://i.imgur.com/PcjVhhe.png"] },
    { id: 34, name: "Vans Hylane Marron", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/dGmumDa.png", images: ["https://i.imgur.com/dGmumDa.png","https://i.imgur.com/7JT2YHF.png"] },
    { id: 35, name: "Vans Hylane Negra", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/0YSalqT.png", images: ["https://i.imgur.com/0YSalqT.png"] },
    { id: 36, name: "Vans Hylane Negra y Gris", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/cqr6ZEn.png", images: ["https://i.imgur.com/cqr6ZEn.png"] },
    { id: 37, name: "Vans Hylane Azul", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/Cj6LBW6.png", images: ["https://i.imgur.com/Cj6LBW6.png","https://i.imgur.com/sx3KH6a.png"] },
    { id: 38, name: "Vans Hylane Blanca", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/sBsoOU6.png", images: ["https://i.imgur.com/sBsoOU6.png","https://i.imgur.com/lUANMye.png"] },
    { id: 39, name: "Puma Suede XL Blanco y Negro", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/xe36KJi.png", images: ["https://i.imgur.com/xe36KJi.png","https://i.imgur.com/oAgqWXq.png"] },
    { id: 40, name: "Puma Suede XL Negra", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/FJ90M0F.png", images: ["https://i.imgur.com/THbx9X0.png"] },
    { id: 41, name: "Puma 180 Beige", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/wSMfncK.png", images: ["https://i.imgur.com/wSMfncK.png","https://i.imgur.com/pilsEGJ.png"] },
    { id: 42, name: "Puma 180 Negra y Blanca", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/dTF2YZW.png", images: ["https://i.imgur.com/dTF2YZW.png","https://i.imgur.com/F24K505.png"] },
    { id: 43, name: "Puma 180 Negra", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/oXXHTAN.png", images: ["https://i.imgur.com/oXXHTAN.png","https://i.imgur.com/ZAjUEH2.png"] },
    { id: 44, name: "NB 9060 Negra y Blanca", brand: "NB", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/NXAGVZR.png", images: ["https://i.imgur.com/NXAGVZR.png","https://i.imgur.com/ZNteg39.png"] },
    { id: 45, name: "NB 9060 Blanca", brand: "NB", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/toGaINQ.png", images: ["https://i.imgur.com/toGaINQ.png","https://i.imgur.com/1NgxIqF.png"] },
    { id: 46, name: "NB 530 Blanca", brand: "NB", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/6OO32oX.png", images: ["https://i.imgur.com/6OO32oX.png"] },
    { id: 47, name: "NB 530 Negra", brand: "NB", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/xjFIiXM.png", images: ["https://i.imgur.com/xjFIiXM.png"] },
    { id: 48, name: "NB 530 Beige", brand: "NB", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/eZwfvRc.png", images: ["https://i.imgur.com/eZwfvRc.png"] },
    { id: 49, name: "Nike Dunk Low Bordo", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/yx7VOKJ.png", images: ["https://i.imgur.com/yx7VOKJ.png","https://i.imgur.com/ffk4Twe.png","https://i.imgur.com/15Zw5MX.png"] },
    { id: 50, name: "Nike Dunk Low Panda", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/ajvigQY.png", images: ["https://i.imgur.com/ajvigQY.png","https://i.imgur.com/heA6Os5.png"] },
    { id: 51, name: "Nike Dunk Low Gris", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/6WtePzs.png", images: ["https://i.imgur.com/6WtePzs.png","https://i.imgur.com/JHgVKrs.png"] },
    { id: 52, name: "Nike Dunk Low Azul", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/Rk16FQd.png", images: ["https://i.imgur.com/Rk16FQd.png","https://i.imgur.com/oIDootL.png"] },
    { id: 53, name: "Nike Dunk Low Verde", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/SXSTkbI.png", images: ["https://i.imgur.com/SXSTkbI.png","https://i.imgur.com/NDM3PzA.png"] },
    { id: 54, name: "Nike Dunk Low Blanca", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/E3MYjqJ.png", images: ["https://i.imgur.com/E3MYjqJ.png","https://i.imgur.com/lkSJNnR.png"] },
    { id: 55, name: "Nike Jordan Retro 4 All black", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/1yDf20r.png", images: ["https://i.imgur.com/1yDf20r.png","https://i.imgur.com/Zz1HfPD.png","https://i.imgur.com/JPVWefD.png","https://i.imgur.com/QrThW9w.png"] },
    { id: 56, name: "Nike Jordan Retro 4 Beige", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/yTJardB.png", images: ["https://i.imgur.com/yTJardB.png"] },
    { id: 57, name: "Nike TravisScott All black", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/seYg4LC.png", images: ["https://i.imgur.com/seYg4LC.png","https://i.imgur.com/Ae8UMYG.png"] },
    { id: 58, name: "Nike Jordan 1 mid Gris", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/fI70U7O.png", images: ["https://i.imgur.com/fI70U7O.png","https://i.imgur.com/BA9Grjj.png"] },
    { id: 59, name: "Nike Jordan 1 mid Negra y Rojo", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/Z4Fr94G.png", images: ["https://i.imgur.com/Z4Fr94G.png","https://i.imgur.com/SwLtc9y.png"] },
    { id: 60, name: "Nike Jordan 1 mid Negra", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/mHyLuk0.png", images: ["https://i.imgur.com/mHyLuk0.png","https://i.imgur.com/suVIdGD.png"] },
    { id: 61, name: "Nike Jordan 1 mid Rosa", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/SrYlKFY.png", images: ["https://i.imgur.com/SrYlKFY.png","https://i.imgur.com/xbXqHiy.png"] },
    { id: 62, name: "Ojotas Nike Negras", brand: "Nike", retail: "$40.000", wholesale: "$30.000", img: "https://i.imgur.com/zzYhV89.png", images: ["https://i.imgur.com/zzYhV89.png","https://i.imgur.com/jVIqhf8.png"] },
    { id: 63, name: "DC Court Graffik Negra y Blanco", brand: "DC", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/OKrnrg2.png", images: ["https://i.imgur.com/OKrnrg2.png","https://i.imgur.com/THk3NFo.png"] },
    { id: 64, name: "DC Court Graffik Negra", brand: "DC", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/7vSCFI2.png", images: ["https://i.imgur.com/7vSCFI2.png"] },

    // --- MODELOS NUEVOS AGREGADOS (FOTOS CORREGIDAS) ---
    { id: 65, name: "Vans Knu Skool Retro Brown", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/HVvgdKGN/image22.png", images: ["https://i.postimg.cc/HVvgdKGN/image22.png"] },
    { id: 66, name: "Vans Knu Skool Olive", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/RNZmrmYH/image6.png", images: ["https://i.postimg.cc/RNZmrmYH/image6.png"] },
    { id: 67, name: "Vans Knu Skool Mega Check Black", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/SJx404P5/image16.png", images: ["https://i.postimg.cc/SJx404P5/image16.png", "https://i.postimg.cc/PPVjTcGS/image19.png"] },
    { id: 68, name: "Vans Knu Skool Negro y Marrón", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/fJRs4sPC/image12.png", images: ["https://i.postimg.cc/fJRs4sPC/image12.png"] },
    { id: 69, name: "Vans Knu Skool Grey", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/0bXsP3R5/image30.png", images: ["https://i.postimg.cc/0bXsP3R5/image30.png"] },
    { id: 70, name: "Vans Knu Skool Beige", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/1f7QsThz/image31.png", images: ["https://i.postimg.cc/1f7QsThz/image31.png"] },
    { id: 71, name: "Campus 00s Blancas y Negras", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/3kyHRBY0/image42.png", images: ["https://i.postimg.cc/3kyHRBY0/image42.png"] },
    { id: 72, name: "Campus 00s Camel y Negra", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/87FV5HN7/image40.png", images: ["https://i.postimg.cc/87FV5HN7/image40.png"] },
    { id: 73, name: "Campus 00s Negra Linea Blanca", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/7ftkwcvs/image20.png", images: ["https://i.postimg.cc/7ftkwcvs/image20.png"] },
    { id: 74, name: "Campus 00s Celeste", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/RNpB48rX/image18.png", images: ["https://i.postimg.cc/RNpB48rX/image18.png"] },
    { id: 75, name: "Campus 00s Gris Oscuro Linea Negra", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/MvpwkwLB/image7.png", images: ["https://i.postimg.cc/MvpwkwLB/image7.png"] },
    { id: 76, name: "Campus 00s KoYan", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/Tp3x8xsC/image13.png", images: ["https://i.postimg.cc/Tp3x8xsC/image13.png", "https://i.postimg.cc/Wh1VRVyf/image15.png"] },
    { id: 77, name: "Campus 00s Verde Manzana", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/F7C4Nqt8/image23.png", images: ["https://i.postimg.cc/F7C4Nqt8/image23.png"] },
    { id: 78, name: "Forum Blanca y Verde Agua", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/pm9tTZRH/image34.png", images: ["https://i.postimg.cc/pm9tTZRH/image34.png"] },
    { id: 79, name: "Forum Negra Linea Blanca", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/rDdLmJMF/image36.png", images: ["https://i.postimg.cc/rDdLmJMF/image36.png"] },
    { id: 80, name: "Forum Blanco y Gris", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/DSWKZgnZ/image39.png", images: ["https://i.postimg.cc/DSWKZgnZ/image39.png"] },
    { id: 81, name: "Forum Blanca y Roja", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/nChx8xWC/image5.png", images: ["https://i.postimg.cc/nChx8xWC/image5.png"] },
    { id: 82, name: "Forum Blanco y Azul", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/fJRs4sPV/image2.png", images: ["https://i.postimg.cc/fJRs4sPV/image2.png"] },
    { id: 83, name: "Forum Blanca y Negra", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/w3VzbMwD/image3.png", images: ["https://i.postimg.cc/w3VzbMwD/image3.png"] },
    { id: 84, name: "Samba Blanca y Negra", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/bsVhpMX4/image24.png", images: ["https://i.postimg.cc/bsVhpMX4/image24.png"] },
    { id: 85, name: "Samba Blanca y Verde", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/LnQp27Kp/image27.png", images: ["https://i.postimg.cc/LnQp27Kp/image27.png"] },
    { id: 86, name: "Jordan Retro 4 Negras y Celeste", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/mtg4x4nC/image8.png", images: ["https://i.postimg.cc/mtg4x4nC/image8.png"] },
    { id: 87, name: "Jordan Retro 4 Negras Tornasolado", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/NKywM4Bw/image32.png", images: ["https://i.postimg.cc/NKywM4Bw/image32.png"] },
    { id: 88, name: "Jordan Retro 4 Blancas", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/ZW9hRc4Y/image37.png", images: ["https://i.postimg.cc/ZW9hRc4Y/image37.png"] },
    { id: 89, name: "Jordan Retro 4 Gris", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/Ln8SdSWt/image10.png", images: ["https://i.postimg.cc/Ln8SdSWt/image10.png"] },
    { id: 90, name: "Puma Suede Gris", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/xc1QrQZK/image9.png", images: ["https://i.postimg.cc/xc1QrQZK/image9.png"] },
    { id: 91, name: "Puma Suede Verde Oliva", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/0rfvHjVQ/image1.png", images: ["https://i.postimg.cc/0rfvHjVQ/image1.png"] },
    { id: 92, name: "Puma Suede Beige", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/YhDHMVKc/image26.png", images: ["https://i.postimg.cc/YhDHMVKc/image26.png"] },
    { id: 93, name: "Puma Suede Negra y Beige", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/HVvgdKGv/image21.png", images: ["https://i.postimg.cc/HVvgdKGv/image21.png"] },
    { id: 94, name: "Puma Suede XL Azul", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/dLVFMFf9/image11.png", images: ["https://i.postimg.cc/dLVFMFf9/image11.png", "https://i.postimg.cc/TpN6fSMf/image28.png"] },
    { id: 95, name: "Puma Suede XL Verde Oliva", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/21qf6wrk/image35.png", images: ["https://i.postimg.cc/21qf6wrk/image35.png"] },
    { id: 96, name: "Puma Suede XL Beige", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/KRp2xVSZ/image29.png", images: ["https://i.postimg.cc/KRp2xVSZ/image29.png"] },
    { id: 97, name: "Puma Suede XL Gris y Blanco", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/svgzFzLK/image14.png", images: ["https://i.postimg.cc/svgzFzLK/image14.png"] },
    { id: 98, name: "Puma Suede XL Rojo", brand: "Puma", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/Mnc8TDqp/image38.png", images: ["https://i.postimg.cc/Mnc8TDqp/image38.png"] },
    { id: 99, name: "Campus Bad Bunny Celeste", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/SnXpsrkm/image33.png", images: ["https://i.postimg.cc/SnXpsrkm/image33.png"] },
    { id: 100, name: "Campus Bad Bunny Beige", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/ykpHs54K/image25.png", images: ["https://i.postimg.cc/ykpHs54K/image25.png"] },
    { id: 101, name: "Campus Bad Bunny Blanco", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/dDBFS35d/image4.png", images: ["https://i.postimg.cc/dDBFS35d/image4.png"] },
    { id: 102, name: "Campus Bad Bunny Negra", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/rKZkMb6g/image17.png", images: ["https://i.postimg.cc/rKZkMb6g/image17.png"] },
    { id: 103, name: "New Balance 9060 Crema", brand: "NB", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/5XHM03bY/image41.png", images: ["https://i.postimg.cc/5XHM03bY/image41.png"] }
];


// --- LÓGICA DE INTERFAZ ---
const productGrid = document.getElementById('productGrid');
const infoGrid = document.getElementById('infoGrid');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filtersContainer');
const btnInfo = document.getElementById('btnInfo');
let currentProduct = null;

// Renderizar Productos
function displayProducts(items) {
    productGrid.innerHTML = ''; 

    if (items.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-search"></i>
                <h4 class="text-white fw-bold">No encontramos modelos</h4>
                <p>Intenta buscar con otra palabra clave o marca.</p>
            </div>
        `;
        return;
    }

    items.forEach((item, index) => {
        const cardHTML = `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="product-card" id="card-${item.id}">
                    <div class="card-img-container">
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <div class="brand-tag">${item.brand}</div>
                        <h5 class="product-title">${item.name}</h5>
                        <div class="mt-auto-card">
                            <div class="price-row">
                                <div class="price-col border-end pe-2 me-2 border-secondary">
                                    <span class="price-label">Unitario</span>
                                    <span class="price-val price-retail">${item.retail}</span>
                                </div>
                                <div class="price-col">
                                    <span class="price-label text-success">Mayor</span>
                                    <span class="price-val price-wholesale">${item.wholesale}</span>
                                </div>
                            </div>
                            <button class="btn-view" onclick="openModal(${item.id})">
                                Ver <i class="bi bi-eye-fill ms-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', cardHTML);

        setTimeout(() => {
            const el = document.getElementById(`card-${item.id}`);
            if (el) el.classList.add('show');
        }, index * 30); 
    });
}

// Filtros y Botón de Información
filterContainer.addEventListener('click', (e) => {
    // Si toca cualquier botón de filtro que NO sea el de Info
    if(e.target.classList.contains('btn-filter') && e.target.id !== 'btnInfo') {
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Mostramos catálogo, ocultamos info
        infoGrid.classList.add('d-none');
        productGrid.classList.remove('d-none');
        
        searchInput.value = '';
        const category = e.target.getAttribute('data-filter');
        const filtered = category === 'all' ? products : products.filter(p => p.brand === category);
        displayProducts(filtered);
    }
});

// Evento exclusivo para el botón de INFO
btnInfo.addEventListener('click', () => {
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    btnInfo.classList.add('active');
    
    // Ocultamos catálogo, mostramos info
    productGrid.classList.add('d-none');
    infoGrid.classList.remove('d-none');
});

// Buscador
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.btn-filter[data-filter="all"]').classList.add('active');
    
    // Si estaba buscando algo, volvemos a la vista de catálogo automáticamente
    infoGrid.classList.add('d-none');
    productGrid.classList.remove('d-none');

    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term));
    displayProducts(filtered);
});

// Cambiar imagen en el modal
window.changeModalImage = function(clickedThumbnail, imageUrl) {
    const mainImg = document.getElementById('modalImage');
    mainImg.style.opacity = 0; 
    setTimeout(() => {
        mainImg.src = imageUrl;
        mainImg.style.opacity = 1;
    }, 150);
    document.querySelectorAll('#modalThumbnails .thumbnail-img').forEach(img => img.classList.remove('active'));
    clickedThumbnail.classList.add('active');
};

// Abrir Modal
window.openModal = function(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;

    document.getElementById('modalTitle').innerText = currentProduct.name;
    document.getElementById('modalRetail').innerText = currentProduct.retail;
    document.getElementById('modalWholesale').innerText = currentProduct.wholesale;

    const imageThumbnailsContainer = document.getElementById('modalThumbnails');
    imageThumbnailsContainer.innerHTML = ''; 
    const imageList = currentProduct.images && currentProduct.images.length > 0 ? currentProduct.images : [currentProduct.img]; 
    document.getElementById('modalImage').src = imageList[0];

    if (imageList.length > 1) {
        imageList.forEach((imageUrl, index) => {
            const isActive = index === 0 ? 'active' : '';
            imageThumbnailsContainer.innerHTML += `
                <img src="${imageUrl}" 
                     onclick="changeModalImage(this, '${imageUrl}')" 
                     class="img-fluid thumbnail-img ${isActive}"
                     alt="Vista ${index + 1}">
            `;
        });
    }

    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
};

// Checkout vía WhatsApp
window.sendToWhatsapp = function() {
    const phoneNumber = "5493416460980"; 
    const text = `Hola VÉRSE! 👋 Me interesa: *${currentProduct.name}*.
💰 Precio Mayorista: ${currentProduct.wholesale}
💰 Precio Minorista: ${currentProduct.retail}

Quiero coordinar la compra y consultar el talle.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
};

// Carga Inicial
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});