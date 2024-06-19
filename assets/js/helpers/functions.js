//------------------------------------------------------------------------------------------
// SLEEP FUNCTION
// wait a minute! We need to sleep! 
// use: await sleep(time in ms)
// async function needed

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//------------------------------------------------------------------------------------------
// CREATE DIV
// create a container of your choice, with optionnal content and classe(s)
// Return the created div
// use: const div = createDiv('type of div',the parent,'content','classname')
// you can use null value to avoid content and class
// ex: const div = createDiv('p',parent,null,null)

export function createDiv(type,parent,content,className,setValue,setSrc) {
    const newDiv=document.createElement(type);
    if (content!=null) {
      newDiv.innerHTML=content;
    }
    if (className!=null) {
      newDiv.classList.add(className);
    }
    if (setValue!=null) {
      newDiv.value=setValue
    }
    if (setSrc!=null) {
      newDiv.value=setSrc
    }
    parent.appendChild(newDiv);
    return newDiv;
}

//------------------------------------------------------------------------------------------



export function compareDates(dates) {
  const currentDate = new Date().toISOString().split('T')[0];
  dates.forEach(date => {
    date.min  = currentDate;
  });
}

    
    
    

