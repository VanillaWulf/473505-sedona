
      let modalAction=document.querySelector(".modal-open");
      let modalState=document.querySelector(".modal-find");

      let form = modalState.querySelector("form");

      modalAction.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalState.classList.toggle("state-open");
        dateIn.classList.remove("modal-error");
        dateOut.classList.remove("modal-error");
      });

      let dateIn=document.querySelector("[name=date-in]");
      let dateOut=document.querySelector("[name=date-out]");

      let grownUps=document.querySelector("[name=grown-ups]");
      let childrenId=document.querySelector("[name=children]");

      let grownUpsPlus=document.querySelector(".find-hotel-group-grown-ups .plus");
      let grownUpsMunis=document.querySelector(".find-hotel-group-grown-ups .minus");

      let childrenPlus=document.querySelector(".find-hotel-group-grown-children .plus");
      let childrenMunis=document.querySelector(".find-hotel-group-grown-children .minus");

      childrenPlus.addEventListener("click", function (evt) {
        evt.preventDefault();
        let ChildrenCounter = children.getAttribute('value');
        if(parseInt(ChildrenCounter)<99){
           children.setAttribute('value', parseInt(ChildrenCounter)+1);
           childrenId.value = parseInt(ChildrenCounter)+1;
          }
      });
      childrenMunis.addEventListener("click", function (evt) {
        evt.preventDefault();
        let ChildrenCounter = children.getAttribute('value');
        if ( parseInt(ChildrenCounter)>0){
           children.setAttribute('value', parseInt(ChildrenCounter)-1);
           childrenId.value = parseInt(ChildrenCounter)-1;
        }
      });

      grownUps.addEventListener("input",function(evt){
        grownUps.setAttribute('value',grownUps.value);
      })

     childrenId.addEventListener("input",function(evt){
         childrenId.setAttribute('value', childrenId.value);
      })

    grownUpsPlus.addEventListener("click", function (evt) {
      evt.preventDefault();
      let grownUpsCounter = grown_ups.getAttribute('value');
        if(parseInt(grownUpsCounter)<99){
           grown_ups.setAttribute('value', parseInt(grownUpsCounter)+1);
           grownUps.value = parseInt(grownUpsCounter)+1;
          }
        });
      grownUpsMunis.addEventListener("click", function (evt) {
        evt.preventDefault();
        let grownUpsCounter = grown_ups.getAttribute('value');
        if ( parseInt(grownUpsCounter)>0){
         grown_ups.setAttribute('value', parseInt(grownUpsCounter)-1);
         grownUps.value = parseInt(grownUpsCounter)-1;
        }
      });

    form.addEventListener("submit", function (evt) {
      dateIn.classList.remove("modal-error");
      dateIn.offsetWidth = dateIn.offsetWidth;

      dateOut.classList.remove("modal-error");
      dateOut.offsetWidth = dateOut.offsetWidth;

      grownUps.classList.remove("modal-error");
      grownUps.offsetWidth = dateOut.offsetWidth;

      childrenId.classList.remove("modal-error");
      childrenId.offsetWidth = dateOut.offsetWidth;

      if (!dateIn.value || !dateOut.value || !grownUps.value || !childrenId.value) {
      evt.preventDefault();
      if(!dateIn.value){
        dateIn.classList.add("modal-error");
      }
      if(!dateOut.value){
        dateOut.classList.add("modal-error");
      }
      if(!grownUps.value){
        grownUps.classList.add("modal-error");
      }
      if(!childrenId.value){
        childrenId.classList.add("modal-error");
      }

    }
  });
