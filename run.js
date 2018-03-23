

function findActionLink(el){
  var children = el.childNodes;

  for(var i=0; i < children.length; i++){

    if( children[i].textContent == "Remove Reaction" || children[i].textContent == "Unlike" ){
      return children[i];
    }
    else if( children[i].childNodes.length > 0){
      var found = findActionLink(children[i]);

      if(found)
        return found;
    }
  }

  return false;

}

function removeReaction(){
  var links = document.getElementsByTagName("a");

  for(var i=0; i<links.length; i++){
      if( links[i].innerHTML.indexOf("Remove Reaction") > -1 || links[i].innerHTML.indexOf("Unlike") > -1){

          var toClick = findActionLink(links[i]);

          if(toClick){
            console.log(links[i].innerHTML);
            $(toClick).click();
          }

      }
  }
}

function unlikeEverything(){
  var links = document.getElementsByTagName("a");

  for(var i=0; i<links.length; i++){
      if( links[i].textContent == "Edit" ){

          $(links[i]).click();

          setTimeout( removeReaction, 800 );

          console.log("Waiting...")

      }
  }
}

unlikeEverything();
