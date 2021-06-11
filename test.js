function clearField(field){ 
    if (field.value == field.defaultValue) { 
      field.value = ''; 
    } 
  } 
  function checkField(field){ 
    if (field.value == '') { 
      field.value = field.defaultValue; 
    } 
  } 

