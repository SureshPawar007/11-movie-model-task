const cl = console.log;

const list = document.getElementById('list');
const main = document.getElementById('para');

const angularLi = document.createElement('li');
angularLi.innerHTML = 'Anglular';
angularLi.className = 'list-group-item'
// cl(angularLi);
//append method add the elemen at last
list.append(angularLi);
// ############ Textnode ######################
//to create a li
const tsli = document.createElement('li');
//add className on li
tsli.className = 'list-group-item'; 
//create a textnode
const tsliText = document.createTextNode('TypeScript')
//append tsliText in tsli and list prepend the tsli
tsli.append(tsliText );
list.prepend(tsli)

const cssLi = document.createElement('li');
cssLi.className = 'list-group-item';
const cssText = document.createTextNode("CSS");
cssLi.prepend(cssText);
list.append(cssLi)

// ########################## add and remove element     ###########################################

const oldPara = document.getElementById('para')
// let removeELe = main.remove();
const newPara = document.createElement('p');
newPara.className = 'alert alert-info mt-4'
newPara.innerHTML = 'Angular Is A Famouse FrameWork';

oldPara.parentNode.replaceChild(newPara,oldPara);




const newSkillList = document.querySelector('#skillList li:last-child');
cl(newSkillList);
const javaScript = document.createElement('li');
javaScript.className = 'list-group-item';
javaScript.innerHTML = 'JavaScript';
newSkillList.parentNode.insertBefore(javaScript,newSkillList);//(newAddList,lastSelectesLIst)










