// Solution sans bonus
// Solution avec 5 fonction
function changeFirstImage(){
  document.getElementById('image1').src= 'assets/img/image1_2.jpg';
}
function changeSecondImage(){
  document.getElementById('image2').src= 'assets/img/image2_2.jpg';
}
function changeThirdImage(){
  document.getElementById('image3').src= 'assets/img/image3_2.jpg';
}
function changeFourthImage(){
  document.getElementById('image4').src= 'assets/img/image4_2.jpg';
}
function changeFifthImage(){
  document.getElementById('image5').src= 'assets/img/image5_2.jpg';
}

// Solution avec bonus
// Solution 2
//Fonction permettant de changer les images au survol de chacune d'entre elles
function switchImages(idImg){
  // permet d'aller chercher le nom et l'emplacement des images qui remplacent les images
  document.getElementById(idImg).src = 'assets/img' + idImg + '_2.jpg';
}
// mettre switchImages(id) a onmouseover=switchImages()

// Solution 3
function changeImage(img,source){
  img.src = source;
}
// onmouseover="changeImage(this,'assets/img/image1_2.jpg')"
// Ici le paramétre img c'est this
