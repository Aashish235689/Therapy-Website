// localStorage.setItem('name','karl');

let minPrice=0,maxPrice=15000,minStars=0,specific="all";

minPrice=localStorage.getItem('minPrice');
maxPrice=localStorage.getItem('maxPrice');
minStars=localStorage.getItem('minStars');
specific=localStorage.getItem('specific');



const closeSide=document.querySelector(".close");
let prevopen=0;
function closeside(isSidebar=0){
    if(isSidebar)
    return;
    let x=new Date();
    if(x-prevopen<=500)
    return;
    const sidebar=document.querySelector(".sidebar");
    // const str=

    sidebar.style.visibility="hidden";
    modify();
    // sidebar.style.width="0";
}
closeSide.addEventListener('click',closeside);
// const bd=document.querySelector('b#70c2be
// bd.addEventListener('click',closeside);
const openSide=document.querySelector(".open-sidebar");

function openside(){
    prevopen=new Date();
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.visibility="visible";
}

openSide.addEventListener('click',openside);
let prev=0;
function specify(x){
    let d=new Date();
    // console.log(prev.valueOf());
    // console.log(d.valueOf());
    if(d-500<=prev)
    return;
    prev=d;
    specific=x;
    localStorage.setItem('specific',x);
    document.querySelector('#addiction').style.color="#70c2be";
    document.querySelector('#marriage').style.color="#70c2be";
    document.querySelector('#behavior').style.color="#70c2be";
    document.querySelector('#psych').style.color="#70c2be";
    document.querySelector('#trauma').style.color="#70c2be";
    document.querySelector('#child').style.color="#70c2be";
    if(specific[0]==='M')
    document.querySelector('#marriage').style.color="white";
    else if(specific[0]==='A')
    document.querySelector('#addiction').style.color="white";
    else if(specific[0]==='P')
    document.querySelector('#psych').style.color="white";
    else if(specific[0]==='B')
    document.querySelector('#behavior').style.color="white";
    else if(specific[0]==='T')
    document.querySelector('#trauma').style.color="white";
    else if(specific[0]==='C')
    document.querySelector('#child').style.color="white";
    // console.log(specific);
}

function rangeSlide(value,y) {
    // console.log(y);
    if(y=='min')
    {
        localStorage.setItem('minPrice',value);
        document.querySelector('#min-value').innerHTML = value;
        minPrice=value;
        document.querySelector('.minSlider').value=minPrice;
    }
    else{
        localStorage.setItem('maxPrice',value);
        document.querySelector('#max-value').innerHTML = value;
        maxPrice=value;
        document.querySelector('.maxSlider').value=maxPrice;
    }
}
let stars=0;
function changeRating(x){
    minStars=x;
    localStorage.setItem('minStars',x);
    const stars=document.querySelectorAll('.stars');
    for(let i=0;i<stars.length;i++)
    stars[i].style.color="black";
    for(let i=0;i<x;i++)
    stars[i].style.color="gold";
    minStarsstars=x;
}

//data

let string="Melissa Chan,Muhammed Michael,Natasha O'Moore,Curtis Shepherd,Lula Bradley,Sufyaan Strickland,Siobhan Villarreal,Trystan Owen,Carla Savage,Carly Hickman,Oskar Davila,Alina Gonzalez,Josh Perkins,Wilfred Vargas,Mae Chandler,Conor French,Ioan Smith,John Beck,Blake Dennis,Jaydon Hale,Kiana Dale,Mina Vasquez,Dexter Colon,Maximilian Cervantes,Kasey Meadows,Aleesha Dominguez,Ethel Durham,Bushra Floyd,Gordon Camacho,Malika Burnett,Leyla Campos,Ayah Norman,Ada Harvey,Gene Frost,Abdullah Brown,Annabelle Hutchinson,Nannie Carson,Cade Cisneros,Aaliyah Villa,Amber Sampson,Lili Sharpe,Ilyas Rosales,Honey Poole,Alistair Walls,Kaya Nelson,Norman Stevens,Sally Finley,Tegan Jacobson,Carrie Bell,Richard Patterson,Andreas Clements,Chelsea Molina,Kiran Proctor,Otis Barton,Anisha Frank,Isaac Cantu,Abigail Baldwin,Velma Frazier,Antony Li,Mckenzie Baird,Solomon Morton,Franklin Mayer,Angelina Phelps,Bradley Wallace,Maria Drake,Isabel George,Iona Vaughan,Shaun Lynch,Jordan Faulkner,Aiza Santana,Macauley Christensen,Brendan Velazquez,Zaara Mccann,Aamina Duncan,Patrick Mcgrath,Claudia Morrison,Keelan Myers,Caitlin Olson,Kadie Mckay,Phyllis Alvarado,Callum Elliott,Moshe Hayden,Astrid Mcbride,Carys Brady,Ben Gibbons,Mercedes Odonnell,Whitney Winters,Oisin Gibbs,Leah Estes,Miya Reid,Anna Singh,Alice Zamora,Gregory Patrick,Jose Buckley,Halima Oneill,Mahdi Brandt,Joanna Dickerson,Savannah Castaneda,Erik Crawford,Ieuan Cline,Kamran Bush,Ada Sosa,Lincoln Bryant,Eden Bird"

let names=string.split(',');

let specialities=[
    'Addiction Therapy',
    'Marriage and Family Counseling',
    'Marriage and Family Counseling',
    'Marriage and Family Counseling',
    'Marriage and Family Counseling',
    'Behaviour Counseling',
    'Psychiatrist',
    'Addiction Therapy',
    'Trauma Therapy',
    'Addiction Therapy',
    'Behaviour Counseling',
    'Psychiatrist',
    'Trauma Therapy',
    'Trauma Therapy',
    'Marriage and Family Counseling',
    'Addiction Therapy',
    'Addiction Therapy',
    'Child Therapy',
    'Behaviour Counseling',
    'Marriage and Family Counseling',
    'Trauma Therapy',
    'Trauma Therapy',
    'Marriage and Family Counseling',
    'Psychiatrist',
    'Marriage and Family Counseling',
    'Behaviour Counseling',
    'Child Therapy',
    'Behaviour Counseling',
    'Addiction Therapy',
    'Addiction Therapy',
    'Trauma Therapy',
    'Behaviour Counseling',
    'Marriage and Family Counseling',
    'Child Therapy',
    'Marriage and Family Counseling',
    'Addiction Therapy',
    'Psychiatrist',
    'Addiction Therapy',
    'Psychiatrist',
    'Psychiatrist',
    'Behaviour Counseling',
    'Psychiatrist',
    'Addiction Therapy',
    'Psychiatrist',
    'Addiction Therapy',
    'Behaviour Counseling',
    'Behaviour Counseling',
    'Psychiatrist',
    'Psychiatrist',
    'Behaviour Counseling',
    'Trauma Therapy',
    'Behaviour Counseling',
    'Behaviour Counseling',
    'Behaviour Counseling',
    'Child Therapy',
    'Addiction Therapy',
    'Psychiatrist',
    'Addiction Therapy',
    'Addiction Therapy',
    'Addiction Therapy',
    'Behaviour Counseling',
    'Behaviour Counseling',
    'Trauma Therapy',
    'Trauma Therapy',
    'Child Therapy',
    'Trauma Therapy',
    'Psychiatrist',
    'Behaviour Counseling',
    'Marriage and Family Counseling',
    'Psychiatrist',
    'Addiction Therapy',
    'Child Therapy',
    'Child Therapy',
    'Child Therapy',
    'Trauma Therapy',
    'Psychiatrist',
    'Behaviour Counseling',
    'Child Therapy',
    'Behaviour Counseling',
    'Trauma Therapy',
    'Psychiatrist',
    'Addiction Therapy',
    'Psychiatrist',
    'Psychiatrist',
    'Marriage and Family Counseling',
    'Psychiatrist',
    'Trauma Therapy',
    'Addiction Therapy',
    'Trauma Therapy',
    'Behaviour Counseling',
    'Trauma Therapy',
    'Addiction Therapy',
    'Behaviour Counselling',
    'Marriage and Family Counseling',
    'Trauma Therapy',
    'Addiction Therapy',
    'Marriage and Family Counseling',
    'Behaviour Counseling',
    'Child Therapy',
    'Trauma Therapy',
    'Addiction Therapy',
    'Trauma Therapy',
    'Addiction Therapy',
    'Trauma Therapy'
  ]
let images=[
    'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2080383/pexels-photo-2080383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/64385/pexels-photo-64385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/4429279/pexels-photo-4429279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5081971/pexels-photo-5081971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/5044191/pexels-photo-5044191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/16869355/pexels-photo-16869355/free-photo-of-black-and-white-shot-of-a-man-in-a-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7585607/pexels-photo-7585607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png',
    'https://placehold.jp/200x250.png'
  ]
let rating=[
    3.82, 4.83, 4.12, 3.68, 3.72, 4.58, 4.77, 3.75,  3.6, 4.88,
    4.43, 4.53, 4.75, 3.96,  3.9, 3.29, 4.36, 4.73, 4.79, 3.79,
    3.15, 3.32, 3.58,  3.1, 4.99, 3.89, 3.04, 4.69, 3.63, 3.45,
    4.32, 4.23, 4.56, 3.22, 3.79, 4.09, 3.62, 4.33, 4.32, 4.13,
    4.35, 3.01, 4.03, 4.58, 4.89, 3.87, 4.85, 3.72, 4.23, 4.37,
    3.69, 3.23, 3.72, 3.89, 3.99,  4.4, 3.17, 4.79, 3.45, 4.74,
    0.98, 3.04, 1.53, 0.66, 4.16, 3.64, 3.34, 3.08, 4.43, 1.37,
    1.39, 1.33,  3.1, 2.31, 4.63, 1.93, 1.85, 4.26, 2.26, 2.81,
    4.32, 1.83,  2.7, 2.03, 4.49, 2.99, 3.59, 1.13, 2.54,  2.1,
    2.53, 3.28, 4.73, 1.88, 3.94, 2.46, 2.65, 2.28, 3.21,    3,
    3.5,4.23,2.95,4
  ]

let fee=[
    13500, 10800,  7800,  6900, 12700,  7400, 11400, 11100, 11700,
    12400, 10300, 12900, 12800, 13900,  7700, 12600,  7500, 10600,
     6700,  6600,  9100, 11700, 14200, 11700, 11600, 13500,  7700,
    12900,  8900,  7100, 14500,  6900, 13600,  6600,  7500,  8900,
    11000,  6700,  5600,  3600,  9100, 14500, 12000, 13800,  7300,
    13700, 11400,  4200,  4400, 10800,  4200, 13300,  6400,  8400,
    14900,  3200,  7600,  5300,  7100,  4700,  6800,  9400, 12000,
     8000,  8400,  8000, 14200,  7400, 11800,  4700,  3200, 12200,
     6900,  8400,  1800,  6400,  9700,  4600,  6000, 13100, 11400,
     4600, 10800,  4300, 12700,  2500,  2000,  6100, 14500,  1900,
     8100,  4300,  4300,  4400,  9200,  3400,  3800,  8100,  8500,
     7600,4500,3000,5400,3100
  ]
let modified_names=names.map((x)=>x);
let modified_images=images.map((x)=>x);
let modified_specialities=specialities.map((x)=>x);
let modified_rating=rating.map((x)=>x);

let page=1,tot=104,curr_page=1;

// console.log(document.querySelector('.thera6'));

function modify(){
    let v=[];
    v=fee.map((x,index)=>{
        return x>=minPrice&&x<=maxPrice;
    })
    // console.log(v);
    for(let i=0;i<v.length;i++){
        v[i]=v[i]&(rating[i]>=minStars);
    }
    // console.log(v);
    modified_images=[];
    modified_names=[];
    modified_rating=[];
    modified_specialities=[];
    let k=0;
    // console.log(specific);
    for(let i=0;i<v.length;i++){
    
        if(v[i]&(specific==='all'||specific===specialities[i])){
            modified_images[k]=images[i];
            modified_names[k]=names[i];
            modified_rating[k]=rating[i];
            modified_specialities[k]=specialities[i];
            k++;
        }
    }
    // console.log(modified_specialities);
    // console.log(modified_rating);
    changePage(curr_page);

}


function changePage(x){
    curr_page=x;
    const goto=x-1;
    const start=10*goto;
    
    let end=start+10;
    if(end>modified_images.length)
    end=modified_images.length;
    // console.log(start);
    // console.log(end);
    for(let i=start;i<end;i++)
    {
        let str=".thera"+((i)%10+1);
        const thera=document.querySelector(str);
        thera.style.visibility='visible';

        let string=str+' .speciality';
        const spc=document.querySelector(string);
        spc.textContent=modified_specialities[i];


        string=str+' .profile-pic';
        const img=document.querySelector(string);
        img.src=modified_images[i];

        string=str+' .checked';
        // console.log(string);
        const stars=document.querySelectorAll(string);
        // console.log(rating[i]);
        const x=Math.floor(rating[i]);
        for(let j=0;j<stars.length;j++)
        stars[j].style.color="black";
        for(let j=0;j<x;j++)
        {
            // console.log('hi');
            stars[j].style.color="gold";
        }
        // console.log('hi');
         str=".thera"+((i)%10+1)+' .name';
        // console.log(str);
        const therapist=document.querySelector(str);
      
        therapist.textContent=modified_names[i];
        // if(i==end-1)
    
        
    }
    if(end===modified_images.length){
        for(let i=4;i<10;i++){
            let str=".thera"+((i)%10+1);
            // console.log(str);
            const thera=document.querySelector(str);
            thera.style.visibility='hidden';
        }
    }
    string=document.querySelector('.currentPage');
    
    let n=modified_images.length;
    string.textContent='Page '+x+' of '+Math.ceil(n/10);
    const btns=document.querySelectorAll('.btn');
    for(let i=0;i<btns.length;i++)
    {
        btns[i].style.visibility="hidden";
        // btns[i].style.flexBasis='0';
        btns[i].textContent="";
        // btns[i].style.width="0";
    }
    let z=50/Math.ceil(n/10);
    console.log(z);
    for(let i=0;i<Math.ceil(n/10);i++)
    {
        btns[i].style.visibility="visible"
        btns[i].textContent=i+1;
        // btns[i].style.flexBasis=z+'%';
        // btns[i].stle.width="20px";
    }
}
// console.log(minPrice);
rangeSlide(minPrice,'min');
rangeSlide(maxPrice,'max');
specify(specific);
changeRating(minStars);
modify();
changePage(1);

//data

// window.open('index.html','_self');

function openProfile(x){
    const t=document.querySelector('.sidebar');
    if(t.style.visibility==='visible')
    return;
    // console.log(x);
    const string='.thera'+x;
    const therapist=document.querySelector(string);
    localStorage.setItem('name',therapist.children[1].textContent);
    window.open('Profiles.html','_self');
}





