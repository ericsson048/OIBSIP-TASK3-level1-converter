/**
 * c to f: F=(c*1.8)+32
 * f to c: c=(f-32)*1.8
 * c to k: k= c+273.15
 * k to c: c= k-273.15
 * f to k: K=((f-32)/1.8)+273.15
 * k to f: f=((K-273.15)*1.8)+32
 */

function convent(){
    var a =document.getElementById('type').value;
    var degre = parseFloat(document.getElementById('temperature').value);
    switch (a){
        case 'c2f':
            var temp =  (degre*1.8) +32;
            break;  
        case 'f2c':
            var temp =  (degre-32)/1.8;
            break;
        case 'c2k':
            var temp =  degre+237.15;
            break; 
        case 'k2c':
            var temp =  degre-237.15;
            break;
        case 'f2k':
            var temp =  ((degre-32)/1.8)+237.15;
            break;
        case 'k2f':
            var temp =  ((degre-237.15)*1.8) + 32;
            break;  
        default : alert("Error");      
    }
    var res = document.getElementById('result');
    res.textContent = temp +' degre'
    
}
document.querySelector('button').addEventListener('click', convent);

