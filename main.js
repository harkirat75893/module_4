
  let access = document.getElementById("access");
  let submit = document.getElementById("submit");
  let h2 = document.querySelector("h2");
  let main = document.querySelector('main');
  
  submit.addEventListener('click', addGoal);
  // This function adds the weekly goals and adds the buttons that delete and complete the task
  function addGoal(e) { 
    let weeklyGoal = access.value;
    e.preventDefault(); 
    let h2 = document.createElement('h2') ;
    let section = document.querySelector('section');
    h2.textContent= weeklyGoal;
    section.appendChild(h2);
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');
    let buttonText1 = document.createTextNode('Delete Task!');
    let buttonText2 = document.createTextNode('Completed Task!');
    button1.appendChild(buttonText1);
    button2.appendChild(buttonText2);
    h2.appendChild(button1);
    h2.appendChild(button2);
    button1.addEventListener('click', deleteTask);
    button2.addEventListener('click',completedTask);

    // this function deletes the h2 element which contains the task
    function deleteTask(e){
      h2.remove();
    }

    // this function adds the daily task to section with id = completed and removes the delete button
    function completedTask(e){
      let section2 = document.querySelectorAll('section')[1];
      button2.remove();
      section2.appendChild(h2);
    }
  }

  // this function gives our current location using geolocation api
  function geolocation() {

    const status = document.getElementById('status');
    const mapLink = document.getElementById('maplink');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Click to view your location`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.getElementById('geo').addEventListener('click', geolocation);

  // this function gives us location of barrie using google api 
  function initMap() {

    const myHome = { lat: 44.389355, lng: -79.690331, };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: myHome,
    });
    
    const marker = new google.maps.Marker({
      position: myHome,
      map: map,
    });
  }

  

  