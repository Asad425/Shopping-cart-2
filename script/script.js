function plusMinus(whichOne){
    count=document.getElementById('countValueCover');
    const countNumber=parseInt(count.value);
    let caseNewCount
    if(whichOne=='+'){
       newCaseCount=countNumber+1;
       count.value = newCaseCount;
    }
    else if(whichOne=='-' && countNumber>0){
       newCaseCount=countNumber-1;
       count.value = newCaseCount;
       

    }
       const caseTotal=newCaseCount*59;
       document.getElementById('case-total').innerText='$'+caseTotal;
 }