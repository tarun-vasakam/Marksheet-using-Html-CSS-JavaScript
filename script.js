function updatetot() {
    let rows=document.querySelectorAll(".markrow");
    let grandtot=0;
    rows.forEach(row => {
        let thero=row.querySelector('.theory');
        let prac=row.querySelector('.practical');
        let field=row.querySelector('.totalmark');
        let word=row.querySelector('.inword');
        let theorym=parseFloat(thero.value) || 0;
        let practicalm=parseFloat(prac.value) || 0;
        let tot=theorym+practicalm;
        let answerword=toword(tot)
        if (tot>100) {
           field.textContent=0;
           word.textContent="zero"
           alert("Invalid Marks");
           thero.value="";
           prac.value="";
        }
        else{
            field.textContent=tot;
            grandtot+=tot;
            word.innerText=answerword;
        }
    });
    let percentage=(grandtot / (rows.length * 100)) * 100;
    document.getElementById('grand-total').textContent=grandtot.toFixed(0);
    document.getElementById('grand-words').textContent=toword(grandtot);
    document.getElementById('percentage').textContent=percentage.toFixed(2);
    let res=document.querySelector("#result");
    let grad=document.querySelector("#grade");
    if(percentage>50)
    {
        res.innerHTML="PASS"
    }
    else
    {
        res.innerHTML="FAIL"
    }
    if(percentage>=90)
    {
        grad.innerHTML="O"
    }
    else if(percentage>=80 && percentage<90)
    {
        grad.innerHTML="A"
    }
    else if(percentage>=70 && percentage<80)
    {
        grad.innerHTML="B"
    }
    else if(percentage>=60 && percentage<70)
    {
        grad.innerHTML="C"
    }
    else if(percentage>=50 && percentage<60)
    {
        grad.innerHTML="D"
    }
    else
    {
        grad.innerHTML="-"
    }
}
function toword(tot){
    let arr=['Zero ','One ','Two ','Three ','Four ','Five ','Six ','Seven ','Eight ','Nine ']
    let totarr=tot.toString().split("");
    let out="";
    for (let i=0;i<totarr.length;i++)
    {
        out=out+arr[parseInt(totarr[i])];
    }
    return out
}