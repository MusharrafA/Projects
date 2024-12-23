const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(height === '' || height <0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`;
  }else if(weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`;
  }else{
    const bmi= (weight/((height*height)/10000)).toFixed(2);
    //show the result 
    //idhar kuch gadbar hui hai badme fix krunga 
    if(bmi < 18.6 ){
      const underweight = `your bmi is underweight ${bmi}`
      results.innerHTML = `<span>${bmi}</span>`;
    }
    else if(bmi >= 18.6 && results <=24.9){
      const normalBmi = `your bmi is normal ${results}`;
      results.innerHTML = `<span>${bmi}</span>`;
    }
    else{
      const overweight = `your bmi is out of the range ${results}`;
      results.innerHTML = `<span>${bmi}</span>`;
    }
    
  }
  

});