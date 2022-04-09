var a=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
    console.log(a);
    console.log(b);
    console.log(c);

/* here a is in global scope and b,c are in block scope .outside block we can't access b & c  
if same name variable is outside the block i.e shadowing */
