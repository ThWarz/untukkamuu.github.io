const container1 = document.querySelector(".container");
console.log(container1)
const container2 = document.querySelector('#counter2')
const p = container2.querySelector('h2')
const p2 = container2.querySelector('p')
p.style.fontFamily = 'arial'
console.log(p)
const container3 = document.querySelector('#counter3')
console.log(container3)
container3.style.display  = 'none'
container2.style.display = 'none'
const licontainer2 = container2.querySelector('footer')

licontainer2.style.display = 'none'
// const fotcontainer1 = container1.querySelector('footer').addEventListener('click ' , function(){
//     console.log('ok')
// })

// isi dari counter 3 

const counter3 = document.querySelector('#counter3')
const cn3p = counter3.querySelectorAll('p')  
const cn1 = cn3p[0]
const cn2 = cn3p[1]
const cn3 = cn3p[2]
const cn4 = cn3p[3]
console.log(cn1)
//  end of counter 3 ==== 

console.log(cn3p)

// ======
//====== end tag by html======
let i =0 ;
let f = 0;
let text = `Sebenarnya..`;
let text2 = 'Aku suka sama kamu :)';
// function li click 
function pencet() {
    container2.style.display= 'flex'
    setTimeout(() => {
        container1.style.display = "none";
    }, 500);
    
    setTimeout( () => {
        licontainer2.style.display = 'flex'
        licontainer2.style.animation = ''
    },3600 )
    
    function type(){
        if(i < text.length){
            p.innerHTML += text[i];
            i++;
            setTimeout(type , 100)
        }else if(f < text2.length){
            p2.innerHTML += text2[f];
            f++;
            setTimeout(type , 100)
        }

    }
    type()

}

let a = 0;
let b = `Kalo kamu tanya kenapa aku suka sama kamu, itu karena aku punya rasa nyaman tersendiri yang ga akan aku temui di mana pun.`
let c = 0 ;
let d = `Kamu tau ?`;
let e = 0 ;
let g = ` Gaada yang bisa bikin aku nyaman selain kamu... `
let h = 0 ;
let k = `Dan kerena mengenalimu, aku merasakan apa itu kenyamanan, apa itu kebahagiaan, dan kamu sekaligus rumah bagiku :)`

const container3foot = container3.querySelector('footer')
container3foot.style.display  = 'none'
console.log('ok ' , container3foot)

function pencet2( ){
  setTimeout(() => {

    container3foot.style.display = 'flex'
  } , 17000)
     container3.style.display= 'flex'
     
     setTimeout(() => {
        container2.style.display = 'none'
     },500);

 function type2(){
    container3.style.display = 'flex'
    if(a < b.length){
        setTimeout(type2 ,50)
            cn1.innerHTML += b[a];
            a++

    }else if(c < d.length){
        cn2.innerHTML += d[c]
        c++
        setTimeout(type2 ,50)
    }else if(e < g.length){
        cn3.innerHTML += g[e]
        e++
        setTimeout(type2  ,50 )
    }else if(h < k.length){
        cn4.innerHTML += k[h]
        h++ 
        setTimeout(type2 ,50)
    }
    }

 type2()
  

}
const container4 = document.querySelector('#counter4')
container4.style.display = 'none'
function pencet3(){
  container4.style.display = 'flex'
  setTimeout(() =>{
    container3.style.display = 'none'

  }, 400)
}


const counter5 = document.querySelector('#counter5')

const counter5h3 = counter5.querySelectorAll('h3')
const counter5h31 = counter5h3[0]
const counter5h32 = counter5h3[1]

const counter5p = counter5.querySelectorAll('p')

const counter5p1 = counter5p[0]
const counter5p2 = counter5p[1]
const container5p3 = counter5p[2]



let ab = 0;
let abtext = 'yeeayy! 🥳'
let abctext = 'I Love You 😘'
let abc = 0 ;
let ac = 0;
let actext = 'Makasih udah mau nerima'
let bb = 0
let bbtext = 'aku jadi pacar kamu, hihi 💗💗'
let ad =0 ;
let adtext = 'Jangan lupa balas di WA yah 😊'
const counter4 = document.querySelector('#counter4')
const cn4btn = counter4.querySelectorAll('button')
let acisi = 0;
console.log(cn4btn)

const container6 = document.querySelector('#counter6')
const container6h3 = container6.querySelector('h3')
const container6p = container6.querySelectorAll('p')
const container6p1 = container6p[0]
const container6p2 = container6p[1]
let text1 = 'Hmmm , OK '
let text1cn = 0 ; 
let text2dd = 'adadadasdofjgojsdjogsjo'
let text2cn = 0 ;
let text3 = 'iadafafhnuashnfiuhaf'
let text3cn = 0;

function tolak(){
  setTimeout( () => {

container4.style.display = 'none'
}, 500)
  container6.style.display = 'flex'
    if(text1cn < text1.length ){
       setTimeout(tolak , 100 )
       container6h3.innerHTML += text1[text1cn] 
       text1cn ++
    }else if(text2cn < text2dd.length ){
       setTimeout(tolak , 100 )
       container6p1.innerHTML += text2dd[text2cn] 
       text2cn ++
    }else if(text3cn < text3.length ){
       setTimeout(tolak , 100 )
       container6p2.innerHTML += text3[text3cn] 
       text3cn ++
    }
}
container6.style.display = 'none'

counter5.style.display = 'none'

function terima(){
  setTimeout( () => {

    container4.style.display = 'none'
  }, 500)
  counter5.style.display = 'flex'

     if(ab < abtext.length){
         counter5h31.innerHTML += abtext[ab]
         ab++
         setTimeout(terima , 100)

     }else if (ac < actext.length){
        counter5p1.innerHTML += actext[ac]
        ac++;
        acisi ++;
        console.log(ac)
        setTimeout(terima , 100)
     }else if (bb < bbtext.length){
        counter5p2.innerHTML += bbtext[bb]
        bb++;
        setTimeout(terima , 100) 
     }else if(abc < abctext.length ){
        counter5h32.innerHTML += abctext[abc]
        abc++
        setTimeout(terima , 100)
        if(ac === acisi ){
           counter5h31.style.display = 'none'
        }
     }else if(ad < adtext.length){
         container5p3.innerHTML += adtext[ad]
         ad++
         setTimeout(terima , 100)
     }

 

}