function addResponse() {
    $('#addResponseModal').modal('show');
}
function saveResponse() {
  // Get the input values from the modal
  const title = document.getElementById('titleInput').value;
  const persons = document.getElementById('personsInput').value;
  const days = document.getElementById('daysInput').value;
  const location = document.getElementById('locationInput').value;
  const price = document.getElementById('priceInput').value;

  // Create the data object to be sent as JSON
  const data = {
    title,
    persons,
    days,
    location,
    price
  };

  // Make an AJAX request or use fetch to send the data to the server
  fetch('/responses/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server (e.g., display a success message)
    console.log('Response saved successfully:', data);
    $('#addResponseModal').modal('hide');
    window.location.href = '/responses';

  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error saving response:', error);
  });
}

function deleteTour(id) {
  // Make an AJAX request or use fetch to send the ID to the server
  fetch('/responses/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server (e.g., display a success message)
    console.log('Tour deleted successfully:', data);
    location.reload(true);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error deleting tour:', error);
  });
}

function editTour(id) {
  fetch('/responses/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id })
  })
    .then(response => {
      if (response.ok) {

        return response.json();
      } else {
        // If the response is not successful, handle the error
        throw new Error('Error retrieving tour: ' + response.status);
      }
    })
    .then(data => {
      // Handle the data received (tour object)
      console.log('Tour details:', data);

      // Now you can navigate to the edit page and pass the tour object as query parameter
      const editUrl = '/responses/edit?id=' + id;
      window.location.href = editUrl;
    })
    .catch(error => {
      console.error(error);
    });
}
function updateTour(id) {
  // Get the updated input values from the form
  const title = document.getElementById('editTitleInput').value;
  const persons = document.getElementById('editPersonsInput').value;
  const days = document.getElementById('editDaysInput').value;
  const location = document.getElementById('editLocationInput').value;
  const price = document.getElementById('editPriceInput').value;

  // Create the data object to be sent as JSON
  const data = {
    id: id,
    title: title,
    persons: persons,
    days: days,
    location: location,
    price: price
  };

  // Make an AJAX request or use fetch to send the data to the server for updating
  fetch('/responses/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      // Check the response status
      if (response.ok) {
        // If the response is successful, redirect to the main page or display a success message
        window.location.href = './';
      } else {
        // If the response is not successful, handle the error
        throw new Error('Error updating tour: ' + response.status);
      }
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });
}
